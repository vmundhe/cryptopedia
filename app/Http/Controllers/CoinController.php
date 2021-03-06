<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use GuzzleHttp\Client;
use GuzzleHttp\HandlerStack;
use Kevinrob\GuzzleCache\CacheMiddleware;
use Illuminate\Support\Facades\Cache;
use Kevinrob\GuzzleCache\Strategy\PrivateCacheStrategy;
use Kevinrob\GuzzleCache\Storage\LaravelCacheStorage;

class CoinController extends Controller
{
    const COINMARKET_URL = "https://api.coinmarketcap.com";
    const CRYPTOCOMPARE_URL = "https://www.cryptocompare.com";
    const MIN_API_CRYPTOCOMPARE = "https://min-api.cryptocompare.com";

    public function index()
    {
        $coinMarketInfo = $this->getAllCryptoCoinsInformation();
        $cryptocompareInfo = $this->getCryptocompareCoinInfo();

        $allCoins = $coinMarketInfo;
        $totalMarketCap = 0;
        foreach ($allCoins as &$data) {
            $totalMarketCap += $data['market_cap_usd'];
            if (isset($cryptocompareInfo[$data['symbol']])) {
                $data['coin_id'] = $cryptocompareInfo[$data['symbol']]['Id'];
                $data['logo'] = self::CRYPTOCOMPARE_URL . $cryptocompareInfo[$data['symbol']]['ImageUrl'];
            }
        }

        return response()
            ->json([
                'coins' => $allCoins,
                'total_market_cap' => $totalMarketCap
            ]);
    }

    public function getAllCryptoCoinsInformation($coinId = '')
    {
        $requestUrl = self::COINMARKET_URL . "/v1/ticker/?limit=0";
        if ($coinId) {
            $requestUrl .= "/$coinId";
        }

        $response = $this->makeAPICall($requestUrl);

        if (array_key_exists('error', $response)) {
            throw $this->createNotFoundException('Found error: ' . $response['error']);
        }
        return $response;
    }

    public function getCryptocompareCoinInfo()
    {
        $response = $this->makeAPICall(self::CRYPTOCOMPARE_URL . "/api/data/coinlist");

        if ($response['Response'] == 'Error') {
            throw $this->createNotFoundException('Found error: ' . $response['error']);
        }
        return $response['Data'];
    }

    public function getCoinInfo($symbol, $id)
    {
        $coinExchangesInfo = $this->makeAPICall(self::CRYPTOCOMPARE_URL . "/api/data/coinsnapshot/?fsym=$symbol&tsym=USD");
        $exchanges = $coinExchangesInfo['Data']['Exchanges'];


        $coinAdditionalInfo = $this->makeAPICall(self::CRYPTOCOMPARE_URL . "/api/data/coinsnapshotfullbyid/?id=$id");
        $additionalInfo = $coinAdditionalInfo['Data']['General'];
        $websiteLink = explode('/', $additionalInfo['Website']);
        $additionalInfo['website'] = $websiteLink[2];

        $coinHistory = $this->getCoinHistory($symbol, current($exchanges)['MARKET']);

        if ($coinExchangesInfo['Response'] == 'Error') {
            throw $this->createNotFoundException('Found error: ' . $coinExchangesInfo['error']);
        }

        return response()
            ->json([
               'exchanges' => $exchanges,
                'additional_info' => $additionalInfo,
                'history' => $coinHistory
            ]);
    }

    public function getCoinHistory($symbol, $exchange)
    {
        $coinHistoryInfo = $this->makeAPICall(self::MIN_API_CRYPTOCOMPARE . "/data/histoday?fsym=" . strtoupper($symbol) . "&tsym=USD&limit=2000&e=" . $exchange);
        $coinHistory = $coinHistoryInfo['Data'];

        foreach ($coinHistory as &$data) {
            $data['time'] = isset($data['time']) ? date('F j, Y', $data['time']) : 'N/A';
        }

        return $coinHistory;
    }

    public function makeAPICall($url = '')
    {
        $client = $this->getGuzzleCachedClient();
        $requestUrl = $url;
        $makeRequest = $client->request('GET', $requestUrl);

        $response = json_decode($makeRequest->getBody(), true);

        return $response;
    }

    public function getGuzzleCachedClient()
    {
        $stack = HandlerStack::create();

        $stack->push(
            new CacheMiddleware(
                new PrivateCacheStrategy(
                    new LaravelCacheStorage(
                        Cache::store('redis')
                    )
                )
            ),
            'cache'
        );

        return new Client(['handler' => $stack]);
    }
}
