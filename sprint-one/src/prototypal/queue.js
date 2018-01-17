var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.count = 0;
  newQueue.first = 0;
  newQueue.last = 0;
  newQueue.storage = {};

  return newQueue;
};

var queueMethods = {};

var queueMethods = {
  enqueue: function(value) {
    this.count++;
    this.last++;
    (this.storage)[this.last] = value;
  },
  dequeue: function(value) {
    if (this.count > 0) {
      this.count--;
      this.first++;
      var popped = (this.storage)[this.first];
      delete (this.storage)[this.first];
      return popped;
    }
  },
  size: function() {
    return this.count;
  },
};