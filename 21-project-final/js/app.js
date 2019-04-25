// Instanciate the Classes
const ui = new UI(),
      cocktail = new CocktailAPI(),
      cocktailDB = new CocktailDB();


// Create The Event Listeners
function eventListeners() {

    // Document Ready
    document.addEventListener('DOMContentLoaded', documentReady)

    // Add event listener when form is submitted
    const searchFrom = document.querySelector('#search-form')
    if(searchFrom) {
        searchFrom.addEventListener('submit', getCocktails)
    }

    // The Results DIV listeners
    const resultsDiv = document.querySelector('#results')
    if(resultsDiv) {
        resultsDiv.addEventListener('click', resultDelegation)
    }
}

eventListeners()



// Get cocktails function
function getCocktails(e) {
    e.preventDefault()
    
    // Input search
    const searchTerm = document.querySelector('#search').value

    // Check Something is on the search Input
    if(searchTerm === '') {
        
        // Call User Interface print Message 
        ui.printMessage('Please add Something into the form', 'danger')
        
    } else {

        // Server Response from promise
        let serverResponse;


        // Type of Search (Ingredients, Cocktails, or name)
        const type = document.querySelector('#type').value

        // Evaluate the type of method and then execute the Query

        switch(type) {
            case 'name':
                serverResponse = cocktail.getDrinksByName(searchTerm)
                break;
            
            case 'ingredient':
                serverResponse = cocktail.getDrinksByIngredient(searchTerm)
                break;
            
            case 'category':
                serverResponse = cocktail.getDrinksByCategory(searchTerm)
                break;

            case 'alcohol':
                serverResponse = cocktail.getDrinksByAlcohol(searchTerm)
                break;


        }

        ui.clearResults()

        // Query by the name of the drink
        serverResponse.then(cocktails => {
            if(cocktails.cocktails.drinks === null){
                // Nothing exisits
                ui.printMessage('There are no results, try a different term', 'warning')
            }else{
                if(type === 'name') {
                    // Display with ingredients
                    ui.displayDrinksWithIngredients(cocktails.cocktails.drinks)
                } else {
                    // Display without Ingredients (Category, Ingredient)
                    ui.displayDrinks(cocktails.cocktails.drinks)
                }
            }
        })
    }
     
}



// Delegation for the #result area
function resultDelegation(e){
    e.preventDefault()

    if(e.target.classList.contains('get-recipe')){
        // console.log(e.target.dataset.id);
        // console.log(e.target.getAttribute('data-id'));

        cocktail.getSingleRecipe(e.target.dataset.id)
        .then(recipe => {
            // Displays Single recipe into a model
            ui.displaySingleRecipe( recipe.recipe.drinks[0] )
        })
    } 

    // When favorite btn is clicked
    if(e.target.classList.contains('favorite-btn')){
        if(e.target.classList.contains('is-favorite')){
            // Remove the Class
            e.target.classList.remove('is-favorite')
            e.target.textContent = '+'

            // Remove from Storage
            cocktailDB.removeFromDB(e.target.dataset.id)
        } else {
            // Add the class
            e.target.classList.add('is-favorite')
            e.target.textContent = '-'

            // Get Info
            const cardBody = e.target.parentElement;
            const drinkInfo = {
                id: e.target.dataset.id,
                name: cardBody.querySelector('.card-title').textContent,
                image: cardBody.querySelector('.card-img-top').src
            }
            // console.log(drinkInfo);
            // Add into The Storage
            cocktailDB.saveIntoDB(drinkInfo)
            
        }
    }
}



// Document Ready
function documentReady(){

    // Display On load the favorite from storage
    ui.isFavorite()


    // Select The search Category Select
    const searchCategory = document.querySelector('.search-category')

    if(searchCategory) {
        ui.displayCategories();
    }

    // When favorite page
    const favoritesTable = document.querySelector('#favorites')
    if(favoritesTable) {
        // Get the favorite from storage and display them
        const drinks = cocktailDB.getFromDB()
        ui.displayFavorites(drinks)

        // When view or Delete are clicked
        favoritesTable.addEventListener('click',(e) => {
            e.preventDefault()

            // Delegation
            if(e.target.classList.contains('get-recipe')) {
                cocktail.getSingleRecipe(e.target.dataset.id)
                .then(recipe => {
                    // Displays Single recipe into a model
                    ui.displaySingleRecipe( recipe.recipe.drinks[0] )
                })
            }

            // When Remove button is clicked in favorite
            if(e.target.classList.contains('remove-recipe')) {
                // Remove from DOM
                ui.removeFavorite(e.target.parentElement.parentElement)
                
                // Remove FROM Loacl Storage
                cocktailDB.removeFromDB(e.target.dataset.id)
            }
        })
    }
}