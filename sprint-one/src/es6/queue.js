class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.first = 0;
    this.last = 0;
    this.count = 0;
  }

  enqueue(value) {
    (this.storage)[this.last] = value;
    this.last++;
    this.count++;
  }

  dequeue() {
    if (this.count > 0) {
      var dequeuedValue = (this.storage)[this.first];
      delete (this.storage)[this.first];
      this.first++;
      this.count--;
      return dequeuedValue;
    }
  }

  size() {
    return this.count;
  }
}
