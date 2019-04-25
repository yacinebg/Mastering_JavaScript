class UI {

    // Display all the Drink Caregories
    displayCategories() {
        const categoyList = cocktail.getCategories()
        .then(categories => {
            // console.log(categories)
            const catList = categories.categories.drinks
            
            // Append a first option without value
            const firstOption = document.createElement('option')
            firstOption.textContent = '- Select -'
            firstOption.value = ''
            document.querySelector('#search').appendChild(firstOption)

            // Append Into the Select
            catList.forEach(category => {
                const option = document.createElement('option')
                option.textContent = category.strCategory
                option.value = category.strCategory.split(' ').join('_')
                document.querySelector('#search').appendChild(option)
            })
        })
    }

    // Display the cocktails without Ingredient
    displayDrinks(drinks){
        // SHow the result
        const resultWrapper = document.querySelector('.results-wrapper');
        resultWrapper.style.display = 'block'

        // Insert the Result
        const resultDiv = document.querySelector('#results')

        // Loop trought Drinks
        drinks.forEach(drink => {
            resultDiv.innerHTML += `

                <div class="col-md-4">
                    <div class="card my-3">
                        <button type="button" data-id="${drink.idDrink}" class="favorite-btn btn btn-outline-info">
                            +
                        </button>
                        <img class="card-img-top" src="${drink.strDrinkThumb}" alt="">

                        <div class="card-body">
                            <h2 class="card-title text-center">${drink.strDrink}</h2>
                            <a data-target="#recipe" class="btn btn-success get-recipe" href="#" data-toggle="modal" data-id="${drink.idDrink}">Get Recipe</a>
                        </div>
                    </div>
                </div>
            
            `
        })
        this.isFavorite()
    }


    // Display Drinks With Ingredients
    displayDrinksWithIngredients(drinks) {
       
        // SHow eh result
        const resultWrapper = document.querySelector('.results-wrapper');
        resultWrapper.style.display = 'block'

        // Insert the Result
        const resultDiv = document.querySelector('#results')

        drinks.forEach(drink => {
            resultDiv.innerHTML += `

                <div class="col-md-6">
                    <div class="card my-3">
                        <button type="button" data-id="${drink.idDrink}" class="favorite-btn btn btn-outline-info">
                            +
                        </button>
                        <img class="card-img-top" src="${drink.strDrinkThumb}" alt="">

                        <div class="card-body">
                            <h2 class="card-title text-center">${drink.strDrink}</h2>
                            <p class="card-text font-weight-bold">Instructions: </p>
                            <p class="card-text">
                                        ${drink.strInstructions}
                            </p>

                            <p class="card-text">
                                <ul class="list-group">
                                    <li class="list-group-item alert alert-danger"> Ingredients</li>
                                    ${this.displayIngredients(drink)}
                                </ul>
                            </p>

                            <p class="card-text font-weight-bold">Extra Information: </p>
                            <p class="card-text font-weight-bold">
                                    <span class="badge badge-pill badge-success">
                                         ${drink.strAlcoholic}
                                    </span>
                                    <span class="badge badge-pill badge-success">
                                        Category: ${drink.strCategory}
                                    </span>
                            </p>


                        </div>
                    </div>
                </div>
            
            `
        })

        this.isFavorite()
    }


    // Print The ingredients and Measurements
    displayIngredients(drink) {
        // console.log(drink);

        let ingredients = [];
        for (let i = 1; i < 16; i++) {
            const ingredientMeasure = {}
            if(drink[`strIngredient${i}`] !== '') {
                ingredientMeasure.ingredient = drink[`strIngredient${i}`]
                ingredientMeasure.measure = drink[`strMeasure${i}`]
                ingredients.push(ingredientMeasure)

            }            
        }

      
        // console.log(ingredients);

        // Build the Template

        let ingredientTemplate = '';
        ingredients.forEach( ingredient => {
            ingredientTemplate += `

                 <li class="list-group-item"> 
                        ${ingredient.ingredient} -  ${ingredient.measure}
                 </li>
            `;
        })

       
        return ingredientTemplate
        
    }


    // Display Single recipe
    displaySingleRecipe(recipe) {
        // Get Variables 
        const modalTitle = document.querySelector('.modal-title'),
              modalDescription = document.querySelector('.modal-body .description-text'),
              modalIngredients = document.querySelector('.modal-body .ingredient-list .list-group')
        
        // console.log(recipe);
        modalTitle.innerHTML = recipe.strDrink;
        modalDescription.innerHTML = recipe.strInstructions;
        
        // Display the ingredients
        modalIngredients.innerHTML = this.displayIngredients(recipe);
    }


    // Displays a Custom Message
    printMessage(message, className) {
        // console.log('FROM The Method');
        const div = document.createElement('div')

        // Add the HTML
        div.innerHTML = `
            <div class="alert alert-dismissible alert-${className}">
                <button type="button" class="close" data-dismiss="alert" >X</button>
                ${message}
            </div>
        `

        // Insert Before
        const refrence = document.querySelector('.jumbotron h1')
        const parentNode = refrence.parentElement
        parentNode.insertBefore(div, refrence)

        // remove after 3 seconds 

        setTimeout(() => {
            document.querySelector('.alert').remove()
        }, 3000)

        
    }



    // Clear previous results
    clearResults() {
        const resultsDiv = document.querySelector('#results');
        resultsDiv.innerHTML = '';
    }


    // Display favorites from Storage
    displayFavorites(favorites) {
        const favoritesTables = document.querySelector('#favorites tbody')

        favorites.forEach(drink => {
            const tr = document.createElement('tr')
            
            tr.innerHTML = `

                <td> <img src="${drink.image}" alt="${drink.name}" style="width:50%"> </td>
                <td>${drink.name}</td>
                <td>
                    <a href="#" data-toggle="modal" data-target="#recipe" data-id="${drink.id}" class="btn btn-success get-recipe">  
                        View
                    </a>
                </td>

                <td>
                    <a href="#" data-id="${drink.is}" class="btn btn-danger remove-recipe ">  
                        Remove - ${drink.id}
                    </a>
                </td>

            `

            favoritesTables.appendChild(tr)
        })
    }

    // REMOVE single favorite from DOM
    removeFavorite(element) {
        element.remove()
    }


    // ADD a class when cocktail is favorate
    isFavorite() {
        const drinks = cocktailDB.getFromDB()

        drinks.forEach(drink => {
            // Destructuring
            let {id} = drink
            
            // Select the favoorite
            let favoriteDrink = document.querySelector(`[data-id="${id}"]`)
            if(favoriteDrink) {
                favoriteDrink.classList.add('is-favorite')
                favoriteDrink.textContent = '-'

            }
        })
    }
}