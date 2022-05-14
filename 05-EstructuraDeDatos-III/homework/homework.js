'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
 BinarySearchTree.prototype.insert = function (value) {
  //izquierda
  if(this.value > value){
      if (this.left === null) this.left = new BinarySearchTree(value);
      else this.left.insert(value);
  }
  //derecha
 else if (this.value < value) {
     if (this.right === null) {
       this.right = new BinarySearchTree(value)
      } else { 
      this.right.insert(value);
      }
 }
}
 BinarySearchTree.prototype.contains = function (value) {
    if (this.value === value) {
      return true;
    } 
    if (value > this.value ) {
      if (this.right === null) return false;
      else return this.right.contains(value)      
   }     
  if (value < this.value) {
      if (this.left === null) return false;
       else return this.left.contains(value);
   }     
 }
 BinarySearchTree.prototype.size = function () {
   if (this.left === null && this.right === null) return 1;
   if (this.left === null && this.right !== null) return 1 + this.right.size();
   if (this.left !== null && this.right === null) return 1 + this.left.size()
   if (this.left !== null && this.right !== null ) return 1 + this.right.size() + this.left.size()
}
 BinarySearchTree.prototype.depthFirstForEach = function (cb, orden) {
   if (orden === "pre-order") {
    //(root, izq, der) 
     cb(this.value);
     if (this.left !== null) this.left.depthFirstForEach(cb, orden);
     if (this.right !== null) this.right.depthFirstForEach(cb, orden);
   }
   else if (orden == "post-order" ) {
     //(izq, der, root)
     if (this.left !== null) this.left.depthFirstForEach(cb, orden);
     if (this.right !== null) this.right.depthFirstForEach(cb, orden);
     cb(this.value);
   }
   else{
     //(izq, der, root)
     if (this.left !== null) this.left.depthFirstForEach(cb, orden);
     cb(this.value);
     if (this.right !== null) this.right.depthFirstForEach(cb, orden);
   }
 }
 BinarySearchTree.prototype.breadthFirstForEach = function (cb, array=[]) {
   if (this.left !== null) {
     array.push(this.left)
   }
   if (this.right !== null) {
     array.push(this.right);
   }
   cb(this.value);
   if (array.length > 0) {
     array.shift().breadthFirstForEach(cb, array)
   }
 }
 
 
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
