document.querySelector('#generate-names').addEventListener('submit',loadNames)


// Execute the function to query the API
function loadNames(e){
    e.preventDefault()

    // Read the values from the form and create the variables
    const origin = document.getElementById('country').value
    const genre = document.getElementById('genre').value
    const amount = document.getElementById('quantity').value

    // Build The URL
    let url = 'http://uinames.com/api/?'

    // Read The Origin And Append To The Url
    if(origin !== ''){
        url += `region=${origin}&`
    }

    // Read The gender And Append To The Url
    if(genre !== ''){
        url += `gender=${genre}&`
    }

    // Read The amount And Append To The Url
    if(amount !== ''){
        url += `amount=${amount}&`
    }

    // console.log(url);

    // AJAX Call
    const xhr = new XMLHttpRequest()

    // Open the Connection
    xhr.open('GET', url, true)

    // Execute The Function
    xhr.onload = function(){
        if(this.status === 200){

            const names = JSON.parse(this.responseText)

            // insert into the HTML
            let html = '<h2>Generated Names</h2>'
            html += '<ul class="list">'

                names.forEach(function(name) {
                
                    html += `
                        <li>${name.name}</li>
                    `
                });
            
            html += '</ul>'

            document.getElementById('result').innerHTML = html
        }

    }


    // Send the Request
    xhr.send()
    
}