//--------- Arrow Functions


// ---- Simple Function
// const learning =  function() {
//     console.log('Learning Modern JS');
// }


// ---- Arrow Function
// const learning =  () => console.log('Learning Modern JS')

// const learning =  () => ({ message: 'Hello' })

// With Parameter
// const learning =  (message,tech) => console.log(` ${message} Modern ${tech} `)

// console.log(learning());

// learning('Learning','JavaScript')









//--------- Arrow Functions With a callback
// const shoppingCart = ['Album', 'Shirt', 'Guitar']

// Simple Function with callback
// const productQteLength = shoppingCart.map(function(product){
//     return product.length
// })


// Arrow Function with callback
// const productQteLength = shoppingCart.map((product) => product.length)

// console.log(productQteLength);













//--------- Arrow Functions With forEach
const shoppingCart = ['Album', 'Shirt', 'Guitar']

// Simple function with foreach
// shoppingCart.forEach(function(product){
//     console.log(product);
// })

// Arrow Function with forEach
shoppingCart.forEach((product) => console.log(product))

