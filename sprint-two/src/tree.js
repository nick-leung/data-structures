var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // input: any value
  // output: none
  
  // purpose:
  // takes any value
  // sets the value as a node
  // adds the node as a child to the tree
  
  // complexity:
  // O(1)
  
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  // input: any value
  // output: boolean
  
  // purpose:
  // Signifies whether the target node or
  // it's children contain the target value
  
  // complexity:
  // O(n)
  
  var found = false;
  var searchTree = function (node, target) {
    if (found) {
      return;
    }
    
    if (node.value === target) {
      found = true;
    } else {    
      for (var i = 0; i < node.children.length; i++) {
        searchTree(node.children[i], target);
      }
    }
  };
  
  searchTree(this, target);
  
  return found;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
