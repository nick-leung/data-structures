

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value) {
  // inputs: key, value
  // outputs: none

  // purpose:
  // inserts a key-value pair to the hash table

  // complexity:
  // best case scenario: O(1)
  // worst case scenario: O(n)

  var index = getIndexBelowMaxForKey(key, this._limit);
  var tupleArray = this._storage.get(index) || [];

  // look for the key in the tuple array,
  // and if we find it, overwrite the tuple value
  // with the method's value parameter
  for (var i = 0; i < tupleArray.length; i++) {
    var tuple = tupleArray[i];  
    if (tuple[0] === key) {
      tuple[1] = value;
      this._storage.set(index, tupleArray);
      return;
    }
  }

  // if we are not able to find the key in the tuple array
  // at the index, we add a new tuple to the tuple array
  tuple = [key, value];
  tupleArray.push(tuple);
  this._storage.set(index, tupleArray);
};

HashTable.prototype.retrieve = function(key) {
  // inputs: key
  // outputs: value

  // purpose:
  // retrieves a value from the hash table

  // complexity:
  // best case scenario: O(1)
  // worst case scenario: O(n)

  var index = getIndexBelowMaxForKey(key, this._limit);
  var tupleValue = undefined;
  var tupleArray = this._storage.get(index) || [];

  for (var i = 0; i < tupleArray.length; i++) {
    var tuple = tupleArray[i];
    if (tuple[0] === key) {
      tupleValue = tuple[1];
    }
  }
  return tupleValue;
};

HashTable.prototype.remove = function(key) {
  // inputs: key
  // outputs: none

  // purpose:
  // removes a value from the hash table

  // complexity:
  // best case scenario: O(1)
  // worst case scenario: O(n)

  var index = getIndexBelowMaxForKey(key, this._limit);
  var tupleValue = undefined;
  var tupleArray = this._storage.get(index) || [];

  for (var i = 0; i < tupleArray.length; i++) {
    var tuple = tupleArray[i];
    if (tuple[0] === key) {
      tupleArray.splice(i, 1);
      tupleValue = tupleArray;
    }
  }

  this._storage.set(index, tupleValue);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


