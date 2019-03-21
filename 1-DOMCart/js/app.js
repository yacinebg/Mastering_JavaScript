/*

let element

element = document
element = document.all
element = document.all[9]
element = document.head
element = document.body
element = document.domain
element = document.URL
element = document.characterSet
element = document.contentType
*/



/*

// Links °°°°°°°°°°°°°°°°°°°°°°°°°°°°
element = document.links
element = document.links[8]
element = document.links[2].id
element = document.links[2].className
element = document.links[2].classList

*/


/*

// Froms °°°°°°°°°°°°°°°°°°°°°°°°°°°°
element = document.forms
element = document.forms[0]
element = document.forms[0].id
element = document.forms[0].method
element = document.forms[0].action
element = document.forms[0].classList
element = document.forms[0].className
element = document.forms[0].classList[0]

*/

/*
// Images °°°°°°°°°°°°°°°°°°°°°°°°°°°°
element = document.images

*/

/*
// Scripts °°°°°°°°°°°°°°°°°°°°°°°°°°°°
element = document.scripts
element = document.scripts[0]
element = document.scripts[0].getAttribute('src')
*/


/*

// Looping all the images °°°°°°°°°°°°°°°°°°°°°°°°°°°°

let images = document.images
let imagesArray = Array.from(images)
imagesArray.forEach(function(image){
    console.log(image.src)
})
// console.log(imagesArray)
// console.log(element)

*/











/*
    -------
    ------- Functions To Select One Element 
    -------
*/

// --> Selecting DOM Elements

// let heading = document.getElementById('heading')

// console.log(heading.id)
// console.log(heading.textContent)

// --> Change the CSS 
// heading.style.backgroundColor = "#333"
// heading.style.color = "#fff"
// heading.style.padding = "2rem"


// --> Change The Text 
// heading.textContent = "The best Courses"


// --> Another Way 
// heading.innerText = "New Heading"


// --> Query Selector
// const learningHeading = document.querySelector('#learn')
// learningHeading.textContent = "A New Heading"
// console.log()


// --> Select a Class with querySelector
const tagline = document.querySelector('.tagline')

// const newText = tagline.textContent.replace('$15', '$12');
// tagline.textContent = newText

let card = document.querySelector('.card')

// Selecting a tag name
let heading = document.querySelector('h2')

/// Nest Your selectors with a CSS synatx
let image = document.querySelector('.card img')

/// Query Selector supports nth-child, first-child Or last-child
// let links

// links = document.querySelector('#primary a:first-child')
// links = document.querySelector('#primary a:nth-child(3)')

// console.log(link)




/*
    -------
    ------- Functions To Select Multiple Elements
    -------
*/
// --------> getElementsByClassName

//const links = document.getElementsByClassName('link')

// links[0].style.color = "red"
// links[0].textContent = "New Text"
// links[0].style.background = "#888"
// links[0].style.color = "#fff"

//const links = document.querySelector('#primary').getElementsByClassName('link')




// --------> getElementsByTagName

//const imagess = document.getElementsByTagName('img') // Similar to console.log(document.imagess)

//console.log(imagess[0].id)



// --------> Convert HTML Collection into an Array

// const imagess = document.getElementsByTagName('img')

// imagesArray = Array.from(imagess)

// imagesArray.forEach(function(imagess) {
//     console.log(imagess)
// });

// console.log(imagesArray)



// ---------
// --------> getElementsByTagName  ( Suite )

// const headingg =  document.getElementsByTagName('h1')
// console.log(headingg)

// const cards = document.querySelectorAll('.card')
// console.log(cards)

// const courses = document.querySelectorAll('.card h4')
// const coursesArray = Array.from(courses)
// coursesArray.forEach(function(courses){
//     console.log(courses.textContent)
// })


// ---------
// --------> Select odd (impair) links  

// const oddLinks = document.querySelectorAll('#primary a:nth-child(odd)')
// oddLinks.forEach(function(odd){
//     odd.style.backgroundColor = "red"
//     odd.style.color = "white"
// })



// ---------
// --------> Select even links  

// const evenLinks = document.querySelectorAll('#primary a:nth-child(even)')
// evenLinks.forEach(function(even){
//     even.style.backgroundColor = "green"
//     even.style.color = "white"
// })


