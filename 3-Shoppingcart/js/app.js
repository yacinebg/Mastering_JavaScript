// ---> Variables 
    const courses = document.querySelector('#courses-list'),
          shoppingCartContent = document.querySelector('#cart-content tbody'),
          clearCartBtn = document.querySelector('#clear-cart')




// ---> Listeners

    loadEventListeners();

    function loadEventListeners() {
        // When a new course is added
        courses.addEventListener('click', buyCourse)

        // When the remove button is Clicked
        shoppingCartContent.addEventListener('click', removeCourse)

        // Clear Cart Btn 
        clearCartBtn.addEventListener('click', clearCart)

        // Document Ready
        document.addEventListener('DOMContentLoaded', getFromLocalStorage)

    }



// ---> Funcrtion 

    function buyCourse(e) {

        e.preventDefault()
        
        // Use Delegation to find the course that was added
        if ( e.target.classList.contains('add-to-cart') ) {
            // Read the cours values
            // console.log(e.target.parentElement.parentElement)
            const  course = e.target.parentElement.parentElement;
            
            // Read the Values
            getCourseInfo(course)
        }
    }


    // Read the HTML Information of the selected course
    function getCourseInfo(course) {
        // Create an Obejct With Course Data
        const courseInfo = {
            image: course.querySelector('img').src,
            title: course.querySelector('h4').textContent,
            price: course.querySelector('.price span').textContent,
            id:    course.querySelector('a').getAttribute('data-id')
        }

        // Insert into the Shopping Cart
        addInfoCart(courseInfo)
    }
    
    
    // Display the Selected course into the shopping cart
    function addInfoCart(course) {
        // create  a <tr>

        const row = document.createElement('tr')

        // Build the template
        row.innerHTML = `

            <tr>
                <td><img src='${course.image}' width=100></td>
                <td>${course.title}</td>
                <td>${course.price}</td>
                <td>
                        <a href="#" class="remove" data-id=${course.id}> X </a>
                </td>
            </tr>
        `;

        // Add  into the shoping Cart
        shoppingCartContent.appendChild(row)

        // Add Course into Storage
        saveIntoStorage(course)
    }


    //  Add the courses into the LocalStorage
    function saveIntoStorage(course) {
        let courses = getCoursesFromStorage()

        // add the course into the array
        courses.push(course)

        // Since Storage only saves strings, we need to convert JSON into String
        localStorage.setItem('courses', JSON.stringify(courses))
    }

    //  Get the Contents from storage
    function getCoursesFromStorage() {
        let courses;

        // if someting exist on storage then we get the value, otherwise create an empty Array
        if(localStorage.getItem('courses') == null){
            courses = []
        } else {
            courses = JSON.parse(localStorage.getItem('courses'))
        }
        return courses
    }



    // Remove Course From the Dom
    function removeCourse(e) {
        let  course, courseId

        // Remove From the DOM
        if(e.target.classList.contains('remove')){
            e.target.parentElement.parentElement.remove()
            course = e.target.parentElement.parentElement;
            courseId = course.querySelector('a').getAttribute('data-id')
        }
        

        // Remove From the local storage
        removeCourseLocalStorage(courseId)

    }


    // Remove From the local storage
    function removeCourseLocalStorage(id) {
        // GET THE LOCAL STORAGE DATA
        let coursesLS = getCoursesFromStorage()
        
        // Loop trought the array and find the index to remove
        coursesLS.forEach(function(courseLS, index){
            if(courseLS.id === id){
                coursesLS.splice(index, 1)
            }
        })
        // console.log(coursesLS);

        // Add The Reset Of The Array
        localStorage.setItem('courses', JSON.stringify(coursesLS))
        
    }

    
    
    // Clears the shopping Cart 
    function clearCart() {
        // shoppingCartContent.innerHTML = ''

        while(shoppingCartContent.firstChild) {
            shoppingCartContent.removeChild(shoppingCartContent.firstChild)
        }

        // Clear from Local Storage
        clearLocalStorage();
    }

    
    
    // Clear the Whole Local Storage
    function clearLocalStorage() {
        localStorage.clear();
    }
    



    // Loads when Document is ready and print courses into shopping Cart
    function getFromLocalStorage() {
        let coursesLS = getCoursesFromStorage()

        // LOOP throught the courses and print into the cart
        coursesLS.forEach(function(course){
            // Create the <tr>
            const row = document.createElement('tr')

            // print the content
            row.innerHTML = `
                <tr>
                    <td><img src='${course.image}' width=100></td>
                    <td>${course.title}</td>
                    <td>${course.price}</td>
                    <td><a href="#" class="remove" data-id=${course.id}> X </a></td>
                </tr>
            `;

            shoppingCartContent.appendChild(row)
        }) 

    }