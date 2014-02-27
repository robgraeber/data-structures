var makeStack = function() {
  // Hey! Copy your code from src/functional/stack.js and paste it here
  var instance = {};

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.sizeValue = 0; // Hint: set an initial value here
  instance.push = stackMethods.push;
  instance.pop = stackMethods.pop;
  instance.size = stackMethods.size;
  return instance;
};
  
var stackMethods = {
  // Implement the methods below
  push : function(value){
    this.storage[this.sizeValue++] = value;
    return value;
  },

  pop : function(){
    if(this.sizeValue > 0){
      return this.storage[--this.sizeValue];
    }else{
      return undefined;
    }
  },

  size : function(){
    return this.sizeValue;
  }
};