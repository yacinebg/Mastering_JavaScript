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








