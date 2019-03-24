class EventBrite {
    // Constructor when instanciate

    constructor() {
        this.auth_token = 'SA6GTTKTGYTOAXTBYJY2'
        this.orderby = 'date'
    }


    // Get The Events From API
    async queryAPI(eventName, category){
        const eventsResponse = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${eventName}&sort_by=${this.orderby}&categories=${category}&token=${this.auth_token}`)
        
        // Wait for response and return as json

        const events = await eventsResponse.json()

        return {
            events
        }
        
        console.log(events);

        
    }


    // Get Categories From API
    async getCategoriesAPI(){
        // Query the API

        const categoriesResponse = await  fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`)

        // Hold for the response and then return as json

        const categories = await  categoriesResponse.json()

        console.log(categories);


        return {
            categories
        }
    }


}