var mentor = 'Zach';

var foo = {
  mentor: 'Sunny',
  bar: {
    mentor: 'Beth',
    getMentor: function() {
      console.log(this.mentor);
    }
  }
};

var findMentor = foo.bar.getMentor();

// What would the following log?
  //foo.bar.getMentor() will log 'Beth'
  //findMentor() will log 'undefined'

// What binding pattern(s) cause this?
  //The binding pattern for foo.bar.getMentor() is 'Method Invocation' since it looks for the object to the left of the dot at runtime. In this case, the object to the left of dot is 'bar.'
  //getMentor is a method and if it is not invoked, it will not bind 'this' to the object to the left of the dot ('bar') and so it will log 'undefined.'
foo.bar.getMentor();
findMentor();

// How would you modify the following invocations of findMentor 
// to log each of the mentor's names?
//findMentor(); // Should log 'Zach'
  //Zach is assigned to the variable 'mentor' which is global in scope. Hence, 'this' will refer to the global context (window object). To log 'Zach', we would just need to log 'mentor' since it's in global scope after making findMentor into a function.
  //To do that, we need:
    // var findMentor = function() {
    //   console.log(mentor);
    // };

//findMentor(); // Should log 'Sunny'
  // To log 'Sunny', which is in the 'foo' object, we have to log 'foo.mentor' after making findMentor into a function.
  //To do that, we need:
    // var findMentor = function() {
    //   console.log(foo.mentor);
    // };

//findMentor(); // Should log 'Beth'
  //To log 'Beth', we have to make findMentor a 'function' and return 'foo.bar.getMentor()' which will console log 'Beth' and return the result we want.
  //To do that we need:
    // var findMentor = function() {
    //   return foo.bar.getMentor();
    // };
