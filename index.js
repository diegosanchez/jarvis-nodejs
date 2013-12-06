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


function property_chain( obj ) {
  var result = [];

  var current = obj;

  while ( current ) {
    var props = Object.getOwnPropertyNames(current);
    for( var p in props ) {
      result.push( current + " - " + props[p] );
    }
    current = Object.getPrototypeOf(current);
  };

  return result;
};

var instance = new Jarvis();

console.log( "CLASS INFO" );

console.log( property_chain( Jarvis ) );
console.log();
console.log( property_chain( Object ) );
console.log( Object.prototype );
console.log( "Constructor: ", Jarvis.constructor);

/*
console.log( "INSTANCE INFO" );
console.log( property_chain( new Jarvis ) );
console.log();
console.log( property_chain( new Object ) );
console.log( (new Object).prototype );

*/
