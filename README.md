# JS_REACT
```
Banu Prakash C
Full Stack Architect,
Co-founder & CEO Lucida Technologies Pvt Ltd.,
Corporate Trainer & Consultant,

Emails: banuprakashc@yahoo.co.in; banuprakash.cr@gmail.com

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/JS_REACT

Softwares Required:
1) NodeJS Latest LTS [ https://nodejs.org/en/download ]
2) Visual Studio Code. [ https://code.visualstudio.com/download ]
3) Chrome Web Browser [https://www.google.com/chrome/ ]

Manage different versions o NodeJS:
https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/

```

node --version

JavaScript and Latest version features of JS.
Introduction to DOM and event handling.
Introduction to NodeJS and build tool
React JS and State management

------------------------
JavaScript: Scripting language, loosely typed and dynamic language. It's also event driven language

JavaScript is interpreted by JavaScript engines.
V8 in Chrome and NodeJS, 
SpiderMonkey in Firefox,  
JavaScriptCore in Safari.
Other engines: Nashorn, Chakra, Continnum, ...

Most of these engines are developed using C/C++. Nashorn is developed using Java

Basically in JavaScript we have data types like number, string, boolean, object, function, undefined,... But as a programmer we can't declare a member as specific type.

Based on literal values, engines treats the member as a specific type.
var age = 24;
age = "Twenty Five"; // valid

var name = "Roger"; // engine treats this as string type
name.toUpperCase();

name = 100; // engine start treating this as number type
name++;

===============================

Creation and Execution Context.

```
    var g = 100;
    function doTask(x, y) {
        var result;
        if(x > 10) {
            result = x + y;
            p = x++;
        }
        z = 50;
        console.log(g, x, y, result);
        var p;
        return result;
    }

    var v1 = doTask(2,4);
    var v2 = doTask(50, 20);
```

Note: always use below line on top of JavaScript file:
'use strict'

Above line prevents:
1) implicit "this" passing on to the function
2) Global Hoisting is prevented

================================

Understanding Callbacks, Ticks, event loop, WebApi and Stack

WebApi: provides Threads for Timers, Promises, AnimationFrames, ...
WebApi is provided by Browsers, not a part of Core JavaScript library.
In nodeJS WebApi alternate is libuv

```
    Default return type of a function is undefined
    function add(x, y) {
        console.log(x + y);
    }
    let result = add(4,5); // value of result is undefined

    function add(x, y) {
        console.log(this)
        return x + y;
    }
    let result = add(4,5); // 9

    Semi-colon insertion:
    function add(x, y) {
        return 
            x + y; // unreachable code
    }
    let result = add(4,5); // undefined

    return is a valid token and returns undefined
    the line x + y; is not reachable
```
every function is an Object of Function type.

```
var subtract = new Function("x", "y", "return x - y");
subtract(45,1);

```

OOP and Functional style of programming.

Object Oriented Programming wrt JavaScript
Different ways of creating objects:
1) Rarely used 
var obj = new Object();
obj.x = 10;
obj.y = 45;

2) Function Constructor Pattern

2.1) Object owned instance methods
```
    // functional constructor
    function Product(id, name) {
        this.id = id;
        this.name = name;
        // methods which will be allocated for every object
        this.getName = function() {
            return this.name;
        }

        this.setName = fuction(n) {
            this.name = n;
        }
    }

    var p1 = new Product(13, 'Sony Bravia');
    var p2 = new Product(62, 'LG Joy');
    p1.getName();
    p1.setName("Sony OLED");

```

2.2) class owned instance methods

```
    // functional constructor
    function Product(id, name) {
        this.id = id;
        this.name = name;
    }

     // methods which will be allocated only for one prototype
        Product.prototype.getName = function() {
            return this.name;
        }

       Product.prototype.setName = fuction(n) {
            this.name = n;
        }
    var p1 = new Product(13, 'Sony Bravia');
    var p2 = new Product(62, 'LG Joy');
    p1.getName();
    p1.setName("Sony OLED");

```

https://www.patterns.dev/
Addy Osmani

3) JSON: JavaScript Object notation --> Jagged Array --> Singleton object
Good as data transfer object; Backend <---> FrontEnd
var obj = {};
Keys is a string, value can be number, string, boolean, undefined, null, object, function

