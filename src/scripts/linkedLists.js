import { Node } from "./node";
class LinkedList {
  constructor() {
    this.headNode = null;
    this.size = 0;
  }
  append(value) {
    const newNode = new Node(value);
    if (!this.headNode) {
      this.headNode = newNode;
    } else {
      let current = this.headNode;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
    this.size++;
  }
  prepend(value) {
    const newNode = new Node(value, this.headNode);
    this.headNode = newNode;
    this.size++;
  }
  getSize() {
    return this.size;
  }
  getHead() {
    return this.headNode;
  }
  getTail() {
    let current = this.headNode;
    if (!current) {
      return null;
    }
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }
  at(index) {
    if (index < 0 || index >= this.size) return null;
    let current = this.headNode;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current;
  }
  pop() {
    if (!this.headNode) return null;
    if (this.size === 1) {
      this.headNode = null;
    } else {
      let current = this.headNode;
      while (current.nextNode.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = null;
    }
    this.size--;
  }
  contains(value) {
    let current = this.headNode;
    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }
  find(value) {
    let current = this.headNode;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      else {
        current = current.nextNode;
        index++;
      }
    }
    return null;
  }
  toString() {
    let current = this.headNode;
    let str = "";
    while (current) {
      str += `(${current.value}) ->`;
      current = current.nextNode;
    }
    str += "null";
    return str;
  }
  insertAt(value, index) {
    if (index < 0 || index > this.size) return null;
    if (index === 0) {
      this.prepend(value);
    } else {
      const newNode = new Node(value);
      let current = this.headNode;
      for (let i = 0; i < index - 1; i++) {
        current = current.nextNode;
      }
      newNode.nextNode = current.nextNode;
      current.nextNode = newNode;
      this.size++;
    }
  }
  removeAt(index) {
    if (index < 0 || index >= this.size) return null;
    if (index === 0) {
      this.headNode = this.headNode.nextNode;
    } else {
      let current = this.headNode;
      for (let i = 0; i < index - 1; i++) {
        current = current.nextNode;
      }
      current.nextNode = current.nextNode.nextNode;
    }
    this.size--;
  }
}
export { LinkedList };
