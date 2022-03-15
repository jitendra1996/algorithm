class PriorityQueue{
    constructor(){
        this.values = [];
    }
    
    enqueue(val,priority){
        this.values.push({val,priority});
        this.sort();
    }

    dequeue(){
        return this.values.shift();
    }

    sort(){
        this.values.sort((a,b)=>a.priority-b.priority);
    }
}

class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1,vertex2,weight){
        if(this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push({node:vertex2,weight});
        if(this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push({node:vertex1,weight});
    }
    dijkstra(start,end){
        const node = new PriorityQueue();
        const distances = {};
        const previous = {};
        let smallest ;
        const path = []; //to return at the end

        for(const key in this.adjacencyList){
            if(key === start){
                distances[key]=0;
                node.enqueue(key,0);
            }else{ 
                distances[key] = Infinity;
                node.enqueue(key,Infinity);
            }
            previous[key] = null;
        }

        while(node.values.length){
            smallest = node.dequeue().val;
            if(smallest === end) {
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            };
            if(smallest || distances[smallest] !== Infinity){
                for(const neighbor in this.adjacencyList[smallest]){
                    //find neighbouring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //calculate new distance to neighbouring node
                    let candidate = distances[smallest] + nextNode.weight;
                    if(candidate < distances[nextNode.node]){
                        //updating new smallest distance to neighbour
                        distances[nextNode.node] = candidate;
                        //updating previous - How we got to neighbour
                        previous[nextNode.node] = smallest;
                        //enqueue in the priority queue with new priority
                        node.enqueue(nextNode.node,candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}

const g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

// console.log(g.adjacencyList);

g.addEdge("A","B",4);
g.addEdge("A","C",2);
g.addEdge("B","E",3);
g.addEdge("C","D",2);
g.addEdge("C","F",4);
g.addEdge("D","E",3);
g.addEdge("D","F",1);
g.addEdge("E","F",1);

// console.log(g.adjacencyList);
console.log(g.dijkstra("C","E"));
// const q = new PriorityQueue();
// q.enqueue("A",70);
// q.enqueue("B",20);
// q.enqueue("C",100);
// q.enqueue("D",10);
// q.enqueue("E",90);
// q.enqueue("F",5);
// console.log(q.values);