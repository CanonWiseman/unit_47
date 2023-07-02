class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);

    if(this.root === null){
      this.root = newNode;
    } 
    let currNode = this.root;

    while(currNode){
      if(currNode.left === null && currNode.val > val){
        currNode.left = newNode;
      }
      else if(currNode.right === null && currNode.val < val){
        currNode.right = newNode;
      }

      currNode = val < currNode.val
      ? currNode.left
      : currNode.right
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currNode = this.root) {
    const newNode = new Node(val);

    if(this.root === null){
      this.root = newNode;
      return this;
    } 

    if(currNode.left === null && currNode.val > val){
      currNode.left = newNode;
    }
    else if(currNode.right === null && currNode.val < val){
      currNode.right = newNode;
    }
    else{
      val < currNode.val
      ? this.insertRecursively(val, currNode.left)
      : this.insertRecursively(val, currNode.right)
    }
    

    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currNode = this.root;

    while(currNode){
      if(currNode.val === val) return currNode;

      currNode = val < currNode.val
                ? currNode.left
                : currNode.right;
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (this.root === null) return undefined;

    if (val < current.val) {
      if (current.left === null) return undefined;
      return this.findRecursively(val, current.left);
    } else if (val > current.val) {
      if (current.right === null) return undefined;
      return this.findRecursively(val, current.right);
    }
    return current;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let visited = [];

    function preOrderHelper(node, visited){
      visited.push(node.val);
      if(node.left) preOrderHelper(node.left, visited);
      if(node.right) preOrderHelper(node.right, visited);
    }

    preOrderHelper(this.root, visited)
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let visited = [];

    function inOrderHelper(node, visited){
      if(node.left) inOrderHelper(node.left, visited);
      visited.push(node.val);
      if(node.right) inOrderHelper(node.right, visited);
    }

    inOrderHelper(this.root, visited)
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let visited = [];

    function postOrderHelper(node, visited){
      if(node.left) postOrderHelper(node.left, visited);
      if(node.right) postOrderHelper(node.right, visited);
      visited.push(node.val);
    }

    postOrderHelper(this.root, visited)
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let visited = [];
    if(this.root === null) return visited;
    let queueOrder = [this.root];

    while(queueOrder.length){
      let currNode = queueOrder.shift();

      visited.push(currNode.val);

      if(currNode.left) queueOrder.push(currNode.left);
      if(currNode.right) queueOrder.push(currNode.right);
    }

    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
