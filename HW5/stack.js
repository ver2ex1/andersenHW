class Node {
  constructor(node) {
    this.node = node
    this.next = null
  }
}

class Stack {
  constructor(max = 10) {
    if (!Number.isInteger(max) || max < 1)
      throw new Error("Invalid number")
    this.start = null
    this.length = 0
  }

  push(elem) {
    if (this.length === max) throw new Error("Stack is overcrowded.")
    let node = new Node(elem)
    node.next = this.start
    this.start = node
    this.length++
  }

  pop() {
    if (this.length < 1) throw new Error("Stack is empty.")
    let first = this.start
    this.start = this.start.next
    this.length--
    return first.node
  }

  peek() {
    this.length === 0 ? null : this.start.node
  }

  isEmpty() {
    return this.length === 0
  }

  toArray() {
    const arr = []
    let curr = this.start
    while (curr) {
      arr.push(curr)
      curr = curr.next
    }
    return arr
  }

  static fromIterable(iterable) {
    if (!iterable || typeof iterable[Symbol.iterator] !== "function")
      throw new Error("Not iterable")
    let length = 0
    let i
    for (i of iterable) {
      length++
    }
    let stack = new Stack(length)
    for (i of iterable) {
      stack.push(i)
    }
    return stack
  }
}

module.exports = { Stack }
