<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use GuzzleHttp\Client;

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
        $client = new Client();
        $requestUrl = self::COINMARKET_URL . "/v1/ticker";
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
}
