class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class List {
    constructor() {
        this._length = 0;
        this.head = null;
    }
    add(data) {
        var node = new Node(data), current = this.head;
        // Si está vacia
        if (!current) {
            this.head = node;
            this._length++;
            return node;
        }
        // Si no esta vacia, recorro hasta encontrar el último
        while (current.next) {
            current = current.next;
        }
        current.next = node;
        this._length++;
        return node;
   }
   findPrevious(data){
       let current = this.head;
       while(current.next  && current.next.data !== data){
           current = current.next;
       }
       if (current.next && current.next.data === data) {
        return current;
        } else {
        return null;
       }
   }
   remove(data){
     let prevNode = this.findPrevious(data);
     console.log("prevnode", prevNode);
     if(!prevNode && this.head.data === data){
         this.head = this.head.next;
         return null;
     }
     if(!prevNode && this.head.data !== data){
          return null;
     }
     let toRemove = prevNode.next;
     let afterNode = toRemove.next;
     toRemove.next = null;
     prevNode.next = afterNode
   }
   log_nodes(){
        let current = this.head, count = 1;
        while (current.next) {
            console.log(count, current.data)
            current = current.next;
            count = count + 1
        }
        console.log(count, current.data)

    }
};

var list1 = new List()
list1.add("a")  
list1.add("b")
list1.add("c")
list1.add("d")
console.log(list1.findPrevious("a"))
list1.remove("e")
list1.log_nodes()