var Task = require("../lib/task.js").Task;

var RESTTask = Task.extend({
  init: function( cmd ) {
    this.cmd = cmd; 
  }, 

  rest_method = function() {
    console.log("REST method");
  }
}


exports.RESTTask = RESTTask;


