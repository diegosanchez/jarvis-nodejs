var child_process = require('child_process');

function invoke_callback(obj, callback) {
  if ( obj[callback] == null) 
    return;

  var args = Array.prototype.slice.call(arguments, 2);
  obj[callback]( args );
}

/***
 * 
 * Create a shell command job.
 *
 */
function SOJob(cmd) {
  this.cmd = cmd; 
}

SOJob.prototype = { 
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

exports.SOJob = SOJob;


