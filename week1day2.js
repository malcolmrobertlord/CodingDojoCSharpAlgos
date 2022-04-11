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
}

let mySll = new SLL()
console.log(mySll.isEmpty());
mySll.insertAtBack(4);
mySll.insertAtBack(4);
mySll.insertAtBack(8);
mySll.insertAtBack(4);
mySll.printToArray();
console.log(mySll.average());
