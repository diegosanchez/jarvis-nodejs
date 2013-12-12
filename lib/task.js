var child_process = require('child_process');

require('../lib/class.js');

/***
 * 
 * Create a shell command job.
 *
 */
var Task = Class.extend( {
  cmd: null,

  init: function( cmd ) {
    this.cmd = cmd; 
  },

  execute: function() {

    var self = this;

    child_process.exec( self.cmd, function( error, stdout, stderr ) {

      if ( error )
        self.onError( error );
      else
        self.onSucceed(); 

    });

  },

  // Callbacks
  onError:    function( error ) { /* do nothing */ }, 
  onSucceed:  function()        { /* do nothing */ }

});

exports.Task = Task;


