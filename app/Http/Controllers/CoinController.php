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

    public function index()
    {
        $allCoins = $this->getAllCryptoCoinsInformation();

        return response()
            ->json([
                'coins' => $allCoins
            ]);
    }

    public function getAllCryptoCoinsInformation($coinId = '')
    {
        $client = $this->getGuzzleCachedClient();
        $requestUrl = self::COINMARKET_URL . "/v1/ticker/?limit=0";
        if ($coinId) {
            $requestUrl .= "/$coinId";
        }
        $makeRequest = $client->request('GET', $requestUrl);

        $response = json_decode($makeRequest->getBody(), true);

        if (array_key_exists('error', $response)) {
            throw $this->createNotFoundException('Found error: ' . $response['error']);
        }

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
