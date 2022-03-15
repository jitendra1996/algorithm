class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(val) {
        if (!this.adjacencyList[val]) this.adjacencyList[val] = [];
    }

    addEdge(v1, v2) {
        if (this.adjacencyList[v1]) this.adjacencyList[v1].push(v2);
        if (this.adjacencyList[v2]) this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        if (this.adjacencyList[v1]) {
            const arr = [];
            for (let city of this.adjacencyList[v1]) {
                if (city !== v2) arr.push(city);
            }
            this.adjacencyList[v1] = arr;
        }
        if (this.adjacencyList[v2]) {
            const arr = [];
            for (let city of this.adjacencyList[v2]) {
                if (city !== v1) arr.push(city);
            }
            this.adjacencyList[v2] = arr;
        }
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return undefined;
        for (let v2 of this.adjacencyList[vertex]) {
            this.removeEdge(v2, vertex);
        }
        delete this.adjacencyList[vertex];
    }

    dfsRecursive(vertex){
        const result = [];
        const visitedNode = {};
        const adjacencyList = this.adjacencyList;
        (function helper(v){
            if(!v) return;
            visitedNode[v] = true;
            result.push(v);
            adjacencyList[v].forEach(val =>{
                if(!visitedNode[val]) helper(val);
            })
        })(vertex);
        return result;
    }

    dfsIterative(vertex){
        const stack = [];
        const result = [];
        const visited = {};
        stack.push(vertex);
        // visited[vertex]=true;
        while(stack.length !== 0){
            let currentVertex = stack.pop();
            if(!visited[currentVertex]){
                visited[currentVertex] = true;
                result.push(currentVertex);
                this.adjacencyList[currentVertex].forEach(val=>{
                    stack.push(val);
                })
            }
        }
        return result;
    }

    bfs(vertex){
        const queue = [vertex];
        const result = [];
        const visited = {};
        visited[vertex] = true;

        while(queue.length){
            let currentVertex = queue.shift();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(val=>{
                if(!visited[val]){
                    visited[val] = true;
                    queue.push(val);
                }
            });
        }
        return result;
    }

    // getIndex(arr,city){
    //     for(let i = 0 ; i < arr.length;i++){
    //         if(arr[i] === city) return i ;
    //     }
    // }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
console.log(g.adjacencyList);

g.addEdge("A","B");
g.addEdge("A","C");
g.addEdge("B","D");
g.addEdge("C","E");
g.addEdge("D","E");
g.addEdge("D","F");
g.addEdge("E","F");
console.log(g.adjacencyList);

console.log(g.dfsRecursive("A"));
console.log(g.dfsIterative("A"));
console.log(g.bfs("A"));



// g.addVertex("Tokyo");
// g.addVertex("Dallas");
// g.addVertex("USA");
// console.log(g.adjacencyList);

// g.addEdge("Tokyo", "Dallas");
// g.addEdge("USA", "Dallas");
// console.log(g.adjacencyList);

// // g.removeEdge("Dallas","USA");
// g.removeVertex("Tokyo");
// console.log(g.adjacencyList);
