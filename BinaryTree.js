
var BinaryTree = function(){
    // Constructor
};

// Node struct:
var nodeTemplate =  {
      left: null
    , right: null
    , data:  null

};




// Construct a simple binary tree:


/**
 * A simple way to add a new node to a given target node:
 * @param {type} node,
 * @param {type} newData,
 * @param {type} targetBranch,
 * @return {Null}
 */
var addNode = function( node, newData, targetBranch) {
    var newNode = {
            data: newData
        , right: null
        , left: null
    };

    node[targetBranch] = newNode;
    return newNode;
}


var Tree = {
    left: null
    , right: null
};

// Left Branch
var coolChild = addNode(Tree, "cool", "left");
var anotherChild  = addNode(coolChild , "another", "right");


// Right
var notCoolChild = addNode(Tree, "not cool", "right");
var notCoolChild2 = addNode(notCoolChild, "not cool 2", "right");
var notCoolChild3 = addNode(notCoolChild2, "not cool 3", "right");


// Breadth first search:

var Stack = [];


console.log("tree");
console.log(Tree);




// Depth first search:
//  Using a stack:
var find = function(currentNode, dataTarget) {
    // First we add all children to stack if we haven't seen this already:
    if (currentNode.visited === false ) {
        currentNode.visited = true;
        // We havne't seen this node so we need to mark it as visited and
        // add our stack:
        if (currentNode.data === dataTarget) {
            return currentNode;
        }

        Stack.push(currentNode.left);
        Stack.push(currentNode.right);

    }

    if (Stack.length === 0) {
        return null;
    }

    return find(Stack.pop(), dataTarget);
};



console.log( "anotehr", find(Tree, "another"));
console.log( "not cool 3", find(Tree, "not cool 3"));
console.log( "not cool x", find(Tree, "not cool x"));





