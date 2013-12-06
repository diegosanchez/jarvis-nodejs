function Task() {
}

Task.prototype = { 
  run: function() {
    this.onBefore();
    this.onProgress(100,100);
    this.onAfter();
  },

  onBefore: function() {
    console.log("Before callback executed");
  },

  onAfter: function() {
    console.log("After callback executed");
  },

  onProgress: function(elapsed, total) {
    console.debug("progress: ", elapsed, " / ", total);
  },
};

exports.Task = Task;

