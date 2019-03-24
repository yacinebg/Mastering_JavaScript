

class UI {


    constructor () {

        // App Inicialization
        this.init()

    }

    // Method when the App starts
    init(){

        // Display categories in <select>
        this.printCategories()

        // Select the results
        this.result = document.getElementById('result')
    }


    // Display Events from the API
    displayEvents(eventsList){
        
        // Build the template
        let HTMLTamplate = ''

        // Loop events and print the result
        eventsList.forEach(eventInfo => {
            HTMLTamplate += `

                    
            <div class="col col-lg-4 mt-4">
                <div class="card">
                    <div class="card-body">
                        <img class="img-fluid" mb-2 src="${eventInfo.logo !== null ? eventInfo.logo.url : 'data:image/jpeg;base64,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'}">
                    </div>
                    <div class="card-body">
                        <div class="card-text">
                            <h4 class="text-center card-title">${eventInfo.name.text}</h4>
                            <p class="lead text-info">Event Information</p>
                            <p >${eventInfo.description.text.substring(0,100)}...</p>
                            <span class="badge badge-primary">Capacity : ${eventInfo.capacity}</span>
                            <span class="badge badge-secondary">Date & Time : ${eventInfo.start.local}</span>
                            <a href="${eventInfo.url}" target="_blank" class="btn btn-primary btn-block mt-4">Get Tickets</a>
                        </div>
                    </div>
                </div>
            </div>
                    

            `
        })

        this.result.innerHTML = HTMLTamplate

    }

    // Print the categories
    printCategories() {
        const  categoriesList = eventbrite.getCategoriesAPI()
            .then(categories => {
                   
                const categoriesList = categories.categories.categories
                const categoriesSelect = document.querySelector('select#category')

                // Inserts categories
                categoriesList.forEach(category => {
                    // Create the options
                    const option = document.createElement('option')
                    option.value = category.id
                    option.appendChild(document.createTextNode(category.name))
                    categoriesSelect.appendChild(option)
                });
                   
            }).catch(error => { console.log(error) })

    }


    // Displays a messsage
    printMessage(message, className){
        // Create a Div
        const div = document.createElement('div')
        div.className = className
        // Add the Text
        div.appendChild(document.createTextNode(message))
        // Insert Into the HTML
        const searchDiv = document.querySelector('#search-events')
        searchDiv.appendChild(div)

        // Remove the Alert After 3 seconds
        setTimeout(() =>{
            this.RemoveMessage()
        },3000)

    }


    // RemoveMessage
    RemoveMessage() {
        const alert = document.querySelector('.alert')
        if(alert){ alert.remove() }
    }
}