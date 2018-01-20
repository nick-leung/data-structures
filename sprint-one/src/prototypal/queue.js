var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.first = 0;
  newQueue.last = 0;
  newQueue.count = 0;

  return newQueue;
};

var queueMethods = {};

var queueMethods = {
  enqueue: function(value) {
    (this.storage)[this.last] = value;
    this.last++;
    this.count++;
  },
  dequeue: function(value) {
    if (this.count > 0) {
      var dequeuedValue = (this.storage)[this.first];
      delete (this.storage)[this.first];
      this.first++;
      this.count--;
      return dequeuedValue;
    }
  },
  size: function() {
    return this.count;
  },
};