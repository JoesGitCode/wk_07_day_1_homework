const PubSub = require('../helpers/pubsub.js')


const PrimeChecker = function(){

}

PrimeChecker.prototype.bindEvents = function(){
    PubSub.subscribe('FormView:number-submitted', (event) => {
        console.log(event.detail);
        const primeCheck = this.numberIsPrime(event.detail)
        console.log(primeCheck)
        PubSub.publish('PrimeChecker:result-calculated', primeCheck)
    })
}

PrimeChecker.prototype.numberIsPrime = function (number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
          return false;
      }
    }
    return true;
  };

module.exports = PrimeChecker;