

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

Graph.prototype.addNode = function(node) {
  // edge = [node1, node2];
  // edge = [node2, node1];

  // input: node
  // output: none

  // purpose:
  // Add a node to the graph, passing in the node's value.

  // complexity:
  // O(1)
  this.nodes.push(node);
};

Graph.prototype.contains = function(node) {
  // input: node
  // output: boolean

  // purpose:
  // Return a boolean value indicating if the value passed to contains is represented in the graph.

  // complexity:
  // O(n)
  return (this.nodes.indexOf(node) !== -1);
};


Graph.prototype.removeNode = function(node) {
  // input: node
  // output: none

  // purpose:
  // Removes a node from the graph.

  // complexity:
  // O(n^2)
  var index = this.nodes.indexOf(node);

  if (index > -1) {
    this.nodes.splice(index, 1);
  }
  
  for (var i = this.edges.length - 1; i >= 0; i--) {
    var edge = JSON.parse(this.edges[i]);
    
    if (edge.indexOf(node) !== -1) {
      this.edges.splice(i, 1);
    }
  }
  
};


Graph.prototype.hasEdge = function(fromNode, toNode) {
  // input: node, node
  // output: boolean

  // purpose:
  // Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.

  // complexity:
  // O(n)
  var edge = JSON.stringify([fromNode, toNode]);
  
  return (this.edges.indexOf(edge) !== -1);
};


Graph.prototype.addEdge = function(fromNode, toNode) {
  // input: node, node
  // output: none

  // purpose:
  // Connects two nodes in a graph by adding an edge between them.

  // complexity:
  // O(n)
  this.edges.push(JSON.stringify([fromNode, toNode]));
  this.edges.push(JSON.stringify([toNode, fromNode]));
};


Graph.prototype.removeEdge = function(fromNode, toNode) {
  // input: node, node
  // output: none

  // purpose
  // Remove an edge between any two specified (by value) nodes.

  // complexity:
  // O(n) (* 6)

  var edge1 = JSON.stringify([fromNode, toNode]);
  var edge2 = JSON.stringify([toNode, fromNode]);

  var index1 = this.edges.indexOf(edge1);

  if (index1 > -1) {
    this.edges.splice(index1, 1);
  }
  
  var index2 = this.edges.indexOf(edge2);
  
  if (index2 > -1) {
    this.edges.splice(index2, 1);
  }
};

Graph.prototype.forEachNode = function(cb) {
  // input: callback
  // output: none

  // purpose:
  // Pass in a callback which will be executed on each node of the graph.

  // complexity:
  // O(n)
  _.each(this.nodes, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


