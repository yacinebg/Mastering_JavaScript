// ------ Destructuring

// °°°° The old Way
// const client = {
//     name: 'Alexa',
//     membership: 'Premium'
// }

// let name = client.name,
//     membership = client.membership


// console.log(name)
// console.log(membership)


// °°°° The new way
// let name, membership

// const client = {
//     name: 'Alexa',
//     membership: 'Premium'
// }

// name = "Mary";
// membership = "Gold";

// ({name, membership} = client)
// console.log(name)
// console.log(membership)







// ------ Extract object that's inside another object

// const client = {
//     membership: 'Premuim',
//     name: 'Paul',
//     data: {
//         clientLocation: {
//             city: 'Marocco',
//             country: 'Casablanca'
//         },

//         account: {
//             memberSince: '10-12-2014',
//             balance: 8000
//         }
//     }
// }

// console.log(client)

// let { data: {clientLocation} } = client

// console.log(clientLocation);
// console.log(clientLocation.city);
// console.log(clientLocation.country);


// let { data: {account} } = client
// console.log(account);
// console.log(account.memberSince);
// console.log(account.balance);




// ------ Default values when destructuring
const client = {
    name:"Yacine",
    membership:'Premium',
    balance: 10000
}

console.log(client)


// Destructuring
let {name, membership, balance = 0} = client

console.log(name);
console.log(membership);
console.log(balance);



