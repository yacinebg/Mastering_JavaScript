class CocktailDB {

    // Save The recipe s into local storage
    saveIntoDB(drink){
        const drinks = this.getFromDB()

        drinks.push(drink)

        // Add the new Array into the loacl Storage
        localStorage.setItem('drinks', JSON.stringify(drinks))
    }

    // Removes Element from the local storage
    removeFromDB(id){
        const drinks = this.getFromDB()
        // Loop
        drinks.forEach((drink,index) => {
        
            
            if(drink.id === id ){
                drinks.splice(index, 1)
            }
        });

        // Set The Array into Local Storage
        localStorage.setItem('drinks', JSON.stringify(drinks))


    }

    // Return recipes from stroage
    getFromDB() {
        let drinks 

        // Check FROM the localStorage
        if(localStorage.getItem('drinks') === null){
            drinks= []
        } else {
            drinks = JSON.parse(localStorage.getItem('drinks'))
        }
        return drinks
    }
}