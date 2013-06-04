function LinkedList(){
  this._length = 0;
  this._head = null;
}

LinkedList.prototype = {
    
    //add new node to the list with it's data, 
    //function only takes in data and creating the node is handled internally
    addNode: function(data){
        //create new node object
        var node = {
            data: data,
            next: null
        },
        //create variable so we can traverse through the structure
        //kind of like a pointer
        current;
      //if the head of the LinkedList is null
      //then the list is empty. 
      if(this._head == null){
        //set the head to the new node
            this._head = node;
      }else{
            //set our "pointer" to the head of the list so we can traverse down
            current = this._head;
            //start traversing by checking if our current.next property is not null
            while(current.next != null){
                //set "pointer" to the next node object
                current = current.next;
            }
            //upon loop completion we have arrive at the end of the list 
            //so we set "pointer" current.next equal to new node
            current.next = node;
      }
        //increase the length of Linked List
        this._length++;
    },
    //this function gets node at specific index
    getNode: function(index){

        //check for out-of-bounds values
        if (index > -1 && index < this._length){
            //set our "pointer" to the first node
            var current = this._head,
            //set up our loop
            i = 0;
            //as counter is going through the structure and has not reached the index specified, 
            //we update the current location
            while(i < index){
                current = current.next;
                i+=1;
            }
            //after reach the index we return the node data
            return current.data;
        } else {
            //if out of bounds we return null
            return null;
        }
    },
    removeNode: function(index){

        //check for out-of-bounds values
        if (index > -1 && index < this._length){

            var current = this._head,
                previous,
                i = 0;

            //special case: removing first item
            if (index === 0){
                this._head = current.next;
            } else {

                //find the right location
                while(i < index){
                    previous = current;
                    current = current.next;
                    i+=1;
                }

                //skip over the item to remove
                previous.next = current.next;
            }

            //decrement the length
            this._length--;

            //return the value
            return current.data;            

        } else {
            return null;
        }

    }
};
