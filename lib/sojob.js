
/***
 * 
 * Create a shell command job.
 *
 */
function SOJob(cmd) {
  this.cmd = cmd; 
}

SOJob.prototype = { 
  execute: function() {
    if ( this.onSucceed ) 
      this.onSucceed();

    if ( this.onFailed ) 
      this.onFailed();
  },

};

exports.SOJob = SOJob;


