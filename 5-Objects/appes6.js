// Class


class Clientt {
    // To the Constructor
    constructor(name, balance) {
        this.name = name
        this.balance = balance
    }

    //
    membership() {
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

    clientInfo() {
        return `Name : ${this.name}, Balance : ${this.balance}, Memebership : ${this.membership() }`
    }

    // Another Method to withdraw money from the accout
    withdraw(amount) {
        this.balance -= amount
    }

    // Create a deposit method
    // deposit(amount) {
    //     this.balance += amount
    // }

    // Check The Balance
    getBalance() {
        return this.balance
    }
    
    // Static Method doesn't require instanciation
    static welcome() {
        return 'Welcome To NovaSkills Company'
    }
}


// const osama = new Clientt('Yacine', 10000)
// console.log(osama);
// console.log(osama.clientInfo());
// console.log(osama.getBalance());
// console.log(osama.membership());
// osama.withdraw(500)
// console.log(osama.clientInfo());
// osama.deposit(400)
// console.log(osama.clientInfo());

// console.log(osama.welcome()); Error : osama.welcome is not a function / Because Welcome() static
// console.log(Clientt.welcome());
 



// Inherting a Class And It s Methods

// Class Business

class Business extends Clientt{

    constructor(name,balance,phone, category) {
        
        // Access the parent constructor properties
        super(name, balance)

        this.phone = phone
        this.category = category
    }


    clientInfo() {
        return  `  Name : ${this.name}, 
                Balance : ${this.balance}, 
                Memebership : ${this.membership() },
                Phone : ${this.phone},
                Category : ${this.category}`
    }

    static welcome() {
        return 'Welcome To NovaSkills Company For Business'
    }

    
}

// instanciate the subClass
const business = new Business('NovaSkills Company', 25000,0653434343, 'Agance Web')
console.log(business)
console.log(business.clientInfo())
console.log(Business.welcome())
console.log(business.getBalance())
business.withdraw(10000)
console.log(business.clientInfo())
console.log(Clientt.welcome())
