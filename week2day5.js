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

    // Given a value, insert it into the correct location in the binary search tree
    insert(val){
        let newNode = new Node(val);
        if (this.isEmpty()){
            this.root = newNode;
            return this;
        }
        let runner = this.root;
        while (runner){
            // console.log(runner.data);
            if(val <= runner.data){
                if (runner.left === null){
                    runner.left = newNode;
                    return this;
                }
                else {
                    runner = runner.left;
                }
            }
            else if (val > runner.data){
                if (runner.right === null){
                    runner.right = newNode;
                    return this;
                }
                else {
                    runner = runner.right;
                }
            }
        }
    }

// Now that you've solved insert iteratively, write it recursively
    insertRecursive(val, runner = this.root){
        if (this.isEmpty()){
            this.root = newNode;
            return this;
        }
        while (runner){
            console.log(runner.data);
            console.log("this is runner left" + runner.left)
            console.log("this is runner right" + runner.right)
            if(val <= runner.data){
                if (runner.left === null){
                    console.log("In the runner left if statement")
                    let newNode = new Node(val);
                    runner.left = newNode;
                    return this;
                }
                else {
                    return this.insertRecursive(val, runner = runner.left);
                }
            }
            else if (val > runner.data){
                if (runner.right === null){
                    console.log("In the runner right if statement")
                    let newNode = new Node(val);
                    runner.right = newNode;
                    return this;
                }
                else {
                    return this.insertRecursive(val, runner = runner.right);
                }
            }
        }
    }
    toArrPreorder(node = this.root, vals = []) {
        if (node) {
            vals.push(node.data);
            this.toArrPreorder(node.left, vals);
            this.toArrPreorder(node.right, vals);
        }
        return vals;
    }
    
    toArrInorder(node = this.root, vals = []) {
        if (node) {
            this.toArrInorder(node.left, vals);
            vals.push(node.data);
            this.toArrInorder(node.right, vals);
        }
        return vals;
    }
    
    toArrPostorder(node = this.root, vals = []) {
        if (node) {
            this.toArrPostorder(node.left, vals);
            this.toArrPostorder(node.right, vals);
            vals.push(node.data);
        }
        return vals;
    }

    // Size
    // Return the total number of nodes in the tree
    size(node = this.root, count = 0){
        if (node){
            count++
            // console.log(count);
            count+= this.size(node.left) + this.size(node.right);
        }
        return count;
        // return this.toArrPreorder().length;
    }

// Height
// Return the number of nodes that make up the longest branch in a tree
    height(node = this.root){
        if(!node){
            return 0;
        }
        return 1 + Math.max(this.height(node.left), this.height(node.right));
    }
// isFull
// Return true or false whether every node has either 0 or 2 children
    isFull(){
        // your code here
    }
}

let myBST = new BST();
let nodeA = new Node(6);
myBST.root = nodeA;
// console.log(myBST.isEmpty());
myBST.insert(100);
myBST.insert(12);
myBST.insert(6);
myBST.insert(3);
myBST.insert(1);
myBST.insert(23);
myBST.insert(17);
// console.log(myBST.size());
console.log(myBST.height());


// console.log(myBST.root.right.right.right.right.data)


// myBST.insertRecursive(100);
// console.log(myBST.root.right.right.right.right.data)

// console.log(myBST.contains(10));
// console.log(myBST.contains(19));
// console.log(myBST.containsRecursive(10));
// console.log(myBST.containsRecursive(19));

// myBST.range()
// console.log(myBST.min());
// console.log(myBST.max());
