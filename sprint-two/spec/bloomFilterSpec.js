var expect = chai.expect;

describe("bloomFilter", function() {
  var bloomFilter;
  var makeString = function()
  {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";
    var length = Math.random() * 15;
    for( var i=0; i < length; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
  beforeEach(function() {
    bloomFilter = new BloomFilter(18);
    var numberOfActualStrings = Math.random() * 10000;
    
  });

  it("should actually exist", function() {
    //console.log(instanceof bloomFilter);
    //assert(instanceof bloomFilter === "BloomFilter");
    //expect(bloomFilter).to.be.a('function');
  });
});