```
var product = {
    "id": 52,
    "title": "Wacom",
     "getTitle": function() {
        return this.title;
     }
}
console.log(product.title); // Wacom
console.log(product.getTitle()); // Wacom

var ref = product.getTitle; // this refers to window

console.log(ref());

Solution:
var ref2 = product.getTitle.bind(product); // this refers to product
console.log(ref2()); // Wacom
```

methods inherited from Function object to each function generally used are:
1) bind
2) apply
3) call

```
    function updateName(name) {
        this.name = name;
    }

    var person = {
        "name": "George",
        "age": 24
    }

    var product = {
        "name": "Macbook",
        "price": 245000.00
    }

    // for call and apply expliclty pass context as first argument
    updateName.call(person, "Sam"); // this refers to person
    updateName.call(product, "iPhone"); // this refers to product

    updateName("Application"); // this --> window

apply --> Check this out; similar to call
```

Functional style of programming uses HOF.
High Order Function:
1) function accepts function as argument
2) function returns a function

Treat function as first class member just like primitives or object

HOF are a way to write OCP principle
Open for Extension; Closed for a Change.

* filter --> to get subset
* map --> to transform data
* reduce --> to get aggregate like sum(), avg(), count()..

Note: all these methods are already available in array type of collection

https://rxmarbles.com/

Task: https://rxmarbles.com/#reduce
Write a reduce() HOF
pass aggregate function sum
get sum of prices of all products

Function returning a function --> HOF --> leads to Closure

Closure: returned function from a function can access all the members of outer function.

```

    function greet(msg) {
        return function(name) {
            return msg + name;
        }
    }

    var morningGreet = greet("Good Morning");

    console.log(morningGreet("Ria")); // Good Morning Ria
    console.log(morningGreet("Priya")); // Good Morning Priya

```

Memoization is a computer programming technique for speeding up applications by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

=================

New Features of JS ECMAScript 2024 (ES2024)
https://caniuse.com/

1) Scope members using let and const

if(condition) {
    // not hoisted to function scope
    let data = 100; // this member is not visible outside of block
}

const PI = 3.14159; // constant

2) Template String `` use tick instead of single or double quote.
check hof.html

3) arrow functions
```
  var evens = filter(numbers, function (no) { return no % 2 === 0 });
      can be written as
  var evens = filter(numbers, no => no % 2 === 0);
```

4) Promise API for asynchrous side-effects like API calls to server...
promise can resolve() or reject()

Synchronous call:

let result = doTask(); // blocking statement
// lines below this are not executed until doTask() completes

Asynchronous call using promise:
// resolve / reject is pushed to the Micro Task Queue --> stack for execution
// non-blocking
doTask().then(function resolve(data) {

},
function reject(err) {

});

console.log("Some other job!!!"); // will execute before promise is resolved / rejected

// Promise uses WebApi / libuv Threads
// useful for concurrency

5) async / await --> syntactical sugar for promise to avoid callback hell

function async doTask() {
    let connection = await connectToDatabase(); // blocking
    let users = await getUsers(connection); // blocking
    let usersSettings = await getUserSettings(users); // blocking
    enableSettings(usersSettings, true);
}


6) ESM --> ES Module system
JS module systems: is to modularize the code and bringing in the concept of visibility like private and public member
1) IIFE [ Immediately Invoked Function Expression ]
```
  let ShopModule = (function() {
    let data = [];
    let total;
    function computeTotal() {
        ...
    }
    function addtoCart(item) {
        data.push(item);
        computeTotal();
    }

    function getCart() {
        return data;
    }

    // public
    return {
        getCart,
        addtoCart
    }
  })();

 let ProfileModule = (function() {
    let data = []; // valid for ProfileModule
    ...
 })();
 ShopModule.addtoCart({...});
 ShopModule.getCart().forEach(...);
 ShopModule.computeTotal(); // error , not visible
 ShopModule.data; // error, not visible

```
2) CommonJS module system --> default for NodeJS and JS engines
Cover it along with NodeJS.
3) ESM
```
lib.js
function add() {} // private
export default function filter(elems, predicateFn) {
    var result = [];
    for(var i = 0;  i< elems.length; i++) {
        if(predicateFn(elems[i])) {
            result.push(elems[i]);
        }
    }
    return result;
}

// HOF
export function map(elems, transformFn) {
    var result = [];
    for(var i = 0;  i< elems.length; i++) {
            result.push(transformFn(elems[i]));
    }
    return result;
}

index.js
import filter, {map} from './lib';
can't import add

```
4) AMD
https://requirejs.org/docs/whyamd.html
5) SystemJS



