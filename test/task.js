var should = require("should");
var mock = require('jsmocktool').mock;

var Task = require("../lib/task.js").Task;

describe('Task', function() {
  var task = null;

  beforeEach( function() {
    task = new Task();
  });
  
  describe('#run', function() {
    it('should invoke all callbacks', function() {
      mock(task).should_receive( "onProgress" ).with_param(100,100);
      mock(task).should_receive( "onAfter" );
      mock(task).should_receive( "onBefore" );
      task.run();
      mock(task).verify_all();
    });
  })
})
