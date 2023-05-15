// 1. Breadth First Traversal for a Graph
// 2. Depth First Traversal for a Graph
// 3. Count the number of nodes at given level in a tree using BFS
// 4. Count number of trees in a forest
// 5. Detect Cycle in a Directed Graph



// 1. Breadth First Traversal for a Graph?


class Graph
    {
         
        constructor(v)
        {
            this.V = v;
            this.adj = new Array(v);
            for(let i = 0; i < v; i++)
                this.adj[i] = [];
        }
         
        addEdge(v, w)
        {
             
            this.adj[v].push(w);
        }
         
        // prints BFS traversal //
        BFS(s)
        {
            // Mark all the vertices as not visited(By defaultset as false)
          
            let visited = new Array(this.V);
            for(let i = 0; i < this.V; i++)
                visited[i] = false;
             
            // Create a queue for BFS
            let queue=[];
             
            visited[s]=true;
            queue.push(s);
             
            while(queue.length>0)
            {
                
                s = queue[0];
                
              console.log(s+" ");
                queue.shift();
                 
                this.adj[s].forEach((adjacent,i) => {
                    if(!visited[adjacent])
                    {
                        visited[adjacent]=true;
                        queue.push(adjacent);
                    }
                });
            }
        }
    }
     

    g = new Graph(4);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 2);
    g.addEdge(2, 0);
    g.addEdge(2, 3);
    g.addEdge(3, 3);
     
     
    console.log("Following is Breadth First Traversal " +
                "(starting from vertex 2)");
      g.BFS(2);




// 2. Depth First Traversal for a Graph?


class Graph
{
     
    constructor(v)
    {
        this.V = v;
        this.adj = new Array(v);
        for(let i = 0; i < v; i++)
            this.adj[i] = [];
    }
     
    // Function to add an edge into the graph //
    addEdge(v, w)
    {
         
        // Add w to v's list. //
        this.adj[v].push(w);
    }
     
    // A function used by DFS //
    DFSUtil(v, visited)
    {
         
      visited[v] = true;
       console.log(v + " ");
  
     
        for(let i of this.adj[v].values())
        {
            let n = i
            if (!visited[n])
                this.DFSUtil(n, visited);
        }
    }
     
   
    DFS(v)
    {
        
        let visited = new Array(this.V);
        for(let i = 0; i < this.V; i++)
            visited[i] = false;
  
        this.DFSUtil(v, visited);
    }
}
 

g = new Graph(4);
  
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);
 
  console.log("Following is Depth First Traversal " +
               "(starting from vertex 2)");
 
  g.DFS(2);

//----------------------------------------------------------------------------------------------------------


// 3. Count the number of nodes at given level in a tree using BFS?

let V;
 
    let adj=new Array(1001);
    for(let i=0;i<adj.length;i++)
    {
        adj[i]=[];
    }
     
    function addEdge(v,w)
    {
    // Add w to v’s list.
    adj[v].push(w);
  
    // Add v to w's list.
    adj[w].push(v);
    }
     
    function BFS(s,l)
    {
        V=100;
    let visited = new Array(V);
    let level = new Array(V);
  
    for (let i = 0; i < V; i++)
    {
      visited[i] = false;
      level[i] = 0;
    }
  
    // Create a queue for BFS
    let queue = [];

    visited[s] = true;
    queue.push(s);
    level[s] = 0;
    let count = 0;
    while (queue.length!=0)
    {
  
      s = queue[0];
      queue.shift();
  
      let list = adj[s];

      for (let i=0;i<list.length;i++)
      {
        if (!visited[list[i]])
        {
          visited[list[i]] = true;
          level[list[i]] = level[s] + 1;
          queue.push(list[i]);
        }
      }
  
      count = 0;
      for (let i = 0; i < V; i++)
        if (level[i] == l)
          count++;
    }
    return count;
  }

 
// Create a graph //
    
addEdge(0, 1)
addEdge(0, 2)
addEdge(1, 3)
addEdge(2, 4)
addEdge(2, 5)
 
let level = 2;
console.log(" The number of nodes at given level in a tree is -> " + BFS(0, level));


//------------------------------------------------------------------------------------------------------------------------



// 4. Count number of trees in a forest?


let N;

let adjacent;

function Graph( v)
{
    N = v;
    adjacent = Array.from(Array(v), ()=>Array());
}
function addEdge(v, w)
{
    adjacent[v].push(w);
}

// A function used by DFS //
function DFSUtil(v, visited)
{
  
    visited[v] = true;
       
    for(let i of adjacent[v])
    {
        let n = i;
        if (!visited[n])
        {
            DFSUtil(n, visited);
        }
    }
}

function countTrees()

{
    let visited = Array(N).fill(false);
    let res = 0;
    // to print DFS traversal starting from
  
    for(let i = 0; i < N; ++i)
    {
        if (visited[i] == false)
        {
            DFSUtil(i, visited);
            res ++;
        }
    }
    return res;
}
 
Graph(5);
addEdge(0, 1);
addEdge(0, 2);
addEdge(3, 4);

console.log(countTrees());



// 5. Detect Cycle in a Directed Graph?


let C;
let Adj=[];
function Graph(v)
{
    C=v;
    for (let i = 0; i < C; i++)
        Adj.push([]);
}
 

function isCyclicUtil(i,visited,recStack)
{
   
        if (recStack[i])
            return true;
  
        if (visited[i])
            return false;
              
        visited[i] = true;
  
        recStack[i] = true;
        let children = Adj[i];
          
        for (let c=0;c< children.length;c++)
            if (isCyclicUtil(children, visited, recStack))
                return true;
                  
        recStack[i] = false;
  
        return false;
}
 
function addEdge(source,dest)
{
    Adj .push(dest);
}
 

function isCyclic()
{
    
        let visited = new Array(C);
        let recStack = new Array(C);
        for(let i=0;i<C;i++)
        {
            visited[i]=false;
            recStack[i]=false;
        }
         
        for (let i = 0; i < C; i++)
            if (isCyclicUtil(i, visited, recStack))
                return true;
  
        return false;
}
 

Graph(4);
addEdge(0, 1);
addEdge(0, 2);
addEdge(1, 2);
addEdge(2, 0);
addEdge(2, 3);
addEdge(3, 3);
 
if(isCyclic())
    console.log("Graph contains cycle");
else
    console.log("Graph doesn't " + "contain cycle");