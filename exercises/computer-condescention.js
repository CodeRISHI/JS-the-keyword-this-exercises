var computer = {
  name: 'HAL 9000',
  owner: 'Dave',
  condescend: function() {
    console.log('Processing...');
    setTimeout(function() {
      console.log('I\'m sorry, ' + this.owner + ', I can\'t let you do that.');
    }.bind(this), 1000);
  }
};

// What would the following log?
  //The following would log:
    // Processing...
    // undefined
    // I'm sorry, undefined, I can't let you do that.
// What binding pattern causes this?
  //The binding pattern here is 'Free Function Invocation' - the 'this' is actually pointing to the window object in the global context and hence 'this.owner' returns 'undefined.' The setTimeOut function has an anonymous callback function that causes 'this' to bind to the global context.
computer.condescend();

// How would we modify the .condescend method to achieve the expected output?
  //To achieve the expected output ('Dave'), we need to bind 'this' to the 'computer' object. That will look like:
    //We will have to add '.bind(this)' to the anonymous callback function inside setTimeOut.
    //The code for the 'condescend' method will now be:
      // condescend: function() {
      //   console.log('Processing...');
      //   setTimeout(function() {
      //     console.log('I\'m sorry, ' + this.owner + ', I can\'t let you do that.');
      //   }.bind(this), 1000);
      // }
    //That will then achieve the expected output of:
    // Processing...
    // undefined
    // I'm sorry, Dave, I can't let you do that.

