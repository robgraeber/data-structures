var assert = chai.assert; 

describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree(5);
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it("should insert values at the correct location in the tree", function(){
    console.dir(binarySearchTree);
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    console.log("The Tree before the error is", binarySearchTree);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
    binarySearchTree.insert(21);
    binarySearchTree.insert(22);
    binarySearchTree.insert(23);
    binarySearchTree.insert(24);
    binarySearchTree.insert(25);
    binarySearchTree.insert(26);
    binarySearchTree.insert(27);
    binarySearchTree.insert(28);
    binarySearchTree.insert(29);
    binarySearchTree.insert(30);
    binarySearchTree.insert(31);
    binarySearchTree.insert(32);
    binarySearchTree.insert(33);
    binarySearchTree.insert(34);
    binarySearchTree.insert(35);
    binarySearchTree.insert(36);
    binarySearchTree.insert(37);
    binarySearchTree.insert(38);
    binarySearchTree.insert(39);

    console.log(binarySearchTree);
    debugger;
    
  });

  it("should have a working 'contains' method", function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    assert.isTrue(binarySearchTree.contains(7));
    assert.isFalse(binarySearchTree.contains(8));
  });
  
  it("should execute a callback on every value in a tree using 'depthFirstLog'", function(){
    var array = [];
    var func = function(value){ array.push(value); }
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    assert.notStrictEqual(array, [5,2,3]);
  });
  it("should execute a callback on every value in a tree using 'breadthFirstLog'", function(done){
    var array = [];
    var func = function(value){ array.push(value); }
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(8);
    binarySearchTree.insert(15);
    binarySearchTree.insert(11);
    binarySearchTree.insert(-1);
    var results = [];
    binarySearchTree.breadthFirstLog(function(value){
      results.push(value);
    }, function(obj){
        console.log("calback from breadthFirstLog ", obj);
        console.log("calback from breadthFirstLog", results);
        assert.isTrue(results.length === 8);
        assert.isTrue(results[0] === 5);
        assert.isTrue(results[1] === 2);
        assert.isTrue(results[2] === 7);
        assert.isTrue(results[3] === -1);
        assert.isTrue(results[4] === 3);
        assert.isTrue(results[5] === 8);
        assert.isTrue(results[6] === 15);
        assert.isTrue(results[7] === 11);
        console.log(results === [5, 2, 7, -1, 3, 8, 15, 11]);
        done();
    });

    // setTimeout(function(){
    // assert.isTrue(results.indexOf(5) !== -1);
    // assert.isTrue(results.indexOf(6) !== -1);
    // assert.isTrue(results.indexOf(7) !== -1);
    // assert.isTrue(results.indexOf(8) !== -1);
    // assert.isTrue(results.length === 5);
    // })
  });
});
