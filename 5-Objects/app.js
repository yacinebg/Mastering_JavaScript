/* 
   °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
   °°°°°°°°°°°°°°°°°°°° Object Literals  °°°°°°°°°°°°°°°°°°°°°°
   °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
*/

// const client = {
//     name: 'Yacine',
//     Balance: '1000',
//     membership: function() {
//         let name

//         // check the balance
//         if(this.Balance > 1000) {
//             name = 'Gold'
//         } else if(this.Balance > 500) {
//             name = 'Platinum'
//         } else {
//             name = 'Normal'
//         }

//         return name
//     }
// }


// console.log(client);
// console.log(client.name);
// console.log(client.Balance);
// console.log(client.membership() );








/* 
   °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
   °°°°°°°°°°°°°°°°°°°° Object Constructor  °°°°°°°°°°°°°°°°°°°
   °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
*/

// function Client(name, balance) {
//     this.name = name
//     this.balance = balance
//     this.membership = function() {
//         let name
//         if(this.balance > 1000) {
//             name = 'Gold'
//         } else if(this.Balance > 500) {
//             name = 'Platinum'
//         } else {
//             name = 'Normal'
//         }
//         return name
//     }
// }

// const person = new Client('Yacine','5000')
// const person2 = new Client('Oussama','2000')

// console.log(person)
// console.log(person.membership())
// console.log(person2)
// console.log(person2.membership())




// Constructor for Data Types

// String 
// const name1= 'Yacine'
// const name2= new String('Yacine')
// console.log(typeof name1)
// console.log(typeof name2)
// if(name1 === name2) { console.log('YES')} else { console.log('NO'); }


// Numbers 
// const number1 = 20
// const number2 = new Number(20)
// console.log(typeof number1)
// console.log(typeof number2)
// if(number1 === number2) { console.log('YES')} else { console.log('NO'); }


// Booleans
// const boolean1 = true;
// const boolean2 = new Boolean(true);
// console.log(typeof boolean1)
// console.log(typeof boolean2)
// if(boolean1 === boolean2) { console.log('YES')} else { console.log('NO'); }



// Functions
// const function1 = function(a,b){ return a + b}
// const function2 = Function('a','b', 'return a + b')
// console.log( function1(2,3))
// console.log( function2(5,5))


// Objects
// const person1 = {name: 'YACINE'}
// const person2 = new Object({name: 'YACINE'})
// console.log(typeof person1)
// console.log(typeof person2)
// if(person1 === person2) { console.log('YES')} else { console.log('NO'); }


// Arrays 
// const array1 = [1,2,3,4]
// const array2 = new Array(1,2,3,4)
// console.log( array1)
// console.log( array2)







/* 
   °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
   °°°°°°°°°°°°°°°°°°°°°°° Prototypes °°°°°°°°°°°°°°°°°°°°°°°°°
   °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
*/

function Client(name, balance) {
    this.name = name
    this.balance = balance
    // this.getClientInfo = function() {}
    // this.getBalance = function() {}
}

// Attach The prototype to the method
Client.prototype.membership = function() {
    let name
    if(this.balance > 1000) {
        name = 'Gold'
    } else if(this.Balance > 500) {
        name = 'Platinum'
    } else {
        name = 'Normal'
    }
    return name
}

// Second Prototype with the name and the balance
Client.prototype.clientInfo = function() {
    return `Name : ${this.name}, Balance : ${this.balance}, Memebership : ${this.membership() }`
}


// Another Method to withdraw money from the accout
Client.prototype.withdraw = function(amount){
    this.balance -= amount
}

// Create a deposit method
Client.prototype.deposit = function(amount) {
    this.balance += amount
}

// Check The Balance
Client.prototype.getBalance = function() {
    return this.balance
}


const person = new Client('Yacine','5000')
const person2 = new Client('Oussama','2000')

console.log(Client.prototype)

console.log(person)
console.log(person.membership())
console.log(person.clientInfo())

person.withdraw(1000)
console.log(person.clientInfo());
console.log(person.getBalance());

person.deposit(500)
console.log(person.clientInfo());
console.log(person.getBalance());

console.log('--------------------------------------')
console.log(person2)
console.log(person2.membership())
console.log(person2.clientInfo())

person2.withdraw(1300)
console.log(person2.clientInfo());
console.log(person2.getBalance());

person2.deposit(700)
console.log(person2.clientInfo());
console.log(person2.getBalance());
console.log('--------------------------------------')
console.log('-----------------Inheriting Constructors Prototypes---------------------')




// Inheriting Constructors Prototypes
// Business
function Business(name,balance,phone, category) {
    Client.call(this,name, balance)
    this.phone = phone
    this.category = category
}

// Ingerit the prototypes
Business.prototype = Object.create(Client.prototype)

// Return the constructor as Business
Business.prototype.constructor = Business

Client.prototype.businessInfo = function() {
    return `Name : ${this.name}, 
            Balance : ${this.balance}, 
            Memebership : ${this.membership() } , 
            Category : ${this.category } , 
            Phone : ${this.phone }`
}

// Create a Business 
const business = new Business("ABDO","6000",050503030,'Education')

console.log(business);
console.log(business.businessInfo());

console.log('-----------------------------------------------------------------------------------')
console.log('-----------------------------------------------------------------------------------')
console.log('')






/* 
   °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
   °°°°°°°°°°°°°°°°° The Object Create Method °°°°°°°°°°°°°°°°°
   °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
*/
console.log('-----------------The Object Create Method---------------------')

// Object Create
const Clients = {
    getBalancee: function() {
        return `Hello ${this.name} Your Balance is ${this.balance}`
    },
    withdraw : function(amount){
        return this.balance -= amount
    },
    deposit : function(amount){
        return this.balance += amount
    }
}

// Create a New Object and Give a Balance
const mary = Object.create(Clients)
// Attach the properties
mary.name = 'YACINE'
mary.balance = 1000

console.log(mary)
console.log(mary.getBalancee())


// Withdraw some Money
console.log('-------Withdraw some Money-----------')
mary.withdraw(500)
console.log(mary.getBalancee())


// Deposit some Money
console.log('-------Deposit some Money-----------')
mary.deposit(200)
console.log(mary.getBalancee())





// Another Method 
console.log('-------Another Method-----------')
const yacine = Object.create(Clients, {
    name : { value : 'Yacine'},
    balance : { value : 2000}
})

console.log(yacine);
