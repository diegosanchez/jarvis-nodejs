var SOJob = require("./lib/sojob.js").SOJob;

var job = new SOJob("mkdir /xx ");

job.onSucceed = function() { console.log( "succeesful" ); }
job.onError = function( error ) { 
  console.log( "failed");
}
job.execute();

