var eighthFloorCounselor = {
  name: 'Pamela',
  say: function(phrase) {
    console.log(this.name + ' says: ' + phrase);
  }
};

var sixthFloorCounselor = {
  name: 'Tara',
  say: function(phrase) {
    console.log(this.name + ' says: ' + phrase);
  }
};


// What will the following log?
  //The following will log: "Pamela says: Unicornado!"
// What binding pattern causes this?
  //The binding pattern in effect here is 'Method Invocation' since 'this' refers to the object to the left of the dot of the 'say' method; here that 'object' is eigthFloorCounselor
eighthFloorCounselor.say('Unicornado!');

// How would we modify this invocation of .say so that Tara 
// says 'Velociraptacular!' instead of Pamela?
  //We would add the 'say' method to the sixthFloorCounselor object to get it to use the correct name - Tara.
  //This would now log: "Tara says: Velociraptacular!"
sixthFloorCounselor.say('Velociraptacular!');
