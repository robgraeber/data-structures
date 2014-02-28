var HashTable = function(){

  if(!(this instanceof HashTable)){
    return new HashTable();
  }

  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._storageLength = 0;
};

HashTable.prototype.resize = function(newSize){
  var oldStorage = this._storage;
  var that = this;

  this._storageLength = 0;
  this._limit = newSize;
  this._storage = makeLimitedArray(newSize);

  oldStorage.each(function(values){
    if(values === undefined || values === null){
      values = [];
    }
    for(var i = 0; i < values.length; i++){
      that.insert(values[i][0], values[i][1]);
    }
  });
};
HashTable.prototype.insert = function(k, v){
  k = k + "";
  var hashedKey = getIndexBelowMaxForKey(k, this._limit);
  var valuesStoredAtKey = this._storage.get(hashedKey) || [];

  valuesStoredAtKey.push([k,v]);
  this._storage.set(hashedKey, valuesStoredAtKey);
  this._storageLength ++;

  if(this._storageLength > this._limit * 0.75){
    this.resize(this._limit * 2);
  }
};
 
HashTable.prototype.retrieve = function(k){
  k = k + "";
  var i;
  var value = null;
  var hashedKey = getIndexBelowMaxForKey(k, this._limit)
  var valuesStoredAtKey = this._storage.get(hashedKey) || [];

  for(i = 0; i < valuesStoredAtKey.length; i++){
    if(valuesStoredAtKey[i][0] === k){
      value = valuesStoredAtKey[i][1];
      break;
    }
  }

  return value;
};

HashTable.prototype.remove = function(k){
  k = k + "";
  var hashedKey = getIndexBelowMaxForKey(k, this._limit)
  var valuesStoredAtKey = this._storage.get(hashedKey) || [];

  for(i = 0; i < valuesStoredAtKey.length; i++){
    if(valuesStoredAtKey[i][0] === k){
      value = valuesStoredAtKey.splice(i,1);
      this._storage.set(hashedKey, valuesStoredAtKey);
      this._storageLength --;
      break;
    }
  }

  if(this._storageLength < (this._limit * 0.25) && this._limit > 8){
    this.resize(Math.ceil(this._limit * 0.5));
  }
};

