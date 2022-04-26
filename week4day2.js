class Queue {
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
}

var myQArr = new Queue();
myQArr.enqueue(5);
myQArr.enqueue(7);
myQArr.enqueue(12);
console.log(myQArr.enqueue(3));
console.log(myQArr);
console.log(myQArr.deQ());
console.log(myQArr);


//Queue with Linked list

class QNode {
    constructor(data) {
        this.data = data; 
        this.next = null; 
    }
}

class QSLL {
    constructor() {
        this.head = null;
        this.length = 0;
    }


    // Enqueue - add an item and return the new size of the queue
    enqueue(val) {
        var newNode = new QNode(val);
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
            var temp = this.head;
            this.head = null;
            this.length--;
            return temp;
        }
        else {
            var temp = this.head;
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
        return this.head;
    }
}

// var myQSLL = new QSLL();
// myQSLL.enqueue(5);
// myQSLL.enqueue(7);
// myQSLL.enqueue(12);
// // console.log(myQSLL.enqueue(3));
// console.log(myQSLL.dequeue());
// console.log(myQSLL);

