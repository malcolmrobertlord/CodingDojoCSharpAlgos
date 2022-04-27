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

class Stack {
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
