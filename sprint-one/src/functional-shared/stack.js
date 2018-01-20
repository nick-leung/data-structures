var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.storage = {};
  newStack.count = 0;
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
    (this.storage)[this.count] = value;
    this.count++;
  },
  pop: function(value) {
    if (this.count > 0) {
      var poppedValue = (this.storage)[--this.count];
      delete (this.storage)[this.count];
      return poppedValue;
    }
  },
  size: function() {
    return this.count;
  }
};