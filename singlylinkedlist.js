class Node{
    constructor(val){
        this.val = val ;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    traverse(){
        let current = this.head;
        while(current){
            console.log(current);
            current = current.next;
        }
    }

    pop(){
        if(this.length === 0){
            return undefined;
        }else{
            let temp = this.head;
            let prev = temp;
            let i = 0;
            while(i < this.length - 1){
                prev = temp;
                temp = prev.next;
                i++;
            }
            prev.next = null;
            this.tail = prev;
            this.length--;
            return temp;
        }
    }

    shift(){
        if(!this.head) return undefined;
        let current = this.head;
        this.head = current.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return current;
    }

    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        let curVal = this.head;
        let i = 0 ;
        while(i !== index){
            curVal = curVal.next;
            i++;
        }
        return curVal;
    }

    set(index,val){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index , val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length){
            this.push(val);
            return true;
        }else if(index === 0){
            this.unshift(val);
            return true;
        }else{
            let newNode = new Node(val);
            let prevNode = this.get(index-1);
            newNode.next = prevNode.next;
            prevNode.next = newNode;
            this.length++;
            return true;
        }
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === this.length-1) return this.pop();
        if(index === 0 ) return this.shift();
        let prevNode = this.get(index-1);
        let rem = prevNode.next;
        prevNode.next = rem.next;
        this.length--;
        return rem;
    }

    print(){
        const arr = [];
        let current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for(let i =0 ; i < this.length ; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }
}


const list = new SinglyLinkedList();
list.push("hello");
list.push("babes");
list.push('What');
list.push('are');
list.push('you');
list.push("doing");
// console.log(list);
// list.traverse();
console.log('------------------------------------------------------------------------------');
// console.log(list.get(0));
// console.log(list.insert(6,99));
// console.log(list.remove(3));
// console.log('------------------------------------------------------------------------------');
// list.traverse();
// console.log(list);
console.log(list.print());
console.log('------------------------------------------------------------------------------');
console.log(list.reverse());
console.log('------------------------------------------------------------------------------');
console.log(list.print());


// console.log('--------list before pop--------------');
// console.log('--------pop item from list--------------');
// console.log(list.pop());
// console.log('--------list after pop--------------');
// list.traverse();
// console.log(list);
// console.log('---------------------------list before shift-----------------------------');
// console.log(list);
// list.traverse();
// console.log('---------------------------shifted element-----------------------------');
// console.log(list.shift());
// console.log('---------------------------list after shift-----------------------------');
// console.log(list);
// list.traverse();