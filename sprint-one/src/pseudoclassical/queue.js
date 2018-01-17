var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};
  this.first = 0;
  this.last = 0;
};


Queue.prototype.enqueue = function(value) {
  this.count++;
  (this.storage)[this.last] = value;
  this.last++;
}
Queue.prototype.dequeue = function(value) {
  if (this.count > 0) {
    var popped = (this.storage)[this.first];
    this.count--;
    delete (this.storage)[this.first];
    this.first++;
    return popped;
  }
}
Queue.prototype.size = function() {
  return this.count;
}