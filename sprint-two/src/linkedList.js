var LinkedList = function (){
  
  if(!(this instanceof LinkedList)){
    return new LinkedList(value);
  }

  this.head = null;
  this.tail = null;

};

LinkedList.prototype.addToTail = function(value){
  var linkedListNode = new Node(value);
  linkedListNode.next = null;
  linkedListNode.prev = this.tail;
  if(this.head === null){
    this.head = linkedListNode;
  }
  if(this.tail !== null){
    this.tail.next = linkedListNode;
  }
  this.tail = linkedListNode;
};
LinkedList.prototype.addToHead = function(value){
  var linkedListNode = new Node(value);
  linkedListNode.prev = null;
  linkedListNode.next = this.head;
  if(this.tail === null){
    this.tail = linkedListNode;
  }
  if(this.head !== null){
    this.head.prev = linkedListNode;
  }
  this.head = linkedListNode;
};

LinkedList.prototype.removeHead = function(){
  if(this.head === null){
    return null;
  }
  var result = this.head.value;
  this.head = this.head.next;
  this.head.prev = null;
  if(this.head === null){
    this.tail === null;
  }
  return result;
};
LinkedList.prototype.removeTail = function(){
  if(this.tail === null){
    return null;
  }
  var result = this.tail.value;
  this.tail = this.tail.prev;
  this.tail.next = null;
  if(this.tail === null){
    this.head === null;
  }
  return result;
};

LinkedList.prototype.contains = function(target, node){
  node = node || this.head;

  if(node === null){
    return false;
  }

  return !! ( node.value === target || node.next && this.contains(target, node.next) );
  // EQUIVALENT METHOD
  // if(node.value === target){
  //   return true;
  // }
  // if(node.next !== null){
  //   if(this.contains(target, node.next)){
  //     return true;
  //   }
  // }
  // return false;
};


function Node(value){
  
  if(!this instanceof Node){
    return new Node(value);
  }

  this.value = value;
  this.next = null;
  this.prev = null;

}
