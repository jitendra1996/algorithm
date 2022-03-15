class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        const newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            let prev = this.first;
            this.first = newNode;
            newNode.next = prev;
        }
        return ++this.size;
    }
    // pop(){
    //     if(this.size === 0) return null;
    //     if(this.size === 1){
    //         let removedNode = this.first;
    //         this.first = null;
    //         this.last = null;
    //         this.size--;
    //         return removedNode.val;
    //     }else{
    //         let removeNode = this.first;
    //         this.first = removeNode.next;
    //         removeNode.next = null;
    //         this.size--;
    //         return removeNode.val;
    //     }
    // }
    pop(){
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = temp.next;
        this.size--;
        return temp.val;
    }
    print(){
        const arr = [];
        let current = this.first;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }
}


const list = new Stack();
console.log(list.push(100));
console.log(list.push(200));
console.log(list.push(300));
console.log(list.print());

console.log('--------------------------------------------removing node -----------------------------------');

console.log(list.pop());
console.log(list.print());