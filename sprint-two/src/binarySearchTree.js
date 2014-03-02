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
  // console.log("checkImbalance running...");
  var left = 0;
  var right = 0;
  var values = [];
  if(this.left){
    this.left.depthFirstLog(function(value){
      left++;
      values.push(value);
    });
  }
  values.push(this.value);
  if(this.right){
    this.right.depthFirstLog(function(value){
      right++;
      values.push(value);
    });
  }
  // console.log("vals before compare:", left, right, values);
  if( ( (left + right) > 16 ) && (left < (right/2) || right < (left/2)) ){
    console.log("recreating...");
    var newTree = this.recreate(values);
    this.value = newTree.value;
    this.left = newTree.left;
    this.right = newTree.right;

    // console.log('new tree is ', this);

  }

}
//Input: Array of values
BinarySearchTree.prototype.recreate = function(values){
  if(values.length === 0){
    return null;
  }
  var middle = Math.floor(values.length / 2);
  var leftValues = values.slice(0, middle);
  var rightValues = values.slice(middle+1);

  var tree = new BinarySearchTree(values[middle]);
  if(leftValues.length > 0){
    tree.left = this.recreate(leftValues);
  }
  if(rightValues.length > 0){
    tree.right = this.recreate(rightValues);
  }
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
BinarySearchTree.prototype.breadthFirstLog = function(callback, done){
  var that = this;
  callback(this.value);

  var callDone = (function(obj, done){
    var called = 0;
    return function(){
      called ++;
      if(called === 2){
        done(obj);
      }
    };
  })(this, done);


  setTimeout(function(){
    if(!!that.left){
      that.left.breadthFirstLog(callback, callDone);
    } else {
      callDone();
    }
    if(!!that.right){
      that.right.breadthFirstLog(callback, callDone);
    } else {
      callDone();
    }
  }, 0)
}