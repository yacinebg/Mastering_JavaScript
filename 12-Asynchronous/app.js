// Callbacks

// const cities = ['London','New York', 'Madrid', 'Casablanca', 'Paris']

//------ Inline Callbacks (Method 1)
// let output = ''
// cities.forEach(function(city){
    // output += `${city}<br>`
    // console.log(city);
// })

// document.getElementById('app').innerHTML = output



//------ Callback With function declaration (Method 2)
// function callback(city){
//     console.log(city);
// }
// cities.forEach(callback)



// Callbacks
const countries = ['France','Morocco', 'Spain', 'England', 'Australia','Ireland']

function newCountry(country, callback){
    setTimeout(function(){
        // Add the new Country
        countries.push(country)
        
        // Execute The Callback
        callback()

    },2000)
}


//----- Display the countries after 1 second
function displayCountries() {
    setTimeout(function() {
        let html = ''
        countries.forEach(function(country){
            html += `<li>${country} </li>`
        })
        document.body.innerHTML = html
    },1000)
}


//----- Add the New Country
newCountry('Germany', displayCountries)


// Print the countries
displayCountries()