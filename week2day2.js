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
        if (this.isEmpty()){
            console.log("Your tree is empty!");
            return this;
        }
        var runner = this.root;
        while (runner.right != null){
            runner = runner.right;
        }
        return runner.data;
    }

    // Contains
    // Given a value, return true or false whether that value is contained in the tree
    contains(val){
        if (this.isEmpty()){
            console.log("Your tree is empty!");
            return this;
        }
        let runner = this.root;
        while (runner){
            if (runner.data == val){
                return true;
            }
            else if (val > runner.data){
                runner = runner.right;
            }
            else if (val < runner.data){
                runner = runner.left
            }
        }
        return false;
    }

    // Contains recursive
    // Now that you've solved contains iteratively, solve it again but with recursion
    containsRecursive(val, node = this.root){
        if (this.isEmpty()){
            console.log("Your tree is empty!");
            return this;
        }
        let runner = node;
        while (runner){
            if (runner.data === val){
                return true;
            }
            else if (val > runner.data){
                runner = runner.right;
                this.containsRecursive(val, runner);
            }
            else if (val < runner.data){
                runner = runner.left
            }
        }
        return false;
    }
    
    // Range
    // Calculate the range of the values in your tree by subtracting the max value from the min value
    range(){
        let min = this.min();
        let max = this.max();
        console.log(`Your minimum is ${min}`);
        console.log(`Your maximum is ${max}`);
        return max-min;
    }
}

let myBST = new BST();
let nodeA = new Node(6);
myBST.root = nodeA;
// console.log(myBST.isEmpty());
myBST.root.left = new Node(4);
myBST.root.left.left = new Node(3);
myBST.root.left.left.left = new Node(2);
myBST.root.left.left.left.left = new Node(1);

myBST.root.right = new Node(10);
myBST.root.right.right = new Node(12);
myBST.root.right.right.right = new Node(16);

console.log(myBST.contains(10));
console.log(myBST.contains(19));
console.log(myBST.containsRecursive(10));
console.log(myBST.containsRecursive(19));

myBST.range()
// console.log(myBST.min());
// console.log(myBST.max());
