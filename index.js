var Task = require("./lib/task.js").Task;

var job = { run: function() {} };

var t0 = new Task();
var t1 = new Task( [ job, job ] );


t0.run();
t1.run();
