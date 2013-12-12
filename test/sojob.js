var fs = require('fs');
var soexec = require('child_process').exec

var SOJob = require("../lib/sojob.js").SOJob;

describe('SOJob', function() {

  describe('job will faild on porpouse', function() {

    beforeEach( function() {
      job = new SOJob( "mkdir /forbidden" );
    });
  
    it('should invoke onError callbacks', function() {
      mock(job).expects( "onSucceed" ).never();
      mock(job).expects( "onError" );
      job.execute();
      mock(job).verify();
    });

  })

  describe('job will execute successfully', function() {
    var directory = __dirname + "/.testing";

    beforeEach( function() {
      job = new SOJob( "mkdir -p " + directory);
    });

    after( function() {
      if ( fs.existsSync(directory) )
        fs.rmdirSync( directory );
    });
  
    it('should invoke onError callbacks', function() {
      mock(job).expects( "onSucceed" );
      mock(job).expects( "onError" ).never();
      job.execute();
      mock(job).verify();
    });

  })

})
