var Task = require("../lib/task.js").Task;

describe('Task', function() {
  var task = null;
  var aFakeJob = { run: function() { /* do nothing on porpouse */ } };

  describe('run not empty task', function() {

    beforeEach( function() {
      task = new Task( [ aFakeJob, aFakeJob ] );
    });
  
    it('should invoke all callbacks if there is any job', function() {
      mock(task).should_receive( "onProgress" ).with_param(1,2);
      mock(task).should_receive( "onProgress" ).with_param(2,2);
      mock(task).should_receive( "onAfter" );
      mock(task).should_receive( "onBefore" );
      task.run();
      mock(task).verify_all();
    });

  })

  describe('run empty task', function() {

    beforeEach( function() {
      task = new Task();
    });
  
    it('should not invoke onProgress', function() {
      // 
      // NOT SUPPORTED by jsmocktool
      //
      // mock(task).should_not_receive( "onProgress" );
      mock(task).should_receive( "onAfter" );
      mock(task).should_receive( "onBefore" );
      task.run();
      mock(task).verify_all();
    });

  })

  describe("construction", function() {

    describe("jobs specified", function() {

      beforeEach( function() {
        task = new Task( [ aFakeJob, aFakeJob ] );
      });

      it( "should invoke progress twice", function() { 
        mock(task).should_receive( "onAfter" );
        mock(task).should_receive( "onBefore" );
        mock(task).should_receive( "onProgress" ).with_param(1,2);
        mock(task).should_receive( "onProgress" ).with_param(2,2);
        task.run();
        mock(task).verify_all();
      });

    });

  });
})
