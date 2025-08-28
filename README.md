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
a) IIFE [ Immediately Invoked Function Expression ]
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
b) CommonJS module system --> default for NodeJS and JS engines
Cover it along with NodeJS.
c) ESM
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
d) AMD
https://requirejs.org/docs/whyamd.html
e) SystemJS

======

6) Destructuring array and objects
7) REST operator for parameters

```
// zero to n arguments can be passed
function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3));
// Expected output: 6

console.log(sum(1, 2, 3, 4));

```

8) Generator function
A generator function is a special type of function that can pause its execution and resume later, allowing it to produce a sequence of values over time rather than returning a single value immediately. [yield instead of return statement]

===============

DOM: Document Object Model
Object representation in Java / JavaScript / Visual Basic of tree of XML elements [HTML]

* Using DOM Apis we can
1) create new elements
2) remove elements
3) access elements
getElementById()
getElementsByTagName()
getElementsByTagName("div"); give array of div's
querySelectorAll("div"); same as above
querySelector() for by ID, tag name, by class name, sub selectors
document.querySelector(".tmpl-header_logo").innerHTML = "Adobe"
document.querySelector(".tmpl-header_head > div > h1")

4) traverse through elements
5) add event handling to the elements [ make it interactive]


```
// create custom events
const catFound = new CustomEvent("animalfound", {
  detail: {
    name: "cat",
  },
});
const dogFound = new CustomEvent("animalfound", {
  detail: {
    name: "dog",
  },
});

// add an appropriate event listener
element.addEventListener("animalfound", (e) => console.log(e.detail.name));

// dispatch the events
element.dispatchEvent(catFound);
element.dispatchEvent(dogFound);
```

In DOM: keyboard and Mouse are low level events
click, focus, Change events are high level events

Change event is based on keyDown and KeyUp

click is mouse button down and mouse button up

=================

Task: Learn Change event, focus event

Create a Dropdown select which has colors. selecting a color background of body should change.

Text Box 1:
Text Box 2:
Div with id as "result"

3 Radio button for Add Subtract Multiple
Button called as compute is created
Click on the button result should be shown based on which radio button was selected

=============

Recap:
JavaScript basics. OOP, Functional Style of Programming using HOF, Closure
Memoization pattern using Closure.
ES 6 + new features: ESM, export [default and non default members] and import 
Promise, Destructuring, arrow, class, generator ...
DOM : Document Object Model --> create, delete, access, traverse and event handling.

```
    <input type="text" id="txtName" />
    <button id="btn">Ok</button>

    function doTask(evt) {

    }
    function fn(evt) {
        ...
    }
    document.getElementById("btn").addEventListener("click", fn);
    document.getElementById("btn").addEventListener("mouseHover", doTask); // high priority
    document.getElementById("txtName").addEventListener("change", fn);
    document.getElementById("txtName").addEventListener("keyPress", doTask); // high priority
```

Day 2:

NodeJS: Platform built on top of V8 engine runtime and uses libuv for asynchronous operations similar to what WebApi gives for browsers
Created by Ray Daul --> 2009 / 2010

Deno and Bun are alternatives to NodeJS

=======

Why NodeJS?
1) can be used to build traditional web applications to render pages on server and send presentation pages to client.

2) can be used to build RESTful WebServices like Spring Boot / Razor of .NET 

3) can be used to build Real time applications like Chatbots

4) can be used for Streaming APi [ Netflix and others are using it]

5) Platform for:
a) Transpile / Compile code
    Latest Version of JS --> lower version of JS  [ transpiler like Babel / Traucer]
    TypeScript --> JS
        statically typed like
        let name:string = "Roger"
    DART --> JS
    CoffeeScript --> JS
    LiveScript --> JS
b) Testing - Unit Testing, Integration Testing and E2E Testing
c) Minify and Uglify your code

```
    function getEmployeeById(id) {
        let employee = null;
        fetch(...).then(..).then(..);
    }

    minified code:
    function getEmployeeById(id){let employee = null;fetch(...).then(..).then(..);}

    uglified code:
    function _g(id){let _e = null;fetch(...).then(..).then(..);}

```
d) bundle
without bundling:

index.html
``` 
    Each inclusion of script and link leads to a Netwrok call from client to server
    Here 1 call to get index.html
    5 calls to load js files
    2 calls to load css files
    <script src="products.js"> </script>
    <script src="customers.js"> </script>
    <script src="items.js"> </script>
    <script src="orders.js"> </script>
    <script src="payment.js"> </script>
    <link rel="stylesheets" href="styles.css">
    <link rel="stylesheets" href="main.css">
    Another problem is the order in script is important; here payment depends on order and customer,
    order depends on item depends on product
```

Solution: bundle them and include:

```
    <script src="bundle.js"></script>
    <link rel="stylesheets" href="cssBundle.css">
```

NodeJS projects structure.
NodeJS comes with NPM as node package manager [like Maven / Gradle for Java], using this we install depenedencies, publish module to repo, execute goals like compile, start, test, ...
https://www.npmjs.com/

Alternatives for NPM : YARN, PNPM, RUSH

====
Steps for NodeJS project
1) npm init --y
this creates a package.json file
package.json -- similar to pom.xml

npm i lodash --> gets installed in node_modules folder
3rd party libraries are installed in node_modules folder

every NodeJS project needs its dependencies in node_modules folder.

Only executable node modules will be stored in central folders like

npm i jest -D

devDependencies --> required only in development stage and not in production

