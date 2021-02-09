

// ******************Feb 9 2021*************
class Node {
    constructor(data) {
      this.data = data;
      this.next = null; // access to get to another object -- NULL is the default value
    }
  }
  
  class SLL {
    constructor() {
      this.head = null; // very FIRST element is defaulted to NULL
    }
  
    // return true or false if this.head is null
    isEmpty() {
      if (this.head) {
        return true;
      } else {
        return false;
      }
    }
  
    // add given node to the head, if it exists. return void
    addToFront(node) {
      if (this.head) {
        node.next = this.head;
        this.head = node;
      } else {
        this.head = node;
      }
    }
  
    // create a new node with given data, add it to the head. return void
    addDataToFront(data) {
      var newNode = node(data);
      newNode.addToFront();
    }
  }
  
  var node = new Node(10);
  var mySLL = new SLL();
  // mySLL.addToFront();
  
  // NOTES:
  // all nodes by default point to null
  // each node has .data and .next UP UNTIL there's a new node then it points to null
  // NULL is a placeholder until we place somehting next BUT also when we reach the end of our list