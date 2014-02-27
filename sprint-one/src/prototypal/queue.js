var makeQueue = function(){
  var instance = Object.create(queueMethods);

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.firstIndex = 0;
  instance.sizeValue = 0;
  // Implement the methods below


  return instance;
};

var queueMethods = {
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
  }

};