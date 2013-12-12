var Task = require("../lib/task.js").Task;

describe('Task', function() {
  var task = null;
  var aFakeJob = { run: function() { /* do nothing on porpouse */ } };

  describe('run not empty task', function() {

    beforeEach( function() {
      task = new Task( [ aFakeJob, aFakeJob ] );
    });
  
    it('should invoke all callbacks if there is any job', function() {
      mock(task).expects( "onProgress" ).twice();
      mock(task).expects( "onAfter" );
      mock(task).expects( "onBefore" );
      task.run();
      mock(task).verify();
    });

  })

  describe('run empty task', function() {

    beforeEach( function() {
      task = new Task();
    });
  
    it('should not invoke onProgress', function() {
      mock(task).expects( "onProgress" ).never();
      mock(task).expects( "onAfter" );
      mock(task).expects( "onBefore" );
      task.run();
      mock(task).verify();
    });

  })

})
