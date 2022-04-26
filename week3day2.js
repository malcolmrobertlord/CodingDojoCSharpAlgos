// Heaps

class MinHeap {
    constructor() {
        // This is all we need to start our heap
        // We need null at 0 so our math works out
        this.heap = [null];
    }

    size() {
        return this.heap.length - 1;
    }

    top() {
        // if(this.size() > 0){
        //     return this.heap[1];
        // } else {
        //     return null;
        // }

        return this.size() > 0 ? this.heap[1] : null; 
    }

    // Insert value
    insert(num) {
        this.heap.push(num);
        this.shiftUp();
        return this.size();
    }

    shiftUp() {
        // let's keep track of where our value is
        var idxOfValue = this.heap.length - 1;

        // Good to track if we have encountered idx 0 or are close to it
        while(idxOfValue > 1) {
            // We need to look at the parent
            var parentIdx = Math.floor(idxOfValue/2);
            // And ask "are you larger than me?"
            if(this.heap[idxOfValue] < this.heap[parentIdx]) {
                // If it is, we do a swap
                var temp = this.heap[idxOfValue];
                this.heap[idxOfValue] = this.heap[parentIdx];
                this.heap[parentIdx] = temp;
                // We need to update the idxOfValue now
                idxOfValue = parentIdx;
            } else {
                // If it's not, we break out
                break;
            }
        }
    }

    // Extract
    // Extract the min value from the heap and reorder the heap to maintain the order so the next min can be extracted. If the heap is empty, return null.
    extract(){
        if(this.size() === 0){
            return null;
        }
        const min = this.heap[1]
        if(this.size() === 1){
            this.heap.pop();
            return min;
        }
        this.heap[1] = this.heap.pop();
        this.shiftDown();
        return min;
    }
    shiftDown() {
        //take down the top value and shift it down until its in the proper place (both children are larger than it)
        //we need to keep track of the index where our shifted value is located
        let indexToShiftDown = 1;
        //track left and right children
        let leftIndex = indexToShiftDown * 2;
        //check if there is a left to look at
        while(leftIndex < this.heap.length){
            //store right index
            let rightIndex = leftIndex + 1;
            // check which is smallest:
            let indexOfSmallest = leftIndex;
            //should i replace with right index? (exists and is smaller)
            if(rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[leftIndex]){
                indexOfSmallest = rightIndex;
            }
            //see if a swap needs to happen (is parent larger than smallest child)
            if (this.heap[indexToShiftDown] <= this.heap[indexOfSmallest]){
                //this means parent is in right place and no action needs to be taken
                console.log("the value to shift down has found its home, breaking out");
                break;
            }
            //parent value is LARGER and needs to be swapped
            console.log("haven't found home yet, swapping with smaller value");
            //time to swap values
            let temp = this.heap[indexToShiftDown];
            this.heap[indexToShiftDown] = this.heap[indexOfSmallest];
            this.heap[indexOfSmallest] = temp;
            //our value we are moving has shifted, so keep track of that
            indexToShiftDown = indexOfSmallest;
            //need to reset our left
            leftIndex = indexToShiftDown * 2
        }
    }

}

var myHeap = new MinHeap();
console.log(myHeap.size());
myHeap.insert(8);
myHeap.insert(3);
myHeap.insert(9);
myHeap.insert(1);
console.log(myHeap.size());
console.log(myHeap.heap);