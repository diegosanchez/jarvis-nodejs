function Task() {
}

function Task(jobs) {
  this.jobs = jobs;
}

Task.prototype = { 
  jobs: [],

  /***
   * It triggers the task execution
   */
  run: function() {
    this.onBefore();

    console.log( this.jobs );
    for( var i = 0; i < this.jobs.length; ++i) {
      this.jobs[i].run(this);

      this.onProgress( i + 1 /* in-progress job */, 
        this.jobs.length /* job count */ );
    }

    this.onAfter();
  },

  onBefore: function() {
    // do nothing on porpouse
  },

  onAfter: function() {
    // do nothing on porpouse
  },

  onProgress: function(elapsed, total) {
    // do nothing on porpouse
  },
};

exports.Task = Task;