// ------
// --------> Change all the add-to-cart button text
// const addCartBtns = document.querySelectorAll('.add-to-cart')

// addCartBtns.forEach(function(button) {
//     button.textContent = " Something new "
// })

// console.log(addCartBtns)










// ---------------------------




/*
    -------
    ------- Traversing the DOM
    -------
*/

const navigation = document.querySelector('#primary')
let element

// element = navigation.childNodes
// element = navigation.children
// navigation.children[0].textContent = "New Text"
element = navigation.children[4].children // 1 = Element, 2 = Attributes, 3 = Text Nodes, 8 = Comments, 9 = document, 10 = doctype

const coursesList = document.querySelector('#courses-list')
let elementList
elementList = coursesList.children[1].children[0].children[0].children[1].lastElementChild
elementList = coursesList.children[1].children[0].children[0].children[1].firstElementChild
elementList = coursesList.children[1].children[0].children[0].children[1].childElementCount
elementList = coursesList.children[1].children[0].children[0].children[1]
// console.log(elementList)


// -------->  From Children To Parent - Siblings

let cartBtn = document.querySelector('.add-to-cart')

let elementt

// Parent Node
elementt = cartBtn
elementt = cartBtn.parentNode
elementt = cartBtn.parentElement.parentElement.children[0]

// Sibling
elementt = cartBtn.parentNode
elementt = cartBtn.previousElementSibling
elementt = cartBtn.previousElementSibling.previousElementSibling

// Select The Course Name
const coursesName = cartBtn.parentElement.querySelector('h4')

// Next Element Sibling
elementt = coursesName.nextElementSibling



// console.log(elementt)
// console.log(cartBtn.parentElement)








// ---------------------------




/*
    -------
    ------- Creating HTML Elements
    -------
*/


// ----> Create a new element

// Create a new <a>
const newLink = document.createElement('a')

// Add a class
newLink.className = "link"

// Add the href
// newLink.href = "https://developer-designer.com"
newLink.setAttribute('href', 'https://developer-designer.com');

// Add the Text
newLink.appendChild(document.createTextNode('My WebSite'))

// Add the element to the Html
document.querySelector('#primary').appendChild(newLink);

//    console.log(newLink);






// ----> Replace Elements

const newHeading = document.createElement('h2')

// Add an id
newHeading.id = "heading"

// Add the class 
newHeading.classList.add = "heading"

// Add the new Text
newHeading.appendChild(document.createTextNode(' The Best Courses'))

// Select the old heading
const oldHeading = document.querySelector("#heading")

// parent
const courseList = document.querySelector('#courses-list')

// Then, Replace!
courseList.replaceChild(newHeading, oldHeading)

//console.log(newHeading)






// ----> Remove Elements

const cardss = document.querySelectorAll('.card')
cardss[2].remove()
// console.log(cardss)

// Remove by the Children
const navigationn = document.querySelector('#primary')
const linksss = document.querySelectorAll('#primary .link')

navigationn.removeChild(linksss[3])

//   console.log(linksss)
//   console.log(navigationn)











// ---------------------------




/*
    -------
    ------- Classes , Ids & Other Attributes
    -------
*/

// 


const lien = document.querySelector('.link')
let elementtt

elementtt = lien

// read the class
elementtt = lien.className

// Read the class (DOM Token List)
elementtt = lien.classList

// Access specific class with classList
elementtt = lien.classList[0]

// Add a new class
lien.classList.add('new-class')

// Remove the Class
lien.classList.remove('link')

// Ids 
lien.id = 'new-id'

// Remove the id 
lien.id = '';
lien.removeAttribute('id')


// Attribute function
elementtt = lien.getAttribute('href')
elementtt = lien.getAttribute('class')

elementtt = lien.setAttribute('href', 'https://technoksillspro.com')
elementtt = lien.setAttribute('target', '_blank')
elementtt = lien.setAttribute('data-link', '10')

elementtt = lien.hasAttribute('data-link')
elementtt = lien.removeAttribute('data-link')


// console.log(elementtt);


















// ---------------------------




/*
    -------
    -------  Event Listeners 
    -------
*/

// Passing Event as parameter and the target

const clearCartBtn = document.getElementById('clear-cart')

