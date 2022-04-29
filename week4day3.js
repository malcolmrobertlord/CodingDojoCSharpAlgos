//////STACKS///////

//Stack with SLL

class StackNode{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListStack {
    constructor (){
        this.head = null;
    }
    //Add Val
    push(val) {
        var newNode = new StackNode(val);
        if(this.isEmpty()){
            this.head = newNode;
            return this.size();
        } else {
            var runner = this.head;
            while(runner.next){
                runner = runner.next;
            }
            runner.next = newNode;
            return this.size();
        }
        
    }
    //Remove Val
    pop(){
        if(this.isEmpty){
            return null;
        } else if(this.head.next ==null){
            var temp = this.head;
            this.head = null;
            return temp.data;
        }else{
            var runner= this.head;
            while(runner.next){  
                if (runner.next.next ==null){
                    temp = runner.next;
                    runner.next = null;
                    return temp.data;
                }
            }
        }
    }

    //Top Value
    topValue(){
        if(this.isEmpty()){
            return null;
        } else{
            var runner = this.head;
            while(runner.next){
                runner = runner.next;
            }
            return runner.data;
        }
    }
    //IsEmpty
    isEmpty(){
        return this.head===null;
    }

    //Size
    size(){
        var runner = this.head;
        var count = 0;
        while (runner != null){
            count ++
        }
        console.log("The size of the list is" + count);
        return count;
    }

}

class StackArr {
    //Stacks--LIFO 
    constructor(){
        this.items = [];
    }

    //Add Value
    push(item) {
        this.items.push(item);
        return this.size();
    }
    //Remove Value
    pop(){
        this.items.pop(item);
        return this.size();
    }
    //Look at top value
    topValue() {
        return this.items[this.items.length -1];
    }
    //is empty
    isEmpty(){
        return this.items.length ===0;
    }
    //Size
    size(){
        return this.items.length;
    }

}

//////QUEUES///////
class QueueArr {
    constructor(){
        this.items = [];
    }

    size(){
        return this.items.length;
    }

    // Enqueue - add an item and return the new size of the queue
    enqueue(val) {
        this.items.push(val);
        return this.size();
    }

    // Dequeue - remove and return the first item
    dequeue() {
        return this.items.shift();
    }

    

    //Dequeue without shift - remove and return the first item
    deQ(){
        if (this.isEmpty()){
            return null;
        }
        var temp = this.items[0];
        for(let i = 0; i < this.items.length - 1; i++){
            this.items[i] = this.items[i+1];
        }
        this.items.pop();
        return temp;
    }
    // IsEmpty - return true or false whether the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Front - return the first item without removing it
    front() {
        return this.items[0];
    }

    // Sum of Halves Equal
    // Return true or false whether the sum of the front half of your queue is equal to the sum of the left half of your queue - as before, try to limit yourself to only built in methods within your queue class

    SumOfHalves() {
        var LSum = 0;
        var RSum = 0;
        if (this.isEmpty()){
            return null;
        }
        else {
            if (this.items.length % 2 == 0){
                var middle = this.items.length/2;
            }
            else {
                var middle = Math.ceil(this.items.length/2) - 1;
            }
            for (var i = 0; i < this.items.length; i++){
                if(i < middle){
                    var temp = this.dequeue();
                    LSum += temp;
                    console.log("the left sum is" + LSum)
                    this.enqueue(temp);
                }
                else if (i == middle && this.items.length % 2 != 0){
                    var temp = this.dequeue();
                    LSum += temp;
                    RSum += temp;
                    console.log("in the else if")
                    console.log("the left sum is" + LSum)
                    console.log("the right sum is" + RSum)
                    this.enqueue(temp);
                }
                else {
                    var temp = this.dequeue();
                    RSum += temp;
                    console.log("the right sum is" + RSum)
                    this.enqueue(temp);
                }
            }
        }
        console.log(LSum)
        console.log(RSum)
        if (LSum === RSum){
            return true;
        }
        else {
            return false;
        }
    }
}

var myQArr = new QueueArr();
myQArr.enqueue(5);
myQArr.enqueue(7);
myQArr.enqueue(4);
myQArr.enqueue(2);
myQArr.enqueue(0);
console.log(myQArr.SumOfHalves())


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
    // Is queue a palindrome, also using only built in methods
    isPalindrome() {
        if(this.isEmpty()){
            return false;
        }

        var tempStack = new LinkedListStack();

        for (var i = 0; i < this.length; i++) {
            let temp = this.dequeue();
            tempStack.push(temp);
            this.enqueue(temp);
        }
        
        console.log(tempStack);

        for (var i = 0; i < this.length; i++) {
            let temp = this.front();
            let temp2 = tempStack.peek();
            console.log(temp, temp2);

            if( temp === temp2 ){
            this.enqueue(this.dequeue());
            tempStack.pop();
            } else {
                console.log("ForLoop False Statement");
                return false;
            }
        }
        return true;
    }

    
}

// Two Stack Queue
    // This one is a proof on concept: can you get the functionality of a queue using two stacks? Use your knowledge of queues and stacks to create a class called TwoStackQueue and write the enqueue and dequeue methods

class TwoStackQueue {
    constructor() {
        this.stack1 = new StackArr();
        this.stack2 = new StackArr();
    }

    enqueue(val) {
        this.stack2 = [val];
        for(let i = 0; i < this.stack1.length - 1; i++){
            this.stack2.push(this.stack1[i]);
        }
        this.stack1 = this.stack2;
        return this.stack1;
    }

    dequeue() {
        // your code here
    }
}



var QSLL1 = new QueueSLL();
QSLL1.enqueue(12);
QSLL1.enqueue(5);
QSLL1.enqueue(12);
QSLL1.enqueue(16);
QSLL1.enqueue(11);

// console.log(QSLL1.length);

var QSLL2 = new QueueSLL();
QSLL2.enqueue(5);
QSLL2.enqueue(7);
QSLL2.enqueue(12);
// QSLL2.enqueue(15);


// console.log(CompareQueues(QSLL1, QSLL2));
// console.log(QSLL1.isPalindrome());