var Tree = function(value){
  if(! (this instanceof Tree)){
    return new Tree(value);
  }

  this.value = value || null;
  this.children = [];
  this.parent = null;
};

Tree.prototype.addChild = function(value, node){
  node = node || this;
  var newChild = new Tree(value);
  newChild.parent = this;
  node.children.push(newChild);
};

Tree.prototype.removeChild = function(node){
  for(var i = 0; i < this.children.length; i ++){
    if(this.children[i] === node){
      this.children.splice(i,1);
      break;
    }
  }
};

Tree.prototype.removeFromParent = function(){
  this.parent.removeChild(this);
  this.parent = null;
};

Tree.prototype.contains = function(target, node){
  node = node || this;
  if(node.value === target){
    return true;
  }
  for(var i = 0 ; i < node.children.length; i++){
    if(node.children[i].contains(target)){
      return true;
    }
  }
  return false;
  // return node.value === target || 
  //        _.some(node.children, function(item){
  //           return item.contains(target);
  //        });
//
};

