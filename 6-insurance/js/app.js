//  Variables
const form = document.getElementById('request-quote')

const html = new HTMLUI()



// Èvent Listeners

eventListeners() 

function eventListeners() {
    document.addEventListener('DOMContentLoaded', function() {
        // Create the <option> For the Years
        html.displayYears()
    })
    
    
    // When the form is submit
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Read the values from the FORM
        const make = document.getElementById('make').value
        const year = document.getElementById('year').value

        // console.log(make)
        // console.log(year)

        // Read the Radio Buttons
        const level = document.querySelector('input[name="level"]:checked').value
        // console.log(level);
        
        // Check that all the fields have something
        if(make === '' || year === '' || level === '') {
            html.displayError('All the Fields Are Mandatory')
        } else {

            // Clear the previous quotes
            const prevResult = document.querySelector('#result div')
            if(prevResult != null){
                prevResult.remove()
            }

            // Make the quotation
            const insurance = new Insurance(make, year, level)
            const price = insurance.calulateQuotation(insurance)


            // Print the Result From HTMLUI()
            html.showResults(price, insurance)
        }
        

    })
}



// °°°°°°°°°°° Objects

// Everything related to the quotation and Calculations is Insurance
function Insurance(make, year, level) {
    this.make = make
    this.year = year
    this.level = level
}

// Calculate the price for the current quotation
Insurance.prototype.calulateQuotation = function(insurance){
    
    let price
    const base = 2000

    // Read the make
    const make = insurance.make

    /*
        1 = American 15%    / 1.15
        1 = Asian 05%      /  1.05
        1 = European 35%  /   1.35
    */

    switch(make) {
        case '1':
            price = base * 1.15
            break
        case '2':
            price = base * 1.05
            break
        case '3':
            price = base * 1.35
            break
    }


    // Get The Year
    const year = insurance.year
    // Get The Year Difference
    const difference = this.getYearDifference(year)
    // Get The Year the cost of the insurance is going to be 3% cheaper
    price = price - ((difference * 3) * price) / 100 

    // Check the level of protection
    const level = insurance.level

    price = this.calculateLevel(price, level)

     // test 
     // console.log(price);
    
     return price
    
}

// Returns the Difference between years
Insurance.prototype.getYearDifference = function(year){
    return new Date().getFullYear() - year
}

// Adds the value based on the level of protection
Insurance.prototype.calculateLevel = function(price, level) {
    /*
        Basic insurance is going to increase the value by 30%
        Complete Insurance is going to increaste the value by 50%
    */

    if (level === 'basic' ) {
        price = price * 1.30
    }else {
        price = price * 1.50
    }
    
    return price;

}




// Everything related to the HTML
function HTMLUI() {}




// Displays the Latest 20 Years in the Select
HTMLUI.prototype.displayYears = function() {
    // Max & Min years
    const max = new Date().getFullYear(),
          min = max - 20
    
    // Generate the list with the Latest 20 Years
    const selectYears = document.getElementById('year')

    // Print the values
    for(let i = max; i >= min; i-- ){
        const option = document.createElement('option')
        option.value = i
        option.textContent = i 
        selectYears.appendChild(option)
    }

    
}


// Print an error
HTMLUI.prototype.displayError = function (message) {
    // Create a div
    const div = document.createElement('div')
    div.classList = 'error'

    // insert the message
    div.innerHTML = `

            <p>${message}</p>

    `

    form.insertBefore(div, document.querySelector('.form-group'))


    // Remove The Error
    setTimeout(function() {
        document.querySelector('.error').remove()
    }, 3000)
}


// Prints the result into the HTML
HTMLUI.prototype.showResults = function(price, insurance) {
    // Print the result
    const result = document.getElementById('result')

    // create a  div with the result
    const div = document.createElement('div')
    // console.log(make);

    // Get Make from the object and assign a readable name
    let make = insurance.make

    switch(make) {
        case '1':
            make = "American"
            break
        case '2':
            make = "Africa"
            break
        case '3':
            make = "European"
            break
    }


    // Insert the Result
    div.innerHTML = `
            <p class="header">Summary</p>
            <p>Make: ${make}</p>
            <p>Year: ${insurance.year}</p>
            <p>Level: ${insurance.level}</p>
            <p class="total">Total: ${price}</p>

    `

    const spinner = document.querySelector('#loading img')
    spinner.style.display = 'block'

    setTimeout(function() {
        spinner.style.display = 'none'

        // Insert this into the HTML
        result.appendChild(div)
    }, 3000)

    
}