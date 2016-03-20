var Project = function (title, link, stack) {
  this.title = title;
  this.link = link;
  this.stack = stack;
};

Project.prototype.describeStack = function() {
  var that = this;
  this.stack.forEach(function(framework) {
    console.log(that.title + ' was built with ' + framework);
  });
};

var myTitle = 'Sewing with JavaScript';
var myLink = 'http://www.knithub.com/sewingWithJS';
var myStack = ['Backbone', 'Node', 'MongoDB'];
var sewingWithJS = new Project(myTitle, myLink, myStack);

// What would the following log?
  //The following logs:
  // undefined was built with Backbone
  // undefined was built with Node
  // undefined was built with MongoDB

// What binding pattern(s) cause this?
  //The anonymous function inside of forEach is a free-function invocation and so the 'this' in 'this.title' does not target the Project prototype but the window object. Hence, it returns 'undefined' for 'this.title' as shown above.
  
// How would you modify the .describeStack method to achieve the expected results?
  //To fix this, we need to bind 'this' to the Project prototype and so we declare a variable called 'that' and assign 'this' to it. Then, we use 'that' to get the 'title' property of the Project constructor and it correctly logs the info in the describeStack method as follows:
    // Sewing with JavaScript was built with Backbone
    // Sewing with JavaScript was built with Node
    // Sewing with JavaScript was built with MongoDB
sewingWithJS.describeStack();
