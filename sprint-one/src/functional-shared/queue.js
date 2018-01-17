var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.count = 0;
  newQueue.first = 0;
  newQueue.last = 0;
  newQueue.storage = {};
  extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {
  enqueue: function(value) {
    (this.storage)[this.last] = value;
    this.last++;
    this.count++;
  },
  dequeue: function(value) {
    if (this.count > 0) {
      var valuePopped = (this.storage)[this.first];
      delete (this.storage)[this.first];
      this.first++;
      this.count--;

      return valuePopped;
    }
  },
  size: function() {
    return this.count;
  }
};

