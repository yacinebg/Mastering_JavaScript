document.getElementById('button1').addEventListener('click', loadEmployee);

document.getElementById('button2').addEventListener('click', loadEmployees);



// Single Employee
function loadEmployee() {
     // Create the Object
     const xhr = new XMLHttpRequest()

     // Open the Connection
     xhr.open('GET','employee.json', true)

     // Execute the function
     xhr.onload = function() {
          if(this.status === 200){
               // Get the response as an object
               const employee = JSON.parse(this.responseText)
               
               // Build the Template
               const output = `
                    <ul>
                         <li>ID: ${employee.id}</li>
                         <li>Name: ${employee.name}</li>
                         <li>Company: ${employee.company}</li>
                         <li>Job: ${employee.job}</li>
                    </ul>

               `
               // Prints the HTML
               document.getElementById('employee').innerHTML = output
               console.log(JSON.parse(this.responseText));
               
          }
     }

     // Send the request
     xhr.send()
}



// All Employees
function loadEmployees() {
     const xhr = new XMLHttpRequest()

     // Open the Connection
     xhr.open('GET','employees.json', true)

     // Execute the function
     xhr.onload = function() {
          if(this.status === 200){
               // Get the response as an object
               const employees = JSON.parse(this.responseText)
               
               let output = '';

               employees.forEach(function(employee){
                    output +=  `
                         <ul>
                              <li>ID: ${employee.id}</li>
                              <li>Name: ${employee.name}</li>
                              <li>Company: ${employee.company}</li>
                              <li>Job: ${employee.job}</li>
                         </ul>
                    `
               })

               document.getElementById('employees').innerHTML = output
          }
     }

     // Send the request
     xhr.send()
}