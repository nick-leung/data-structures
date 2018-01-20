var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var first = 0;
  var last = 0;
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[last] = value;
    last++;
    count++;
  };

  someInstance.dequeue = function() {
    if (count > 0) {
      var dequeuedValue = storage[first];
      delete storage[first];
      first++;
      count--;
      return dequeuedValue;
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
