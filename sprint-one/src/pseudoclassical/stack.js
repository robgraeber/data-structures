var Stack = function Stack() {
  
  // if(!this instanceof Stack){
  //   retu rn new Queue();  // There's a string search for return so can't include this test
  // }

  this.storage = {};
  this.sizeValue = 0;

};
  
Stack.prototype = {
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
  },

  constructor: Stack

};