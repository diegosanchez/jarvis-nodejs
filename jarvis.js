function Jarvis() {
  this.on_progress = false;
}

Jarvis.prototype.run = function() {
  setInterval( this.onDo, 500 );
};

Jarvis.prototype.onDo = function() {
  console.log( "tickcount: ", Date.now() );
  for( var i = 0 ; i < 100000; ++i);
};

module.exports = new Jarvis;
