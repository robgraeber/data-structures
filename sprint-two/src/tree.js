var Tree = function(value){
  if(! (this instanceof Tree)){
    return new Tree(value);
  }

  this.value = value || null;
  this.children = [];
};

Tree.prototype.addChild = function(value, node){
  node = node || this;
  node.children.push(new Tree(value));
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
};

