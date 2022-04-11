//node class
class Node {
    constructor(val){
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

//create binary search tree class
class BST {
    constructor(){
        this.root = null;
    }

    //Methods:

    isEmpty(){
        //returns true if empty, returns false if not null
        return this.root == null;
    }

    min(){
        if (this.isEmpty()){
            console.log("Your tree is empty!");
            return this;
        }
        //start at top of tree, loop through and go to bottom left until pointing to null
        var runner = this.root;
        while(runner.left != null){
            runner = runner.left;
        }
        return runner.data;
    }

    max(){
        var runner = this.root;
        while (runner.right != null){
            runner = runner.right;
        }
        return runner.data;
    }
}

let myBST = new BST();
let nodeA = new Node(6);
myBST.root = nodeA;
console.log(myBST.isEmpty());
myBST.root.left = new Node(4);
myBST.root.left.left = new Node(3);
myBST.root.left.left.left = new Node(2);
myBST.root.left.left.left.left = new Node(1);

myBST.root.right = new Node(10);
myBST.root.right.right = new Node(12);
myBST.root.right.right.right = new Node(16);

console.log(myBST.min());
console.log(myBST.max());
