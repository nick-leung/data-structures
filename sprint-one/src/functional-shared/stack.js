var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.count = 0;
  newStack.storage = {};
  extend(newStack, stackMethods);

  return newStack;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {
  push: function(value) {
    this.count++;
    (this.storage)[this.count] = value;
  },
  pop: function(value) {
    if (this.count > 0) {
      var valuePopped = (this.storage)[this.count];
      delete (this.storage)[this.count];
      this.count--;

      return valuePopped;
    }
  },
  size: function() {
    return this.count;
  }
};