var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.count = 0;
  newStack.storage = {};

  return newStack;
};

var stackMethods = {
  push: function(value) {
    (this.storage)[this.count] = value;
    this.count++;
  },
  pop: function(value) {
    if (this.count > 0) {
      this.count--;
      var popped = (this.storage)[this.count];
      delete (this.storage)[this.count];
      return popped;
    }
  },
  size: function() {
    return this.count;
  },
};


