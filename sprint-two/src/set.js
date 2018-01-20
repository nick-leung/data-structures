var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // input: string
  // output: none
  
  // purpose:
  // takes any string
  // adds it to the set
  
  // complexity:
  // o(1)
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  // input: string
  // output: boolean
  
  // purpose:
  // takes any string
  // returns a boolean reflecting
  // whether it can be found in the set
  
  // complexity:
  // o(1)
  return (this._storage[item] !== undefined);
};

setPrototype.remove = function(item) {
  // input: string
  // output: none
  
  // purpose:
  // takes any string
  // removes it from the set
  // if it can be found in the set
  
  // complexity:
  // o(1)
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
