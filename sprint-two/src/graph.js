

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

Graph.prototype.addNode = function(node) {
  // input: node
  // output: none

  // purpose:
  // Add a node to the graph, passing in the node's value.

  // complexity: 
  // o(1)

  this.nodes[node] = this.nodes[node] || { edges: {} };
};

Graph.prototype.contains = function(node) {
  // input: node
  // output: boolean

  // purpose:
  // Return a boolean value indicating if the value passed to contains is represented in the graph.

  // complexity:
  // o(1)
  
  return !!(this.nodes[node]);
};


Graph.prototype.removeNode = function(node) {
  // input: node
  // output: none

  // purpose:
  // Removes a node from the graph.

  // complexity:
  // worst case scenario: o(n)
  
  for (var toNode in this.nodes[node].edges) {
    this.removeEdge(node, toNode);
  }

  delete this.nodes[node];
};


Graph.prototype.hasEdge = function(fromNode, toNode) {
  // input: node, node
  // output: boolean

  // purpose:
  // Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.

  // complexity:
  // o(1)

  if (!(this.contains(fromNode) && this.contains(toNode))) {
    return false;
  }
  return !!(this.nodes[fromNode].edges[toNode]);
};


Graph.prototype.addEdge = function(fromNode, toNode) {
  // input: node, node
  // output: none

  // purpose:
  // Connects two nodes in a graph by adding an edge between them.

  // complexity:
  // o(1)

  if (!(this.contains(fromNode) && this.contains(toNode))) {
    return;
  }
  this.nodes[toNode].edges[fromNode] = fromNode;
  this.nodes[fromNode].edges[toNode] = toNode;
};


Graph.prototype.removeEdge = function(fromNode, toNode) {
  // input: node, node
  // output: none

  // purpose
  // Remove an edge between any two specified (by value) nodes.

  // complexity:
  // o(1)
  
  if (!(this.contains(fromNode) && this.contains(toNode))) {
    return;
  }
  delete this.nodes[toNode].edges[fromNode];
  delete this.nodes[fromNode].edges[toNode];
};

Graph.prototype.forEachNode = function(cb) {
  // input: callback
  // output: none

  // purpose:
  // Pass in a callback which will be executed on each node of the graph.

  // complexity:
  // o(n)

  for (var node in this.nodes) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


