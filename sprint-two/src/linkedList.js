var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  
  // list: Node(value);

  // var node = {value, next};
  // tail.next === null

  list.addToTail = function(value) {
    // expected input is the value that want to add to the list
    // no expected output
    var node = Node(value);
    if (this.head === null) {
      
      this.head = node;
      this.tail = node;
      
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
  };

  list.removeHead = function() {
    // no expected input
    // expected output is the value of the head that was removed
    if (this.head === null) {
      return;
    } else {
      var prevHead = this.head.value;
      this.head = this.head.next;
      return prevHead;
    }
  };

  list.contains = function(target) {
    // expected input is the target value that we are searching for
    // expected output is true if we find the target value, false if not
    var searchNode = function (node, target) {
      if (node !== null) {
        if (node.value === target) {
          return true;
        } else {
          return searchNode(node.next, target);
        }
      }
      return false;
    };
    return searchNode(this.head, target);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
