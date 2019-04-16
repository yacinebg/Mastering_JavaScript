// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°   Symbols  °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° 

//const client = Symbol('Client')

//console.log(client)


// Symbols are always different

//console.log(Symbol() === Symbol());



// /// 

// let firstName = Symbol()
// let lastName = Symbol() 


// Create an empty object
// const person = {}
// person[firstName] = 'Yacine'
// person[lastName] = 'Boughalem'

// Standard properties
// person.membership = 'Premium'
// person.amount = 30000

// console.log(person)
// console.log(person[firstName])
// console.log(person.membership)

// console.log('-------')

// for(let i in person){
//     //console.log(`${person[i]}`)
// }


/* You Can Also Add a Description * */

// let clientName = Symbol('Client Name')

// let client = {}

// client[clientName] = 'Peter'

//  Test 
// console.log(client)
// console.log(client[clientName])










// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°   Sets  °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° 

// Create a Set
// let shoppingCart = new Set()

// shoppingCart.add('Shirt')
// shoppingCart.add('Album #1')
// shoppingCart.add('Album #2')
// shoppingCart.add('Album #3')
// shoppingCart.add('Album #3')
// shoppingCart.add('Guitar')


//console.log(shoppingCart);


// Get Length of the set

//console.log(shoppingCart.size);

// Check is a value exist
//console.log(shoppingCart.has('Guitar'));

// Remove from the Set
//shoppingCart.delete('Guitar');

// Clear The Set
//shoppingCart.clear();

// shoppingCart.forEach((product , index, isPart)=> {
//     console.log(`${index} : ${product}`)
//     console.log(isPart === shoppingCart)
// })

//console.log(shoppingCart);

// Convert the Set into an Array
// const shoppingCartArray = [...shoppingCart]
//console.log(shoppingCartArray)








// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°   Maps  °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° 

// let clientt = new Map()
// clientt.set('name','Yacine')
// clientt.set('membership','Premium')
// clientt.set('balance', 3000)


// Foreach into a map
// clientt.forEach((clientInfo, index) => {
//     console.log(`${index} : ${clientInfo}`)
// })



// Access The Values 
// console.log(clientt.get('name'))
// console.log(clientt.get('membership'))
// console.log(clientt.get('balance'))


// ------ Map Methods

// Map Size 
// console.log(clientt.size)

// Chek if a value exists
// console.log(clientt.has('membership'))
// console.log(clientt.get('memberships'))

// Remove Elements from the MAP
// clientt.delete('name')

// Clear the MAP
// clientt.clear()

// Default values into the map
// const patient = new Map([['name', 'Patient Name'], ['room', 'Not Defined'] ])
// patient.set('name','Yacine')
// patient.set('room','404')
// console.log(patient)



// console.log(clientt)








// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°   Iterators  °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° 

// function createIterator(cart){
//     let i = 0;

//     return {
//         nextProduct: function(){
//             // console.log('here')
//             let end = (i >= cart.length)
//             let value = !end ? cart[i++] : undefined

//             return {
//                 end: end,
//                 value: value
//             }
//         }
//     }
// }

// const shoppingCart = ['Product 1','Product 2','Product 3','Product 4']
// const shoppingCartIterator = createIterator(shoppingCart)
// console.log(shoppingCartIterator.nextProduct())
// console.log(shoppingCartIterator.nextProduct())
// console.log(shoppingCartIterator.nextProduct())
// console.log(shoppingCartIterator.nextProduct())
// console.log(shoppingCartIterator.nextProduct())







// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°   Generators  °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° 

// function *createGenerator() {
//     // Yield

//     yield 1
//     yield 'Name of the person'
//     yield 3+3
//     yield true
//     yield 'Hello from Generator'

// }

// const iterator = createGenerator()

// console.log(iterator.next().value)
// console.log(iterator.next().done)


// -----------


// ---- Create The  Generators 
// function *newGenerator(cart) {
//    for (let i = 0; i < cart.length; i++) {
//         yield cart[i]       
//    }
// }

// ---- Shopping Cart

// const cart = ['Product 1','Product 2','Product 3','Product 4']

// ---- Loop in the Iterator

// let iterator = newGenerator(cart)

// console.log(iterator.next())
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)







// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°  BUILT ITERATOR  °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° 

const cities = ['Casablanca','Azrou','Beni Mellal','Tanger']
const orders = new Set([123,231,131,102])
const data = new Map()

data.set('Learning','Modern JavaScript')
data.set('JSisGreat',true)

// ---- Entries

// for(let entry of cities.entries()) {
//     // console.log(entry)
// }

// for(let entry of orders.entries()) {
//     // console.log(entry)
// }

// for(let entry of data.entries()) {
//     // console.log(entry)
// }


// ---- Values

// for(let entry of cities.values()) {
//     // console.log(entry)
// }

// for(let entry of orders.values()) {
//     // console.log(entry)
// }

// for(let entry of data.values()) {
//     console.log(entry)
// }


// ---- Keys

// for(let entry of cities.keys()) {
//     // console.log(entry)
// }

// for(let entry of orders.keys()) {
//     // console.log(entry)
// }

// for(let entry of data.keys()) {
//     //console.log(entry)
// }



// ---- Default

for(let entry of cities) {
    // console.log(entry)
}

for(let entry of orders) {
    // console.log(entry)
}

for(let entry of data) {
    // console.log(entry)
}


// ---- Iterate an string
const message = 'Learning JavaScript'

// OLD way

// for (let i = 0; i < message.length; i++) {
//     console.log(message[i])
// }

for (let letter of message) {
    // console.log(message)
}











// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°  Regular Expressions  °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° 
const exp1 = new RegExp('/abc/')
const exp2 = /abc/

// const year = 1992
// console.log( /[0-9]/.test(year))

// Check if a date follows the pattern 20-04-2018
const dateRegExp = /\d\d-\d\d\-\d\d\d\d/
const date = '20-04-2018'
// console.log(dateRegExp.test(date))


// Check for the time 15:00

const timeRegExp = /\d\d\:\d\d/
const time = '15:40 PM'
// console.log(timeRegExp.test(time))

// Check for the time in 12 hours with AM / PM

const timeRegExpCompete = /\d\d\:\d\d \D\D/
const timeComplete = '15:40 PM'
// console.log(timeRegExpCompete.test(timeComplete))


const numbersRegExp = /\d+/
const digits = '222HELLO'
console.log(numbersRegExp.test(digits))

