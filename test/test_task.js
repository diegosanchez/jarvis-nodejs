var fs = require('fs');
var soexec = require('child_process').exec

var Task = require("../lib/task.js").Task;

describe('Task', function() {

  describe('task will faild on porpouse', function() {

    beforeEach( function() {
      task = new Task( "mkdir /forbidden" );
    });
  
    it('should invoke onError callbacks', function() {
      mock(task).expects( "onSucceed" ).never();
      mock(task).expects( "onError" );
      task.execute();
      mock(task).verify();
    });

  })

  describe('task will execute successfully', function() {
    var directory = __dirname + "/.testing";

    beforeEach( function() {
      task = new Task( "mkdir -p " + directory);
    });

    after( function() {
      if ( fs.existsSync(directory) )
        fs.rmdirSync( directory );
    });
  
    it('should invoke onError callbacks', function() {
      mock(task).expects( "onSucceed" );
      mock(task).expects( "onError" ).never();
      task.execute();
      mock(task).verify();
    });

  })

})
