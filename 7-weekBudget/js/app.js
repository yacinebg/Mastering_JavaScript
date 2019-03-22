// °°°°°°°°°°°°°°°°°°°°°° Classes

class Budget{
    constructor(budget) {
        this.budget = Number(budget)
        this.budgetLeft = this.budget
    }


}





// °°°°°°°°°°°°°°°°°°°°°° Everyting related to HTML
class HTML{

    // Inserts the Budget when the user submits it
    insertBudget(amount) {
        // Insert into HTML
        budgetTotal.innerHTML = `${amount}`
        budgetLeft.innerHTML = `${amount}`
    }

    // Desplays a message ( Correct or Invalid)
    printMessage(message, className) {
        const messageWrapper = document.createElement('div')
        messageWrapper.classList.add('text-center', 'alert', className)
        messageWrapper.appendChild(document.createTextNode(message))

        // Insert Into HTML
        document.querySelector('.primary').insertBefore(messageWrapper, addExpenseForm)


        // Clear into HTML
        setTimeout(function() {
            document.querySelector('.primary .alert').remove()
            // addExpenseForm.reset()
        }, 3000)
    }

    // Displays the Expenses the form  into the List
    addExpenseToList(name, amount){
        const expensesList = document.querySelector('#expenses ul')

        // Create a li
        const li = document.createElement('li')
        li.className = "list-group-item d-flex justify-content-between align-itmes-center"
        // Create the Template
        li.innerHTML = `

            ${name}
            <span class="badge">${amount}</span>

        `

        // Insert into the HTML
    }
}




// °°°°°°°°°°°°°°°°°°°°°° Varialbles
const addExpenseForm = document.querySelector('#add-expense'),
      budgetTotal    = document.querySelector('span#total'),
      budgetLeft     = document.querySelector('span#left');

let budget, userBudget


// °°°°°°°°°°°°°°°°°°°°°° Instanciate the HTML Class
const html = new HTML()



// °°°°°°°°°°°°°°°°°°°°°° Event Listenars
eventListeners()

function eventListeners() {

    // App Init
    document.addEventListener('DOMContentLoaded', function() {
        // Ask the Visitor the Weekly Budget
        userBudget = prompt(' What is your budget for this week ? ')

        // Validate the userBudget
        if(userBudget === null || userBudget === '' || userBudget === '0') {
            window.location.reload()
        } else {
            // Budget is Valid then instancite the budget class
            budget = new Budget(userBudget)
            
            // Instanciate HTML Class
            html.insertBudget(budget.budget)
            
        }
    })
    // When a new expense is added
    addExpenseForm.addEventListener('submit', function(e) {
        e.preventDefault()

        // Read The Inputs values
        const expenseName = document.querySelector('#expense').value
        const amount = document.querySelector('#amount').value

        if( expenseName === '' || amount === ''){
            html.printMessage('There Was error, All the fields are mandatory','alert-danger')
        } else {
            // Add the Expenses into the List
            html.addExpenseToList(expenseName, amount)
            html.printMessage('Added!','alert-success')
        } 

    })

}