clearCartBtn.addEventListener('click', clearBtnFunction)

function clearBtnFunction(e) {
    // Target

    let elementttt
    elementttt = e  // e ==> event

    // Read The target
    elementttt = e.target
    elementttt = e.target.id
    elementttt = e.target.className
    elementttt = e.target.innerText
    // elementttt = e.target.innerText = 2 + 2
    elementttt = e.target

    // console.log(elementttt);

}


/*
    -------
    -------  Mouse Event  
    -------
*/

// Create the variables

const headingg = document.querySelector('#heading')
const linkssss = document.querySelector('nav')
const clearCartBtnn = document.querySelector('#clear-cart')

// Click Mouse Event
// clearCartBtnn.addEventListener('click', printEvent)

// Double click
clearCartBtnn.addEventListener('dblclick', printEvent)



function printEvent(e) {
    //console.log(`The Event is : ${ e.type }`  );

}


/*
    -------
    -------  Input & Form Event  
    -------
*/

// Create the variables

const searchForm = document.getElementById('search'),
      searchInput = document.getElementById('search-course')

// Event For <form>
// searchForm.addEventListener('submit', printtEvent)


// Input Events
// searchInput.addEventListener('keydown', printtEvent)
// searchInput.addEventListener('keyup', printtEvent)
// searchInput.addEventListener('keypress', printtEvent)
// searchInput.addEventListener('focus', printtEvent)
// searchInput.addEventListener('blur', printtEvent)
// searchInput.addEventListener('cut', printtEvent)
// searchInput.addEventListener('copy', printtEvent)
// searchInput.addEventListener('paste', printtEvent)
searchInput.addEventListener('input', printtEvent)


function printtEvent(e) {
    // e.preventDefault()

    // if(searchInput.value.length == 0){
    //     alert('Type Something!')
    // }
    
    //Print the value from the input
    // console.log(searchInput.value)
    // console.log(`Type : ${ e.type }`  )

}





/*
    -------
    -------  What's  the Event Bubbling
    -------
*/

// Event Bubbling

// Variable
const cardd = document.querySelector('.card'),
      infoCardss = document.querySelector('.info-card'),
      addCartbtnss = document.querySelector('.add-to-cart')


// Event Listeners

// cardd.addEventListener('click', function(e) {
//     console.log('You Clicked The Card');
//     e.stopPropagation();
// })

// infoCardss.addEventListener('click', function(e) {
//     console.log('You Clicked The INFO');
//     e.stopPropagation();
// })

// addCartbtnss.addEventListener('click', function(e) {
//     console.log('You Clicked The BTN');
//     e.stopPropagation();
// })
   

/*
    -------
    -------  Delegation
    -------
*/
const shoppingCart = document.querySelector('#shopping-cart')

document.body.addEventListener('click', removeProducyFromCart)


// Remove
function removeProducyFromCart(e){
    console.log(e.target.classList)

    if(e.target.classList.contains('remove')){
        // console.log('Yes')
        // console.log(e.target.parentElement.parentElement)
        e.target.parentElement.parentElement.remove()
        
    }
}



// Add To Cart
const courseeList = document.querySelector('#courses-list')

courseeList.addEventListener('click', addToCart)

function addToCart(e){
    if(e.target.classList.contains('add-to-cart')){
        // console.log('Yes')
        console.log(e.target.parentElement.parentElement)
        // e.target.parentElement.parentElement.add()
        
    }
}







/*
    -------
    -------  Loacl Storage
    -------
*/

// Add to local Storage
// localStorage.setItem('name','Yacine')

// Remove from the Storage
// localStorage.removeItem('name')

// Read the Value
// const name = localStorage.getItem('name')
// console.log(name);

// Clear the Storage
// localStorage.clear()


// // Add to Session Storage
// sessionStorage.setItem('name','Juan')



/////////////

const localStorageContent = localStorage.getItem('names')

let names

if(localStorageContent == null){
    names = []
}else {
    names = JSON.parse(localStorageContent)
}

// const myArray = [1,2,3]

// console.log(JSON.parse(localStorageContent))

// names.push('Imad')
// names.push('Kamal')

localStorage.setItem('names', JSON.stringify(names))

console.log(localStorageContent)
