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
       while(current.next  && current.next.data != data){
           current = current.next;
       }
       if (current.next.data === data) {
        return current;
        } else {
        return null;
       }
   }
};

var list1 = new List()
list1.add("a")  
list1.add("b")
list1.add("c")
list1.add("d")
list1.findPrevious("c")

console.log(list1)