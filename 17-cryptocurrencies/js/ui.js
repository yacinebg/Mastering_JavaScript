class UI{
    constructor() {
        this.init()
    }

    init() {
        this.printCryptoCurrencies()
    }

    // Prints The <option> for the form
    printCryptoCurrencies() {
        cryptoAPI.getCryptoCurrenciesList()
        .then(data => {
            const cryptoCurrencies = data.cryptoCurrencies

            // Build the <select> from the Reset API
            const select = document.getElementById('cryptocurrency')

            cryptoCurrencies.forEach(currency => {
                // Add The <option>
                const option = document.createElement('option')
                option.value = currency.id
                option.appendChild(document.createTextNode(currency.name))
                select.appendChild(option)
            });

            }).catch(error => console.log(error))
    }   


    // Print a message 2 parameters, message and classes
    printMessage(message, className){
        const div =  document.createElement('div')

        // Add the classes
        div.className = className

        // Add the message
        div.appendChild(document.createTextNode(message))

        //
        const messageDiv = document.querySelector('.messages')

        messageDiv.appendChild(div)


        // Remove The 
        setTimeout(() => {
            document.querySelector('.messages div').remove()
        },3000)
        
    }

    // Print The result of the valuation / rate
    displayResult(result, currency){


        // Read The  Currency
        let currencyName
        currencyName = 'price_'  + currency.toLowerCase()
        

        // Read the result from the Object
        const value = result[currencyName]
        console.log(value);


        // Remove the Previous Result
        const prevResult = document.querySelector('#result > div')
        if(prevResult) { prevResult.remove() }
        

       
        let HTMLTemplate  = ''

        HTMLTemplate  += `

                <div class="card cyan darken-3">
                    <div class="card-content white-text">

                        <span class="card-title">Result</span>
                        <p>The Price of <strong>${result.name}</strong> from ${currency} is $ ${value} </p>
                        <p>Last Hour : ${result.percent_change_1h}</p>
                        <p>Last Day : ${result.percent_change_24h}</p>
                        <p>Last 7 Days : ${result.percent_change_7d}</p>
                    </div>
                </div>
        
        `

        // Print The Spinner
        this.showSpinner();


        // After 3 seconds print the result and remove the spinner
        setTimeout(() => {

            // Print the Result
            const divResult = document.querySelector('#result')
            divResult.innerHTML = HTMLTemplate;

            // Hide the Spinner
            document.querySelector('.spinner img').remove()


        },3000)
        
        
    }


    // Prints the Spinner
    showSpinner() {
        const spinnerGif = document.createElement('img')

        spinnerGif.src = 'img/spinner.gif'
        
        document.querySelector('.spinner').appendChild(spinnerGif)
    }
}