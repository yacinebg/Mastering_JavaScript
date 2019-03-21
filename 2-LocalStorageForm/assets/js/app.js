// Variables 
const tweetList = document.getElementById('tweet-list')



// Event Listeners
    
    eventListeners()

    function eventListeners( ){
        // Form Submission
        document.querySelector('#form').addEventListener('submit', newTweet)

        // Remove tweet from the list
        tweetList.addEventListener('click', removeTweet)

        // Document 
        document.addEventListener('DOMContentLoaded', localStorageOnLoad)

    }



// Fucntions

    function newTweet(e){
        e.preventDefault();
        // console.log('Form Submitted')

        // Read The Textarea value
        const tweet = document.getElementById('tweet').value

        // Create the Remove button
        const removeBtn = document.createElement('a')
        removeBtn.classList =  'remove-tweet';
        removeBtn.textContent = 'X'

        // Create an <li> element
        const li = document.createElement('li')
        li.textContent = tweet;

        // Add the Remove button to each tweet
        li.appendChild(removeBtn)
        

        // Add to the list
        tweetList.appendChild(li)

        // Add to local Storage
        addTweetLocalStorage(tweet);


        // Print the alert 
        alert('Tweet Added')

        this.reset()



        //console.log(tweet)
        
    }

// Remove the Tweets From the DOM
    function removeTweet(e) {
        if(e.target.classList.contains('remove-tweet')){
            // console.log(e.target.parentElement)
            e.target.parentElement.remove()
        }

        // console.log();
        
        // Remove from Storage
        removeTweetLocalStorage(e.target.parentElement.textContent)
    }



// Add the Tweets Into the local Storage
    function addTweetLocalStorage(tweet){
        let tweets = getTweetsFromStorage()

        // Add the Tweet into the array
        tweets.push(tweet)

        // Convert teweet Array into the String
        localStorage.setItem('tweets', JSON.stringify(tweets))
        
    }

    function getTweetsFromStorage(){
        let tweets
        const tweetsLS = localStorage.getItem('tweets')
        // Get the Values, If null is returned then We Create an Empty array
        if(tweetsLS === null){
            tweets = []
        } else {
            tweets = JSON.parse(tweetsLS)
        }

        return tweets
    }


// Pprints Local Storage Tweets On load

    function localStorageOnLoad() {
        let tweets = getTweetsFromStorage()

        // Loop Throught Storage and then print the values
        tweets.forEach(function(tweet) {
                // Create the Remove button
                const removeBtn = document.createElement('a')
                removeBtn.classList =  'remove-tweet';
                removeBtn.textContent = 'X'

                // Create an <li> element
                const li = document.createElement('li')
                li.textContent = tweet;

                // Add the Remove button to each tweet
                li.appendChild(removeBtn)
                

                // Add to the list
                tweetList.appendChild(li)
        })
        
    }

// Removes the tweet from local Storage

function removeTweetLocalStorage(tweet) {
    // console.log('tweet');

    // Get Tweets From the Storage
    let tweets = getTweetsFromStorage()
    console.log(tweets)

    // Remove The X from The tweet
    const tweetDelete = tweet.substring(0, tweet.length - 1)

    // Loop Throught the tweets and remove the tweet that's equal

    tweets.forEach(function(tweetLS, index) {
        if(tweetDelete === tweetLS) {
            tweets.splice(index, 1)
        }

        // Save the Data
        localStorage.setItem('tweets', JSON.stringify(tweets))
    })
    
    
}