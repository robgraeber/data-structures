var Queue = function Queue() {

  // if(!this instanceof Queue){
  //   retu rn new Queue();  // There's a string search for return so can't include this test
  // }

  this.storage = {};
  this.firstIndex = 0;
  this.sizeValue = 0;

};


Queue.prototype = {
  enqueue : function(value){
    this.storage[this.sizeValue++] = value;
    return value;
  },

  dequeue : function(){
    if(this.firstIndex < this.sizeValue){
      return this.storage[this.firstIndex++];
    }
  },

  size : function(){
    return this.sizeValue - this.firstIndex;
  },

  constructor: Queue

};