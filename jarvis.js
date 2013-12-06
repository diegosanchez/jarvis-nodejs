function Jarvis() {
}

Jarvis.prototype = { 
  id: { value: 45, enumerable: true },
  task_count: { value: 0, enumerable: true } , 

  run: function() {
    var self = this;
    dump(self);
    setInterval( function() { self.onDo(self) }, 500);
  },

  onDo: function(self) {
    dump(self);
    self.task_count++;
    console.log( "tickcount: ", Date.now(), ", count: ", self.task_count );

    for( var i = 0 ; i < 100000; ++i);
  }
};

function dump(obj) {
  var key0 = Object.getOwnPropertyNames( Jarvis );
  var key1 = Object.getOwnPropertyNames( obj );
  console.log( "key0: ", key0, ", key1:", key1 );

};
module.exports = new Jarvis;

