//left property, a binary search tree (BST) where all values are lower than than it the current value.
//right property, a BST where all values are higher than than it the current value.
//insert() method, which accepts a value and places in the tree in the correct position.
//contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
//depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.

var BinarySearchTree = function(value){
  //should have methods named 'insert', 'contains', and 'depthFirstLog
  this.left = null;
  this.right = null;
  this.value = value;
};
BinarySearchTree.prototype.checkImbalance = function(){
  var left = 0;
  var right = 0;
  var values = [];
  this.left.depthFirstLog(function(value){
    left++;
    values.push(value);
  });
  values.push(this.value);
  this.right.depthFirstLog(function(value){
    right++;
    values.push(value);
  });

  if(left < (right/2) || right < (left/2) ){

    var newTree = this.recreate(values);
    this.value = newTree.value;
    this.left = newTree.left;
    this.right = newTree.right;

  }

}

BinarySearchTree.prototype.recreate = function(values){
  var middle = Math.ceil(values.length / 2);
  var leftValues = values.slice(0, middle-1);
  var rightValues = values.slice(middle);

  var tree = new BinarySearchTree(middle);
  tree.left = this.recreate(leftValues);
  tree.right = this.recreate(rightValues);

  return tree;
}

BinarySearchTree.prototype.insert = function(value, level){
  if(value <= this.value){
    if(!this.left){
      this.left = new BinarySearchTree(value);
    }else{
      this.left.insert(value);
    }
  }
  if(value > this.value){
    if(!this.right){
      this.right = new BinarySearchTree(value);
    }else{
      this.right.insert(value);
    }
  }

  this.checkImbalance();  
}
BinarySearchTree.prototype.contains = function(value){
  if(this.value === value){
    return true;
  }
  if(value < this.value && !!this.left){
    return this.left.contains(value);
  }
  if(value > this.value && !!this.right){
    return this.right.contains(value);
  }
  return false;
}
BinarySearchTree.prototype.depthFirstLog = function(callback){
  if(!!this.left){
    this.left.depthFirstLog(callback);
  }
  callback(this.value);
  if(!!this.right){
    this.right.depthFirstLog(callback);
  }
}
BinarySearchTree.prototype.breadthFirstLog = function(callback){
  var that = this;
  callback(this.value);
  setTimeout(function(){
    if(!!that.left){
      that.left.breadthFirstLog(callback);
    }
    if(!!that.right){
      that.right.breadthFirstLog(callback);
    }
  }, 0)
}