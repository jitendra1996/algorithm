class Node{
    constructor(val){
        this.val = val ;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
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
            newNode.prev = this.tail;
            this.tail = newNode ;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head || !this.tail || this.length === 0) return undefined;
        let popNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = popNode.prev;
            popNode.prev = null;
            this.tail.next = null;
        }
        this.length--;
        return popNode;
    }

    shift(){
        if(this.length === 0) return undefined;
        let shiftedNode = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }else{
            this.head = shiftedNode.next;
            this.head.prev = null;
            shiftedNode.next = null;
        }
        this.length--;
        return shiftedNode;
    }

    unshift(val){
        let newNode = new Node(val);
        if(this.length === 0 || !this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        if(index <= Math.floor(this.length / 2)){
            let i = 0;
            let current = this.head;
            while(i !== index){
                current = current.next;
                i++;
            }

            return current;
        }
        if(index > Math.floor(this.length / 2)){
            let i = this.length -1;
            let current = this.tail;
            while(i !== index){
                current = current.prev;
                i--;
            }
            return current;
        }
    }

    set(index , val){
        let getNode = this.get(index);
        if(!getNode){
            return false;
        }else{
            getNode.val = val;
            return true;
        }
    }

    insert(index , val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length ) return !!this.push(val);
        let newNode = new Node(val);
        let getNode = this.get(index);
        newNode.next = getNode;
        newNode.prev = getNode.prev;
        getNode.prev.next = newNode;
        getNode.prev = newNode;
        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        let getRemovedNode = this.get(index);
        let beforeRemovedNode = getRemovedNode.prev;
        let afterRemovedNode = getRemovedNode.next;
        beforeRemovedNode.next = afterRemovedNode;
        afterRemovedNode.prev = beforeRemovedNode;
        getRemovedNode.next = null;
        getRemovedNode.prev = null;
        this.length--;
        return getRemovedNode;
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
}

const list = new DoublyLinkedList();

console.log(list.push(100));
console.log(list.push(200));
console.log(list.push(300));
console.log(list.push(400));
// list.push(300);
console.log('-----------------------------------------------------------------------------');
console.log(list.print());
console.log(list.remove(2));
console.log('-----------------------------------------------------------------------------');
console.log(list.print());
