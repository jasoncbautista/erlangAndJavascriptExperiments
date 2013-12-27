
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
    return node;
}


var Tree = {
    left: null
    , right: null
};

// Left Branch
var coolChild = addNode(Tree, "cool", "left");
var anotherChild  = addNode(coolChild , "another", "right");


// Right
//

/*
var notCoolChild = addNode(Tree, "not cool", "right");
var notCoolChild2 = addNode(notCoolChild, "not cool 2", "right");
var notCoolChild3 = addNode(notCoolChild2, "not cool 3", "right");


// Breadth first search:

var Stack = [];


*/

console.log("tree");
console.log(Tree);

