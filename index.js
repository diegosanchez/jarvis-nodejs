var SOJob = require("./lib/sojob.js").SOJob;

var job = new SOJob("mkdir -p ~/tmp/tele");

job.onSucceed = function() { console.log( "succeesful" ); }
job.onFailed = function() { console.log( "failed" ); }
job.execute();

