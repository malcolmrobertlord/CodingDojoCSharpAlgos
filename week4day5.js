//Queue with Linked list

class QueueNode {
    constructor(data) {
        this.data = data; 
        this.next = null; 
    }
}

class QueueSLL {
    constructor() {
        this.head = null;
        this.length = 0;
    }


    // Enqueue - add an item and return the new size of the queue
    enqueue(val) {
        var newNode = new QueueNode(val);
        if (this.isEmpty()){
            this.head = newNode;
        }
        else {
            var runner = this.head;
            while(runner.next){
                runner = runner.next;
            }
            runner.next = newNode;
        }
        this.length++;
        return this.length;
    }

    // Dequeue - remove and return the first item
    dequeue() {
        if (this.isEmpty()){
            return null;
        }
        else if (this.head.next === null){
            var temp = this.head.data;
            this.head = null;
            this.length--;
            return temp;
        }
        else {
            var temp = this.head.data;
            this.head = this.head.next;
            this.length--;
            return temp;
        }
    }

    // IsEmpty - return true or false whether the queue is empty
    isEmpty() {
        return this.head === null;
    }

    // Front - return the first item without removing it
    front() {
        return this.head.data;
    }

    compare(Q2) {
        if(this.size() != Q2.size()){
            console.log("If False Statement");
            return false;
        }
        for (var i = 0; i < this.length; i++) {
            var val1 = this.front();
            var val2 = Q2.front();
            if(val1 === val2){
                this.enqueue(this.dequeue());
                Q2.enqueue(Q2.dequeue());
            } else {
                console.log("ForLoop False Statement");
                return false;
            }
        }
        return true;
    }
}

//Priority queue
// Use the new classes priorityNode and priorityQueue to create an enqueue method that takes priority value into consideration to properly place the item within the list

class PriNode {
    constructor(value, pri) {
        this.data = value;
        this.next = null;
        this.priority = pri;
    }
}

class PriQueue {
    constructor() {
        this.head = null;
    }

    enqueue(val, pri) {
        let newNode = new PriNode(val, pri)
        if (this.head === null){
            this.head = newNode;
            return this;
        }
        else {
            if (newNode.priority < this.head.priority){
                newNode.next = this.head;
                this.head = newNode;
                return this;
            }
            let runner = this.head;
            while (runner.next){
                if(newNode.priority <= runner.next.priority){
                    newNode.next = runner.next;
                    runner.next = newNode;
                    return this;
                }
                else {
                    runner = runner.next;
                }
            }
            runner.next = newNode;
            return this;
        }
    }
    //Method to display all values
    printToArray(){
        if(this.head === null){
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
}

myPriQ = new PriQueue();
myPriQ.printToArray();
myPriQ.enqueue(5,4);
myPriQ.enqueue(24,2);
myPriQ.enqueue(6,6);
myPriQ.enqueue(9,5);
myPriQ.enqueue(20,4);
myPriQ.printToArray();
// console.log(myPriQ);
