class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.storage = {};
    this.first = 0;
    this.last = 0;
  }
  enqueue(value) {
    this.count++;
    this.last++;
    (this.storage)[this.last] = value;
  }
  dequeue() {
    if (this.count > 0) {
      this.count--;
      this.first++;
      var popped = (this.storage)[this.first];
      delete (this.storage)[this.first];
      return popped;
    }
  }
  size() {
    return this.count;
  }
}
