// Promises

const applyDiscount = new Promise(function(resolve, reject){

    // Resolve is going to execute when the function is successful

    // Reject when the function or the task has failed

    const discount = true;

    if(discount){
        resolve('Discound Applied')
    } else {
        reject('Discound Failed...')
    }

})


applyDiscount.then(function(result) {
    
    console.log(result);
    
}).catch(function(result){
    console.log(result);
})

// console.log(applyDiscount);
