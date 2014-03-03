var BloomFilter = function(maxLength){
  this._bitArray = [];
  this._maxLength = maxLength || 18;
}

BloomFilter.prototype.hash1 = function(v, maxLength){
    var n = v.length,
        a = 2166136261,
        c,
        d,
        i = -1;
    while (++i < n) {
      c = v.charCodeAt(i);
      if (d = c & 0xff000000) {
        a ^= d >> 24;
        a += (a << 1) + (a << 4) + (a << 7) + (a << 8) + (a << 24);
      }
      if (d = c & 0xff0000) {
        a ^= d >> 16;
        a += (a << 1) + (a << 4) + (a << 7) + (a << 8) + (a << 24);
      }
      if (d = c & 0xff00) {
        a ^= d >> 8;
        a += (a << 1) + (a << 4) + (a << 7) + (a << 8) + (a << 24);
      }
      a ^= c & 0xff;
      a += (a << 1) + (a << 4) + (a << 7) + (a << 8) + (a << 24);
    }
    // From http://home.comcast.net/~bretm/hash/6.html
    a += a << 13;
    a ^= a >> 7;
    a += a << 3;
    a ^= a >> 17;
    a += a << 5;
    return Math.abs((a & 0xffffffff) % maxLength);
}
BloomFilter.prototype.hash2 = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
}
BloomFilter.prototype.hash3 = function(value, maxLength){
  for(var ret = 0, i = 0, len = value.length; i < len; i++) {
    ret = (31 * ret + value.charCodeAt(i)) << 0;
  }
  return ret % maxLength;
}
BloomFilter.prototype.insert = function(value){
  this._bitArray[this.hash1(value, this._maxLength)] = 1;
  this._bitArray[this.hash2(value, this._maxLength)] = 1;
  this._bitArray[this.hash3(value, this._maxLength)] = 1;
}
BloomFilter.prototype.contains = function(value){
  return !!(this._bitArray[this.hash1(value, this._maxLength)]) &&
         !!(this._bitArray[this.hash2(value, this._maxLength)]) &&
         !!(this._bitArray[this.hash3(value, this._maxLength)]) ;
}