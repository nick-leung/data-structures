var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  (this.storage)[this.count] = value;
  this.count++;
}
Stack.prototype.pop = function(value) {
  if (this.count > 0) {
    this.count--;
    var popped = (this.storage)[this.count];
    return popped;
  }
}
Stack.prototype.size = function() {
  return this.count;
}


