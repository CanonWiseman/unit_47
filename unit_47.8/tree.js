/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let total = 0;
    let queueOrder = [this.root]; 

    while(queueOrder.length && queueOrder[0] !== null){
      let currNode = queueOrder.shift();

      total += currNode.val;
      for(let child of currNode.children){
        queueOrder.push(child)
      }
    }
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let total = 0;
    let queueOrder = [this.root];

    while(queueOrder.length && queueOrder[0] !== null){
      let currNode = queueOrder.shift();

      if(currNode.val % 2 === 0){
        total += 1;
      }

      for(let child of  currNode.children){
        queueOrder.push(child);
      }
    }
    return total;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let total = 0;
    let queueOrder = [this.root];

    while(queueOrder.length && queueOrder[0] !== null){
      let currNode = queueOrder.shift();

      if(currNode.val > lowerBound){
        total += 1;
      }

      for(let child of currNode.children){
        queueOrder.push(child);
      }
    }
    return total;
  }
}

module.exports = { Tree, TreeNode };
