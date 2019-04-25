class CocktailAPI {

    // Get Recipe by Name
    async getDrinksByName(name){
        // Search by Name
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)

        // Return a JSON response
        const cocktails = await apiResponse.json()

        return {

            cocktails
        }
    }

    // Get Recipes by Ingredient
    async getDrinksByIngredient(ingredient) {
         // Search by Name
         const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)

         // Return a JSON response
         const cocktails = await apiResponse.json()
 
         return {
 
             cocktails
         }
    }


    // Get Simple Recipe
    async getSingleRecipe(id) {
        // Search by Name                https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)

        // Return a JSON response
        const recipe = await apiResponse.json()

        return {
            recipe
        }
    }

    // Retrieves All The Categories form the  REST API
    async getCategories(){
        const apiResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')

        // Wait for the response and return JSON
        const categories = await apiResponse.json()

        return {
            categories
        }
    }

    // GET Drinks By Category
    async getDrinksByCategory(category) {
        // Search by Name                
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)

        // Return a JSON response
        const cocktails = await apiResponse.json()

        return {
            cocktails
        }
    }


    // Get Alcohol Or Non alcohol drinks
    async getDrinksByAlcohol(term){
        // Search by  Non alcohol               
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${term}`)

        // Return a JSON response
        const cocktails = await apiResponse.json()

        return {
            cocktails
        }
    }

}