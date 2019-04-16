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
// const client = {
//     name:"Yacine",
//     membership:'Premium',
//     balance: 10000
// }

// console.log(client)


// // Destructuring
// let {name, membership, balance = 0} = client

// console.log(name);
// console.log(membership);
// console.log(balance);






// ------ Destructuring With Arrays
// let cities = ['Casablanca','Azrou','Beni Mellal','Tanger']

// let [
//     firstCity,
//     secondCity,
//     another,
//     tanger
// ] = cities

// console.log(firstCity);
// console.log(secondCity);
// console.log(another);
// console.log(tanger);


// ------ More in depth example 
// const client = {
//     membership: 'Premuim',
//     balance: 30000,
//     data: {
//         name: 'Yacine',
//         lastName: 'Boughalem',
//         living: {
           
//                 city: 'Marocco',
//                 country: 'Casablanca'

//         }
//     },
//     lastMovements: ['12-03-2019','10-04-2019', '15-04-2019']
    
// }

// console.log(client)


// let {
//     data: { living },
//     lastMovements: [, , third]
// } = client

// console.log(living)
// console.log(third)

















// ------ Destructuring Functions (OLD Method)

// function reservation(complete, options) {
//     options = options || {}

//     let payment = options.paymentMethod,
//         amount  = options.amount,
//         days    = options.days 

//     console.log(payment);
//     console.log(amount);
//     console.log(days);
    
// }

// reservation( 
//     true, 
//     {
//         paymentMethod: 'creditCard',
//         amount:3000,
//         days: 3
//     }
// )




// ------ Destructuring Functions (New Method)

// function reservation(complete, options) {
    
//     let {paymentMethod, amount, days} = options

//     console.log(paymentMethod);
//     console.log(amount);
//     console.log(days);
    
    
    
// }

// reservation( 
//     true, 
//     {
//         paymentMethod: 'creditCard',
//         amount:3000,
//         days: 3
//     }
// )



// ------ Destructuring Functions (New Method) With default parameters

function reservation(complete,
         
       {
            paymentMethod   = 'cash',
            amount          = 0,
            days            = 0
       }
    
    ) {
    
    console.log(paymentMethod);
    console.log(amount);
    console.log(days);
    
    
    
}

reservation( 
    true, 
    {
        paymentMethod: 'creditCard',
        amount:3000,
        days: 3
    }
)