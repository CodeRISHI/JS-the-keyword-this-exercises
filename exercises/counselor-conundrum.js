var eighthFloorCounselor = {
  name: 'Pamela',
  say: function(phrase) {
    console.log(this.name + ' says: ' + phrase);
  }
};

var sixthFloorCounselor = {
  name: 'Tara'
};


// What will the following log?
  //The following will log: "Pamela says: Unicornado!"
// What binding pattern causes this?
  //The binding pattern in effect here is 'Method Invocation' since 'this' refers to the object to the left of the dot of the 'say' method; here that 'object' is eigthFloorCounselor
eighthFloorCounselor.say('Unicornado!');

// How would we modify this invocation of .say so that Tara 
// says 'Velociraptacular!' instead of Pamela?
  //We would need to use 'call' on the '.say' method to get it from the eigthFloorCounselor object and then pass in the sixthFloorCounselor object along with the phrase 'Velociraptacular' for it to log the correct name ('Tara') with the phrase.
  //This would now log: "Tara says: Velociraptacular!"
eighthFloorCounselor.say.call(sixthFloorCounselor, 'Velociraptacular!');
