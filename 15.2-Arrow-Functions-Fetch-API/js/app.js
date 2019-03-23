document.getElementById('button1').addEventListener('click', loadTxt)


document.getElementById('button2').addEventListener('click', loadJSON)


document.getElementById('button3').addEventListener('click', loadRestAPI)



// Load Txt
function loadTxt() {
    fetch('data.txt')
    .then((response) =>  response.text())
    .then((data)     =>  document.getElementById('result').innerHTML = data)
    .catch((error)   =>  console.log(error))
}


// Load and Print JSON
function loadJSON(){
    fetch('employees.json')
    .then((response) => response.json())
    .then((data) => {
        let html = ''
        data.forEach((employee) =>  html += `<li>${employee.name} - ${employee.job}</li>` );
        document.getElementById('result').innerHTML = html
    })
    .catch((error)   =>  console.log(error))

}


// Load and Print Rest API
function loadRestAPI(){
    fetch('https://picsum.photos/list')
    .then((response) => response.json())
    .then((images) => {
        // console.log(data)
        let html = ''

        images.forEach((image) => 
            html += `
            <li>
                <a target="_blank" href='${image.post_url}'>View Image</a>
                ${image.author}
               
            </li>`
        );
        document.getElementById('result').innerHTML = html
    })
    .catch((error)   =>  console.log(error))

}