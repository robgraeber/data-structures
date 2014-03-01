var Set = function(){
  //var set = Object.create(setPrototype);

  if(! (this instanceof Set)){
    return new Set();
  }

  var _storage = {};
  //return set;
  this.add = function(item){
    item = JSON.stringify(item);
    _storage[item] = true;
  };

  this.contains = function(item){
    item = JSON.stringify(item);
    return !! _storage[item];
  };

  this.remove = function(item){
    item = JSON.stringify(item);
    delete _storage[item];
  };
};


