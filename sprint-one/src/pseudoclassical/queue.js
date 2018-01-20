var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.first = 0;
  this.last = 0;
  this.count = 0;
};

Queue.prototype.enqueue = function(value) {
  (this.storage)[this.last] = value;
  this.last++;
  this.count++;
};

Queue.prototype.dequeue = function() {
  if (this.count > 0) {
    var dequeuedValue = (this.storage)[this.first];
    delete (this.storage)[this.first];
    this.first++;
    this.count--;
    return dequeuedValue;
  }
};

Queue.prototype.size = function() {
  return this.count;
};