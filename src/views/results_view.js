const PubSub = require('../helpers/pubsub.js')

const ResultView = function(){

}

ResultView.prototype.bindEvents = function(){
    PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
        const isPrime = event.detail
        this.displayResult(isPrime)
    })
    
}

ResultView.prototype.displayResult = function(result){
    console.log(result);
    const resultElement = document.querySelector('#result')
    resultElement.textContent = `The statement 'your number is prime' is ${result}.`
}

module.exports = ResultView