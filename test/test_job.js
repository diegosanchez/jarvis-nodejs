var Job = require("../lib/job.js").Job;

describe('Job', function() {
  var job = null;
  var aFakeTask = { run: function() { /* do nothing on porpouse */ } };

  describe('run not empty job', function() {

    beforeEach( function() {
      job = new Job( [ aFakeTask, aFakeTask ] );
    });
  
    it('should invoke all callbacks if there is any job', function() {
      mock(job).expects( "onProgress" ).twice();
      mock(job).expects( "onAfter" );
      mock(job).expects( "onBefore" );
      job.run();
      mock(job).verify();
    });

  })

  describe('run empty job', function() {

    beforeEach( function() {
      job = new Job();
    });
  
    it('should not invoke onProgress', function() {
      mock(job).expects( "onProgress" ).never();
      mock(job).expects( "onAfter" );
      mock(job).expects( "onBefore" );
      job.run();
      mock(job).verify();
    });

  })

})
