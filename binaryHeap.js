class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }
    insert(val){
        this.values.push(val);
        let index = this.values.length-1;
        let parentIndex = Math.floor((index - 1)/2);
        while(this.values[parentIndex] < this.values[index]){
            let temp = this.values[parentIndex];
            this.values[parentIndex] = this.values[index];
            this.values[index] = temp;
            index = parentIndex;
            parentIndex = Math.floor((parentIndex - 1)/2);
        }
        return this.values;
    }
    remove(){
        let temp = this.values[0];
        this.values[0] = this.values[this.values.length - 1];
        this.values[this.values.length - 1] = temp;
        let removedNode = this.values.pop();
        let parentIndex = 0;
        while(true){
            let leftChildIndex = 2*parentIndex + 1;
            let rightChildIndex = 2*parentIndex + 2;
            if(leftChildIndex < this.values.length && rightChildIndex < this.values.length && this.values[parentIndex] > this.values[leftChildIndex] && this.values[parentIndex] > this.values[rightChildIndex]) break;
            else if(leftChildIndex < this.values.length && this.values[leftChildIndex] > this.values[rightChildIndex] && this.values[parentIndex] < this.values[leftChildIndex]){
                let swap = this.values[leftChildIndex];
                this.values[leftChildIndex] = this.values[parentIndex];
                this.values[parentIndex] = swap;
                parentIndex = leftChildIndex;
            }else if(rightChildIndex < this.values.length && this.values[rightChildIndex] > this.values[leftChildIndex] && this.values[parentIndex] < this.values[rightChildIndex]){
                let swap = this.values[rightChildIndex];
                this.values[rightChildIndex] = this.values[parentIndex];
                this.values[parentIndex] = swap;
                parentIndex = rightChildIndex;
            }else{
                break;
            }
        }
        return removedNode;
    }
}

const list = new MaxBinaryHeap();
list.insert(100);
list.insert(19);
list.insert(36);
list.insert(17);
list.insert(12);
list.insert(25);
list.insert(200);
list.insert(1);
console.log(list.values);
console.log('-----------------------------------removed node---------------------------');
console.log(list.remove());
console.log(list.remove());
// console.log(list.remove());
// console.log(list.remove());

console.log('-----------------------------------list after removed node---------------------------');
console.log(list.values);