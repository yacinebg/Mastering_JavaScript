// List
document.getElementById('button').addEventListener('click', loadData)

function loadData() {
    

    // Create the new XMLHttpRequest Object
    const xhr = new  XMLHttpRequest()

    // Open The Connection
    xhr.open('GET', 'data.txt', true)

    // Execution of the Ajax Call
    /* 
        xhr.onload = function() {
            // console.log(this.status)

            // Codes
            // 200: Correct
            // 403: Forbidden
            // 404: Not Found

            if(this.status === 200)
            {
                document.getElementById('output').innerHTML= `<h1>${this.response}</h1>`
            }
        }
    */

    // Other 
    xhr.onreadystatechange = function() {
        
        // console.log('Ready State', xhr.readyState)
        
        // Ready States
        // 0 = Unsent
        // 1 = Opened
        // 2 = Received
        // 3 = Loading
        // 4 = Done


        if(this.status === 200 && this.readyState === 4){
            document.getElementById('output').innerHTML= `<h1>${this.response}</h1>`
        }
    }

    // Send The Request
    xhr.send()

}
