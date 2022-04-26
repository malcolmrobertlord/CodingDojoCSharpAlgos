//Node class
class Node {
    constructor(val){
        this.data = val;
        this.next = null;
        this.previous = null;
    }
}

//Doubly Linked List class

class DLL {
    constructor(){
        this.head = null;
        this.tail = null;
    }

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
    // Insert at Front
    // Insert a given value to the front of the doubly linked list
    InsertAtFront(val) {
        var newNode = new Node(val);
        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        else {
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
            return this;
        }
    }

    // Insert at Back
    // Insert a given value to the back of the doubly linked list
    InsertAtBack(val) {
        var newNode = new Node(val);
        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        else {
            let runner = this.head;
            while(runner.next != null){
                runner = runner.next;
            }
            runner.next = newNode;
            newNode.previous = runner;
            this.tail = newNode;
            return this;
        }
    }

    // Remove Middle Node
    // Remove the node in the middle of your doubly linked list
    RemoveMiddle() {
        if(this.isEmpty()){
            console.log("there is nothing in your list!");
            return this;
        }

        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
            return this;
        }
        if(this.head.next === this.tail){
            this.head.next = null;
            this.tail = null;
            return this;
        }
        var runner = this.head;
        var count = 1;
        while(runner.next != null){
            count++;
            runner = runner.next;
        }
        // console.log(count)
        var middle = Math.ceil(count/2)
        console.log(middle);
        var runner2 = this.head;
        for(let i = 1; i<middle; i++){
            runner2 = runner2.next;
        }
        runner2.previous.next = runner2.next;
        runner2.next.previous = runner2.previous;
        return this;
    }

}

myDLL = new DLL;

myDLL.InsertAtFront(5);
myDLL.InsertAtFront(8);
// myDLL.InsertAtFront(2);
// myDLL.InsertAtBack(24);
// myDLL.InsertAtBack(32);
myDLL.printToArray();
myDLL.RemoveMiddle();
myDLL.printToArray();