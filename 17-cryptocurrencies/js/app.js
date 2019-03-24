// Instanciate the classes

const cryptoAPI = new CryptoAPI()
const ui = new UI()


// Create the Variables
const form = document.getElementById('form')


// Add Event Listener
form.addEventListener('submit', (e) => {
    e.preventDefault()

    // read Currency
    const currencySelect = document.getElementById('currency').value
    // read cryptoCurrency
    const cryptoCurrencySelect = document.getElementById('cryptocurrency').value


    // Validate that the Selects  have Something
    if(currencySelect === '' || cryptoCurrencySelect === ''){
        // Display an Error
        ui.printMessage('All the fields are mandatory','deep-orange darken-4 card-panel')
    }else{
        // Query the rest api 
        cryptoAPI.queryAPI(currencySelect, cryptoCurrencySelect)
                .then(data => {
                    ui.displayResult(data.result[0], currencySelect)
                })

                // console.log(currencySelect + '   ' + cryptoCurrencySelect)
    }
})

