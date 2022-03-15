class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        let index = this.values.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);
        while (true) {
            if (parentIndex < 0 || this.values[parentIndex].priority <= this.values[index].priority) break;
            let temp = this.values[parentIndex];
            this.values[parentIndex] = this.values[index];
            this.values[index] = temp;
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
        return this.values;
    }

    dequeue() {
        let temp = this.values[0];
        this.values[0] = this.values[this.values.length - 1];
        this.values[this.values.length - 1] = temp;
        let removedNode = this.values.pop();
        let parentIndex = 0;
        while (true) {
            let leftChildIndex = 2 * parentIndex + 1;
            let rightChildIndex = 2 * parentIndex + 2;
            if (leftChildIndex < this.values.length && rightChildIndex < this.values.length && this.values[leftChildIndex].priority > this.values[parentIndex].priority && this.values[rightChildIndex].priority > this.values[parentIndex].priority) break;
            else if (rightChildIndex < this.values.length && leftChildIndex < this.values.length && this.values[leftChildIndex].priority < this.values[rightChildIndex].priority && this.values[parentIndex].priority > this.values[leftChildIndex].priority) {
                let swap = this.values[leftChildIndex];
                this.values[leftChildIndex] = this.values[parentIndex];
                this.values[parentIndex] = swap;
                parentIndex = leftChildIndex;
            } else if (leftChildIndex < this.values.length && rightChildIndex < this.values.length && this.values[rightChildIndex].priority < this.values[leftChildIndex].priority && this.values[parentIndex].priority > this.values[rightChildIndex].priority) {
                let swap = this.values[rightChildIndex];
                this.values[rightChildIndex] = this.values[parentIndex];
                this.values[parentIndex] = swap;
                parentIndex = rightChildIndex;
            } else {
                break;
            }
        }
        return removedNode;

    }
}


const queue = new PriorityQueue();
console.log(queue.enqueue(100, 10));
queue.enqueue(10, 3);
queue.enqueue(2, 2);
queue.enqueue(900, 1);
queue.enqueue(1000, 0);
console.log(queue.values);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.values);


