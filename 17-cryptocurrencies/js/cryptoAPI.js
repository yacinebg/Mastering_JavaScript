class CryptoAPI{

    // Query The Rest API with a currency and a cryptoCurrency
    async queryAPI(currencySelect, cryptoCurrencySelect) {
        // Query the URL
        const url = await fetch(`https://api.coinmarketcap.com/v1/ticker/${cryptoCurrencySelect}/?convert=${currencySelect}`)

        // Return as JSON
        const result = await url.json()

        // Return The Object 
        return {
            result
        }
    }


    // Get All The Cryptocurrncies
    async getCryptoCurrenciesList() {
        const url = await fetch(`https://api.coinmarketcap.com/v1/ticker/`);

        // Return this as a json
        const cryptoCurrencies = await url.json();

        // return the Object
        return {
            cryptoCurrencies
        }
    }

    
}