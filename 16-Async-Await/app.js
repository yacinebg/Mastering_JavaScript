// ------------- Async Await


async function getClient() {
    // Create a new promise
    const clients = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Client List downloaded....')
        },1000)
    })

    const error = false

    if(!error) {
        const response = await clients // Hold until clients is executed

        return response

    }else {
        await Promise.reject('There was an Error')
    }

}

getClient()
    .then(response => console.log(response))
    .catch(error => console.log(error))

// console.log(getClient())














// ------------- Async Await With API

async function getPosts(){
    // Wait Until the Post are downloadded

    const response = await fetch('http://jsonplaceholder.typicode.com/photos')

    // Execute then
    const data = await response.json()

    // console log until  thhe second await finish executing

    return data
}

getPosts()
    .then( post => console.log(post))





