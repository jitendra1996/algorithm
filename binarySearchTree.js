class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(val){
        const newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
            return this;
        }else{
            // console.log(this.insertHelper(newNode,this.root));
            let current = this.root;
            while(true){
                if(val === current.value) return undefined;
                if(val > current.value){
                    if(!current.right){
                        current.right = newNode;
                        return this;
                    }else{
                        current = current.right;
                    }
                }else if(val < current.value){
                    if(!current.left){
                        current.left = newNode;
                        return this;
                    }else{
                        current = current.left;
                    }
                }
            }
        }
    }

    find(val){
        if(!this.root) return false;
        if(this.root.value === val) return true;
        let current = this.root;
        while(true){
            if(val > current.value){
                if(!current.right) return false;
                if(val === current.right.value) return true;
                current = current.right;
            }else if(val < current.value){
                if(!current.left) return false;
                if(val === current.left.value) return true;
                current = current.left;
            }
        }
    }

    bfs(){
        const queue = [];
        const visited = [];
        queue[0] = this.root;
        while(queue.length !== 0){
            let current = queue.shift();
            visited.push(current.value);
            if(current.left){
                queue.push(current.left);
            }
            if(current.right){
                queue.push(current.right);
            }
        }
        return visited;
    }

    dfsPreOrder(){
        const visited = [];
        let current = this.root;
        function helper(node){
            visited.push(node.value);
            if(node.left) helper(node.left);
            if(node.right) helper(node.right);
        }

        helper(current);
        return visited;
    }

    dfsPostOrder(){
        const visited = [];
        let current = this.root;
        function helper(node){
            if(node.left) helper(node.left);
            if(node.right) helper(node.right);
            visited.push(node.value);
        }
        helper(current);
        return visited;
    }

    dfsInOrder(){
        const visited = [];
        let current = this.root;
        function helper(node){
            if(node.left) helper(node.left);
            visited.push(node.value);
            if(node.right) helper(node.right);
        }
        helper(current);
        return visited;
    }
}

const tree = new BinarySearchTree();

tree.insert(41);
tree.insert(91);
tree.insert(23);
tree.insert(12);
tree.insert(24);
tree.insert(100);

// console.log(tree.find(91));

console.log('bfs : ',tree.bfs());
console.log('dfs-preOrder : ',tree.dfsPreOrder());
console.log('dfs postOrder : ',tree.dfsPostOrder());
console.log('dfs InOrder : ',tree.dfsInOrder());