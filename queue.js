class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        const newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue(){
        if(!this.size === 0) return null;
        let temp = this.first;
        if(this.last === this.first){
            this.last = null;
        }
        this.first = temp.next;
        this.size--;
        return temp.value;
    }
    print(){
        const arr = [];
        let current = this.first;
        while(current){
            arr.push(current.value);
            current=current.next;
        }
        return arr;
    }
}


const list = new Queue();

console.log(list.enqueue(100));
console.log(list.enqueue(200));
console.log(list.enqueue(300));

console.log(list.print());

console.log('----------------------------------------------remove from list----------------------------------------');

console.log(list.dequeue());
console.log(list.print());