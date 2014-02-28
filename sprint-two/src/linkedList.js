var LinkedList = function (){
  
  if(!(this instanceof LinkedList)){
    return new LinkedList(value);
  }

  this.head = null;
  this.tail = null;

};

LinkedList.prototype = {
  addToTail : function(value){
    var linkedListNode = new Node(value);
    linkedListNode.next = null;
    if(this.head === null){
      this.head = linkedListNode;
    }
    if(this.tail !== null){
      this.tail.next = linkedListNode;
    }
    this.tail = linkedListNode;
  },

  removeHead : function(){
    if(this.head === null){
      return null;
    }
    var result = this.head.value;
    this.head = this.head.next;
    if(this.head === null){
      this.tail === null;
    }
    return result;
  },

  contains : function(target, node){
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
  }
}

function Node(value){
  
  if(!this instanceof Node){
    return new Node(value);
  }

  this.value = value;
  this.next = null;

}
