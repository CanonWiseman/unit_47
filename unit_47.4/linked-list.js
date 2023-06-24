/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0

    for (let val of vals) this.push(val);
  }

  getLength(){
    if(!this.head){
      this.length = 0
    }
    let currNode = this.head;
    let count = 1;
    while(currNode.next !== null){
      currNode = currNode.next;
      count ++;
    }
    this.length = count;
  }
  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      this.tail.next = newNode;
      this.tail = newNode; 
    }
    this.length += 1
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */
  pop() {
    return this.removeAt(this.length - 1);
  }

  /** shift(): return & remove first item. */

  shift() {
    let returnVal;

    if(this.length === 1){
      returnVal = this.head.val;
      this.length -=1;
      this.head = null;
      this.tail = null;
      return returnVal;
    }

    let nextNode = this.head.next;
    returnVal = this.head.val;
    this.head = null;
    this.length -=1;
    this.head = nextNode;
    return returnVal;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currNode = this.head;
    let currIdx = 0;

    while(currIdx != idx){
      currNode = currNode.next;
      currIdx ++;
    }

    return currNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currNode = this.head;
    let currIdx = 0;

    while(currIdx != idx){
      currNode = currNode.next;
      currIdx ++;
    }

    currNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let currNode = this.head;
    let currIdx = 0;
    const newNode = new Node(val);

    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
      return undefined;
    }

    let prevNode;
    while(currIdx != idx){
      prevNode = currNode;
      currNode = currNode.next;
      currIdx += 1;
    }
    
    if(prevNode === this.tail){
      this.tail = newNode;
    }

    prevNode.next = newNode;
    newNode.next = currNode;
    this.length += 1;
    return undefined;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let currNode = this.head;
    let currIdx = 0;

    if(this.length === 1){
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return currNode.val;
    }

    let prevNode;
    let returnVal;

    while(currIdx != idx){
      prevNode = currNode;
      currNode = currNode.next;
      currIdx += 1;
    }
    
    if(currNode === this.tail){
      this.tail = prevNode;
      returnVal = currNode.val;
      currNode = null;
      this.length -= 1;
      return returnVal;
    }
    
    returnVal = currNode.val
    prevNode.next = currNode.next;
    currNode = null;
    this.length -= 1;
    return returnVal;
  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.length === 0) return 0

    let currNode = this.head;
    let currValTotal = currNode.val;
    while(currNode.next !== null){
      currNode = currNode.next;
      currValTotal += currNode.val;
    }

    return currValTotal / this.length;
  }
}

module.exports = LinkedList;
