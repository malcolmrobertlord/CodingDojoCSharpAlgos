//Node class
class Node {
    constructor(val){
        this.data = val;
        this.next = null;
    }
}

//Singly Linked List class

class SLL {
    construtor(){
        this.head = null;
    }

//METHODS

    //method to check if empty
    isEmpty(){
        return this.head == null;
    }
    
    //Method to display all values
    printToArray(){
        if(this.isEmpty()){
            console.log("The SLL is empty")
        }
        else {
            var arr = [];
            var runner = this.head;
            while(runner){
                arr.push(runner.data);
                runner = runner.next;
            }
        console.log(arr)
        }
    }

    //Method to add a node to back of the list
    insertAtBack(val){
        //Check if empty
        if(this.isEmpty()){
            this.head = new Node(val)
        }
        else {
            let runner = this.head;
            while(runner.next != null){
                runner = runner.next;
            }
            runner.next = new Node(val)
        }
    }
    
    // method when given a value, insert that value as a node at the front of your singly linked list
    insertAtFront(val) {
        if(this.isEmpty()){
            this.head = new Node(val)
        }
        else {
            let newNode = new Node(value);
            newNode.next = this.head;
            this.head = newNode;
        }
        return this;
    }

    // method to remove and return the head node from your list (remember this means we need a new head)
    removeHead(){
        if(this.isEmpty()){
            return null;
        }
        else {
            let tempHead = this.head;
            this.head = this.head.next;
            return tempHead.data;
        }
    }

    // EXTRA: calculate the average of all the values in your list (ex: if you list contained the values 3, 5, 2, 7, 3, then your average should come out as 4)
    average(){
        if(this.isEmpty()){
            return "there is nothing in your list!"
        }
        else {
            let total = 0;
            let length = 0;
            let average = 0;
            let runner = this.head;
            while(runner){
                total+= runner.data;
                length++;
                runner = runner.next;
            }
            average = total/length;
            return average;
        }
    }
    // Given a value, return true or false whether that value is in your list
    //iterative method:
    containsIterative(value){
        if (this.isEmpty()){
            console.log("there is nothing in your list!");
            return false;
            
        }
        else {
            let runner = this.head;
            while (runner){
                if (runner.data = value){
                    return true;
                }
                else {
                    runner = runner.next;
                }
            }
            return false;
        }
    }
    //Recursive method:
    containsRecursive(value, node = this.head){
        if(node == null){
            return false;
        }
        else if (node.data == value){
            return true;
        }
        else {
            return this.containsRecursive(value, node.next)
        }
    }

// Remove and return the last value in your list
    removeBack(){
        if (this.isEmpty()) {
            console.log("this list is empty!")
            return this;
        }
        else if (this.head.next==null) {
            this.head = null;
            return this;
        }
        else {
            var runner = this.head;
            while (runner.next.next != null){
                runner = runner.next;
            }
        }
        runner.next = null;
        return this;
    }

    // Return (don't remove) the second to last value in your list (ex: if your list is 2, 5, 6, 3, 9, you should return 3)
    secondToLast(){
        if (this.isEmpty()){
            console.log("this list is empty!");
            return this;
        }
        //edge case if there's only one node in your list
        else if (this.head.next==null) {
            this.head = null;
            return this;
        }
        else {
            var runner = this.head;
            while (runner.next.next != null){
                runner = runner.next;
            }
            return runner.data;
        }
    }

    // Given a value, remove that value from the list and return true or false whether it was removed
    removeOneVal(val){
        if (this.isEmpty()){
            console.log("this list is empty!");
            return this;
        }
        //edge case if head is value
        else if (this.head.data === val){
            this.removeHead();
            return true;
        }
        else {
            var runner = this.head;
            while (runner.next != null){
                if (runner.next.data == val){
                    runner.next = runner.next.next;
                    return true;
                }
                else {
                    runner = runner.next;
                }
            }
            return false;
        }
    }
    // Note: how would this code look if you only wanted to remove one instance of the value? How would this code look if you wanted to remove ALL instances of the value? (ie: plan for duplicates)
    removeAllVal(val){
        if (this.isEmpty()){
            console.log("this list is empty!");
            return this;
        }
        //edge case if head is value
        else if (this.head.data === val){
            this.removeHead();
            return true;
        }
        else {
            let removed = false;
            let runner = this.head;
            while (runner.next != null){
                if (runner.next.data == val){
                    runner.next = runner.next.next;
                    removed = true;
                }
                else {
                    runner = runner.next;
                }
            }
            return removed;
        }
    }
    // EXTRA: Given ValueA and ValueB, insert a node with ValueA BEFORE the node containing ValueB (this is called a prepend) and return true or false whether it was pre-pended
    prepend(ValA, ValB){
        if (this.isEmpty()){
            console.log("this list is empty!");
            return this;
        }
        //edge case if head is value
        else if (this.head.data === ValB){
            this.insertAtFront(ValA);
            return true;
        }
        else {
            let newNode = new Node(ValA);
            let runner = this.head;
            while (runner.next != null){
                if (runner.next.data == ValB){
                    newNode.next = runner.next;
                    runner.next = newNode;
                    return true;
                }
                else {
                    runner = runner.next;
                }
            }
            return false;
        }
    }
}

let mySll = new SLL()
// console.log(mySll.isEmpty());
mySll.insertAtBack(5);
mySll.insertAtBack(14);
mySll.insertAtBack(8);
mySll.insertAtBack(14);
mySll.insertAtBack(10);
mySll.insertAtBack(14);
mySll.printToArray();

// console.log(mySll.removeAllVal(14));
// console.log(mySll.removeAllVal(9));
console.log(mySll.prepend(9,8));
mySll.printToArray();

// console.log(mySll.average());
// mySll.removeBack();
// console.log(mySll.secondToLast());
// mySll.printToArray();
