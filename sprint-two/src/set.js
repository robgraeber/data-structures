var Set = function(){
  //var set = Object.create(setPrototype);

  if(! (this instanceof Set)){
    return new Set();
  }

  var _storage = {};
  //return set;
  this.add = function(item){
    _storage[item] = true;
  };

  this.contains = function(item){
    return !! _storage[item];
  };

  this.remove = function(item){
    delete _storage[item];
  };
};


