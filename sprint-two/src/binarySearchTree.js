var BinarySearchTree = function(value) {
  this.value = value;
  
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  // input: value
  // output: none
  
  // purpose:
  // accepts a value 
  // and places it in the tree 
  // in the correct position
  
  // complexity:
  // average case scenario: O(log n)
  // worst case scenario: O(n)

  if (value < this.value) {
    this.left 
      ? this.left.insert(value) 
      : this.left = new BinarySearchTree(value);
  } else {
    this.right 
      ? this.right.insert(value) 
      : this.right = new BinarySearchTree(value);
  }
};

BinarySearchTree.prototype.contains = function(value) {
  // input: value
  // output: boolean
  
  // purpose:
  // accepts a value 
  // and returns a boolean reflecting whether
  // or not the value is contained in the tree
  
  // complexity:
  // average case scenario: o(log n)
  // worst case scenario: o(n)

  var isPresent = false;

  var searchTrees = function (tree) {
    if (tree.left && value < tree.value) {
      searchTrees(tree.left);
    } else if (tree.right && value > tree.value) {
      searchTrees(tree.right);
    } else if (value === tree.value) {
      isPresent = true;
    }
  };

  searchTrees(this);

  return isPresent;  
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  // input: callback
  // output: none
  
  // purpose:
  // accepts a callback
  // and executes it on every value
  // contained in the tree
  
  // complexity:
  // O(n)

  var searchTrees = function (tree) {
    cb(tree.value);
    if (tree.left) {
      searchTrees(tree.left);
    }
    if (tree.right) {
      searchTrees(tree.right);
    }
  };

  searchTrees(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
