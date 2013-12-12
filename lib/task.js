var child_process = require('child_process');

/***
 * 
 * Create a shell command job.
 *
 */
function Task(cmd) {
  this.cmd = cmd; 
}

Task.prototype = { 
  // Default callbacks
  onError:    function( error ) { /* do nothing */ }, 
  onSucceed:  function()        { /* do nothing */ }, 

  execute: function() {

    var self = this;

    child_process.exec( self.cmd, function( error, stdout, stderr ) {

      if ( error )
        self.onError( error );
      else
        self.onSucceed(); 

    });

  },

};

exports.Task = Task;


