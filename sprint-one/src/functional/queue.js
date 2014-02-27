var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var firstIndex = 0;
  var size = 0;
  // Implement the methods below

  instance.enqueue = function(value){
    storage[size++] = value;
    return value;
  };

  instance.dequeue = function(){
    if(firstIndex < size){
      return storage[firstIndex++];
    }
  };

  instance.size = function(){
    return size - firstIndex;
  };

  return instance;
};
