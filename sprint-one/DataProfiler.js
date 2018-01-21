var newQueue = new Queue();
for (var i = 0; i < 100000; i++) {
    newQueue.enqueue(i);
    // newQueue.size();
}

for (var i = 0; i < 100000; i++) {
    newQueue.dequeue();
    // newQueue.size();
}

var newStack = new Stack();
for (var i = 0; i < 100000; i++) {
    newStack.push(i);
    // newStack.size();
}

for (var i = 0; i < 100000; i++) {
    newStack.pop();
    // newStack.size();
}

console.log('Finished!');