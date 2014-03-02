var Graph = function(value){
  //value = value || null;
  this.value = value || null;
  this._strongConnections = [];
  this._weakConnections = []
};

Graph.prototype.forEachNode = function (callback){
  for(var i = 0; i < this._weakConnections.length; i++){
    callback(this._weakConnections[i]);
  }
}
Graph.prototype.addNode = function(value, toNode){
  var node = new Graph(value);
  if(this._weakConnections.length === 1 && !toNode){
    toNode = this._weakConnections[0];
  }
  if(!(toNode instanceof Graph)){
    toNode = this.findNode(toNode);
  }

  this._weakConnections.push(node);

  //node._weakConnections.push(this);
  if(!!toNode){
    toNode._strongConnections.push(node);
    node._strongConnections.push(toNode);
  }
};

Graph.prototype.contains = function(node){
  if(!(node instanceof Graph)){
    node = this.findNode(node);
  }
  for(var i = 0; i<this._weakConnections.length; i++){
    if(this._weakConnections[i] === node || this._weakConnections[i].value === node){
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  var i;
  if(!(node instanceof Graph)){
    node = this.findNode(node);
  }
  for(i = 0; i<this._weakConnections.length; i++){
    if(this._weakConnections[i] === node || this._weakConnections[i].value === node){
      this._weakConnections.splice(i,1);
    }
  }
  for(i = 0; i < node._strongConnections.length; i++){
    this.removeEdge(node, node._strongConnections[i]);
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  var i;

  if(!(fromNode instanceof Graph)){
    fromNode = this.findNode(fromNode);
  }
  if(!(toNode instanceof Graph)){
    toNode = this.findNode(toNode);
  }

  for(i = 0; i < fromNode._strongConnections.length; i++){
    if(fromNode._strongConnections[i] === toNode){
      return true;
    }
  }
  return false;
};

Graph.prototype.findNode = function(node){

  for(var i = 0; i<this._weakConnections.length; i++){
    if(this._weakConnections[i] === node || this._weakConnections[i].value === node){
      return this._weakConnections[i];
    }
  }
  return null;

};

Graph.prototype.addEdge = function(fromNode, toNode){
  if(!(fromNode instanceof Graph)){
    fromNode = this.findNode(fromNode);
  }
  if(!(toNode instanceof Graph)){
    toNode = this.findNode(toNode);
  }

  if(this.getEdge(fromNode, toNode)){
    return true;
  }
  fromNode._strongConnections.push(toNode);
  toNode._strongConnections.push(fromNode);

};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if(!(fromNode instanceof Graph)){
    fromNode = this.findNode(fromNode);
  }
  if(!(toNode instanceof Graph)){
    toNode = this.findNode(toNode);
  }

  var i, j;
  for(i = 0; i <= fromNode._strongConnections.length; i++){
    if(fromNode._strongConnections[i] === toNode){
      for(j = 0; j < fromNode._strongConnections[i]._strongConnections.length; j++){
        if(fromNode._strongConnections[i]._strongConnections[j] === fromNode){
          fromNode._strongConnections[i]._strongConnections.splice(j,1);
        }
      }
      fromNode._strongConnections.splice(i,1);
    }
  }
  if(fromNode._strongConnections.length <= 0){
    this.removeNode(fromNode);
  }
  if(toNode._strongConnections.length <= 0){
    this.removeNode(toNode);
  }
};
