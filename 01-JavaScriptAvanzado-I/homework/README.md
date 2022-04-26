
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
//Las variables declaradas se limitan al contexto de ejecución en el cual son declaradas.
//Las variables declaradas son creadas antes de ejecutar cualquier otro código.
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); // esto retorna 10
  console.log(a); // esto retorna 8
  var f = function(a, b, c) {
    b = a; 
    console.log(b); // esto retorna 8
    b = c; 
    var x = 5;
  }
  f(a,b,c);
  console.log(b);// esto retorna 9
}
c(8,9,10);
console.log(b); // esto retorna 10
console.log(x); // esto retorna 1
```

```javascript
console.log(bar);// esto retorna underfined
console.log(baz);// esto retorna que baz no est defindo
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);// esto retorna "Franco"
```

```javascript
var instructor = "Tony";
console.log(instructor);// esto retorna "tony"
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);// esto retorna "franco"
   }
})();
console.log(instructor);//esto retorna "tony"
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // esto retorna "The Flash"
    console.log(pm);// esto "Reverse Flash";
}
console.log(instructor);// retorna "The Flash"
console.log(pm);//retorna "Franco"
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 3
"2" * "3" // 23
4 + 5 + "px"// 9px
"$" + 4 + 5 //$9
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // error
{}[0]//[0]
parseInt("09")// 9
5 && 2 // 2
2 && 5// 5
5 || 0 //5
0 || 5//5
[3]+[3]-[10]//23
3>2>1// false
[] == ![]//true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);// retorna underfiend
   console.log(foo());// retorna 2, porque sube la fuciones y esa funcion retorna 2;

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;// retorna 'Meow Mix';
}

getFood(false);// retorna underfiend
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());//retorna 'Aurelio De Rosa'

var test = obj.prop.getFullname;

console.log(test());// retorna 'juan perez'
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();// primero 1, despues 4, despues 3 y ultimo 2
```
