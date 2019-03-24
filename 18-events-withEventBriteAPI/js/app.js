
// Instanciate both Class
const eventbrite = new EventBrite()
const ui = new UI()

// console.log(eventbrite);



// Listener for the submit button
document.getElementById('submitBtn').addEventListener('click', (e) => {
    e.preventDefault()


    // get values from form
    const eventName = document.getElementById('event-name').value
    const category = document.getElementById('category').value

    // console.log(eventName +"  " + category);

    if(eventName !== ''){
        //  Query Event Brite API
        eventbrite.queryAPI(eventName, category)
        .then(events =>{
            // console.log(data)

            // Check for events
            const eventsList = events.events.events
            if(eventsList.length > 0){
                // Check for events

                ui.displayEvents(eventsList)

            }else{
                // There are no events, print a message
                ui.printMessage('No Result Found', 'alert alert-warning text-center mt-4')
            }
            
        } )
    }else{
        // Print A Message
        ui.printMessage('Add An Event or City', 'alert alert-danger mt-4')
    }
    
})
