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

npm i lodash

npm i jest -D

devDependencies --> required only in development stage and not in production

```
"lodash": "4.17.21" --> Exact version
"lodash": "^4.17.21" --> Any version equal or greater than mentioned download from repo

"lodash": "~4.17.21" --> Major version has to be 4, minor and patch can be latest

Developer pushes code and package.json to repository.
Other team members downloads the project and installs dependencies in their machines:
npm install

```

Unit testing libraries for JavaScript:
1) Mocha
2) Jasmine
3) JEST
4) VITEST

Testing --> AAA --> Assemble Action Assert
Only changes are in assertion code, Solution use 3rd party assertion libraries like chaiJS
https://www.chaijs.com/

by default testing libraries looks out for files with *.test.js or *.spec.js for testing code

https://jestjs.io/docs/mock-functions

=========================================

JS build tools to automate process:
1) Grunt
2) Gulp
3) Webpack [ default tool used to generate scaffolding code for react / Vue/ Svelte... until FEB 2025]
4) vite [ React/ Vue moved to this in FEB 2025]
5) parcel
6) esbuild

JavaScript build tool used to automatically perform frequent tasks such as minification, uglify, compilation, bundle, unit testing, and linting.

--------

Webpack:
1) initialize Node Project -- create package.json
webpack_example % npm init --y
2) install development depenencies
webpack_example % npm i @babel/core babel-loader @babel/preset-env -D
babel-loader:
By default NodeJS uses CommonJS module system, if we use ESM module system, NodeJS doesn't understand it, we need babel-loader to load imported files like
import filter, {map} from './lib';

@babel/core: Transpiler --> converts ESM to CommonJS format so that NodeJS can execute.

@babel/preset-env: is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). 

Example of syntax transforms:
latest JS we write let {name, price} = product;
gets converted to 
let name = product.name;
let price = product.price;

let add = (x, y) => x + y;
gets converted to
function add (x,y) {
    return x + y;
}

A polyfill is a piece of code that adds new functionality to older environments, such as browsers, that do not natively support it. 
We can use latest JS features like Promise, Map, ... which is not supported by older browsers. we need an alternate code to simulate this.

Most of the latest polyfills are provided by core-js:
https://www.npmjs.com/package/core-js


webpack_example % npm i webpack webpack-cli -D

webpack_example % npm i html-webpack-plugin  webpack-dev-server -D

The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. 
This is especially useful for webpack bundles that include a hash in the filename which changes every compilation.

Also there could be many bundles like seperate for libraries, for customer module, product module...
<script src="vendor.bundle.js"> </script>

HMR --> Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload.

index.html
Change from
<script src="bundle.#vsdf32521.js"> </script>
to 
<script src="bundle.ydf!@ddf2.js"> </script>

=========================

Note: Configuration files has to be CommonJS and not ESM

Development Mode: 
```
npm run dev

> webpack_example@1.0.0 dev
> webpack --mode development

asset bundle.7013671c.js 6.74 KiB [emitted] [immutable] (name: main)
runtime modules 695 bytes 3 modules
cacheable modules 2.1 KiB
  ./src/index.js 166 bytes [built] [code generated]
  ./src/Person.js 1.88 KiB [built] [code generated]
  ./src/util.js 69 bytes [built] [code generated]
webpack 5.101.3 compiled successfully in 366 ms

```

Production Mode:

```
npm run prod

> webpack_example@1.0.0 prod
> webpack --mode production

asset bundle.e6ac9ea6.js 1.26 KiB [emitted] [immutable] [minimized] (name: main)
orphan modules 1.94 KiB [orphan] 2 modules
./src/index.js + 2 modules 2.1 KiB [built] [code generated]
webpack 5.101.3 compiled successfully in 435 ms
```

Babel config can be in babel.config.js / .babelrc / babel.config.json

========

webpack_example % npm i css-loader style-loader -D

JSX (JavaScript Syntax Extension) is an XML-like syntax extension for JavaScript that allows developers to write XML/HTML-like code directly within JavaScript files, making it easier to describe the structure of user interfaces.
JSX is not valid JavaScript on its own; it needs to be "transpiled" or converted into standard JavaScript objects by a tool like Babel before it can be understood by a web browser.

 webpack_example % npm i @babel/preset-react -D

 @babel/preset-react when it sees JSX looks for React object
 Uncaught ReferenceError: React is not defined

 Converting your JS object to DOM we call it as rendering..

 https://github.com/chentsulin/awesome-react-renderer

 ==========================

 vite ==> veet
 Next Generation build tool developed by vue.js team
 * Built-in support for typescript, JSX, CSS and static assets
 no need for babel-loader, ts-loader, css-loader, file-loader
 HMR support is provided.
 comes with pre-build dev-server

npm create vite@latest
Vanilla
JavaScript
npm install
npm run dev

Customizing Vite with vite.config.js similar to webpack.config.js

like @babel/preset-react

npm i start-dom-jsx -D

=======================

* SSR -> server side rendering
Pro:
 * thin clients
 * SEO
Cons:
 * Can't have heterogenous clients like web, mobile, tv, desktop
 * Heavy payload --> between client and server for every request entire page is sent

* CSR -> Client Side rendering
Pros:
* Light payload [only JSON / XML] 
* Client Server architecture can evolve seperately
* Heterogenous clients
Cons:
 * Heavy clients
 * Not SEO

Front end libraries / frameworks for web application
1) DOM: create element, event handling, remove element, traverse, ...
2) jQuery library
    ```
        $("<div>")
        same as document.createElement("div");

        $("div")
        document.getElementsByTagName("div")

        $(".card")
        document.querySelector(".card");

        document.getElementById("btn").addEventListener("click", fn);
        $("#btn").on("click", fn);
    ```
3) Templates like Underscore, Handlebar, Mustache, Pug, Jade, Knockout, ...

```
    Template:
    <ul class="people_list">
        {{#each people}}
            <li>{{this}}</li>
        {{/each}}
    </ul>

    Data from RESTendpoint:
    {
      people: [
            "Yehuda Katz",
            "Alan Johnson",
            "Charles Jolley",
    ],
    }

    Output:
    <ul class="people_list">
        <li>Yehuda Katz</li>
        <li>Alan Johnson</li>
        <li>Charles Jolley</li>
    </ul>
```
SPA: Single Page Application [index.html] with many views, here state management become complicated
4) Backbone is based on MVC Architectural pattern --> library
ModelViewController
It gave Controller and Model Support, for View we could choose any of the templates
Model --> data and logic
View --> Presentation layer [interpolation]
controller --> handling UI interaction
5) AngularJS --> Framework by Google [total solution]
6)  XHP --> 2010 --> Marcel Laverdet [Facebook]
XML in PHP
FaxJS --> 2011 --> Jordan Walke [JSX]
ReactJS --> 2012 [JSX] --> jsConf demo
Open Source --> 2013
Khan Academy --> Sophie Alpert
2015 --> Stable --> Netflix, Airbnb
7) Angular --> Framework [better than AngularJS], total solution 
Learning curve, heavy
8) Vue, Svelete, ...

React is just a View Library, no support for Model [3rd party state management]

==========================================

React View Library

A ReactElement is an object with type and props.
React nodes are not a real DOM, but a representation of a potential DOM node.
The representation is considerd virtual DOM

A react node is a ReactElement, Fragment, a string, number, array of ReactNodes, null, undefined or boolean

Ways to create React Component
1) React.createElement() Core API
let Elem = React.createElement("h1",{{"style":"width":"20px"}}, "Welcome to React");

2) class components has render() method which returns JSX, returned JSX is given to React.creatElement()
class components can have state, lifecycle methods and behaviours.

```
class ProductCard extends Component {
    ...
    render() {
        // JSX
    }
}

```
3) functional component returns JSX, returned JSX is given to React.createElement()

```
function ProductCard() {
    return JSX;
}
```

Usage wise 99% of the time we use functional component.

===============

ways to create react scaffolding projects:
1) npx create-react-app sampleapp
this creates a react application using "webpack", "babel", ...
Create React App (CRA) has been officially deprecated. The React team announced its deprecation in February 2025

2) npm create vite@latest 
this creates a react applicaiton using "vite" instead of webpack

React version is 19.

Day 3:

Recap:
NodeJS -- platform
install 3rd party modules using NPM / YARN / PNPM ...
NPM -- Node Package Manager using which we can install dependencies, execute scripts
package.json -- every node projects needs one, where depenedecies, devDependencies, peerDepencencies are configured. Also scripts are configured
npm i dependency
npm i devDependency -D
npm start
npm test
npm run anyOtherScript example: npm run dev

Build tool: Webpack, vite
npx create-react-app sampleapp --> creates a scaffolding code for react using webpack.
From React 19 onwards -- FEB 2025 react recommends using vite
npm create @vite/latest

=====================

JSX --> JavaScript and XML. JS is used for interpolation
JSX has to be converted into JS object using plugins like @babel/preset-react or start-dom-jsx, ...

Conveted JS object is reated as ReactElement with type/tag and props
props are simply attributes and children.

props are the way to pass data from parent to child.

https://legacy.reactjs.org/docs/reconciliation.html
The Diffing Algorithm
```
const diffs = [
    {
        newNode: { /* new version of list item */},
        oldNode: { /* original version of list item */},
        index: /* index of element */
    },
    {
        newNode: { /* new element */},
        index : { /* position */}
    }, 
    {...}
]

diffs.forEach( diff => {
    document.createElement()
    OR
    document.remove()
    OR  
    document.getElementById(..).innerHTML = ...
});

```

Thinking in React.

```
1. Atoms:
These are the smallest, fundamental building blocks of your UI, analogous to chemical atoms.
In React, this translates to basic, self-contained components like Button, Input, Icon, or Label.

99% of the time they are just reused. no need to create from scratch
https://react-bootstrap.netlify.app/docs/components/buttons
https://mui.com/material-ui/react-button/
https://opensource.adobe.com/spectrum-web-components/components/button/

2) Molecules:
Molecules are formed by combining two or more atoms to create a more complex, yet still relatively small, functional unit.
Example: button with image; CardFooter, CardHeader

3) Organisms:
Organisms are combinations of molecules and/or atoms that form a more substantial, independent section of the UI.
Navbar, Card like ProductCard
70% of them are avialable

4)  Templates:
Templates define the page's structure and layout by arranging organisms. They are essentially wireframes or blueprints for pages, devoid of actual content.
like List of MobileCard

```

Unit testing of React Components


npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom
vite.config.js

https://testing-library.com/docs/react-testing-library

=======================

Component Life Cycle methods.

Mounting Phase:
constructor() --> render() --> componentDidMount()
intialize -> create view with initial data --> make API calls
Note: Never make API calls in constructor --> leads to FCP issue

youtube --> in constructor 20 videos with empty title, "diplay" is created, we get immediatly 20 placeholders
in componentDidMount() MAKE api call and fill the placeholders

Updating Phase: whenever state changes or props from parent changes this phase is triggered.
shouldComponentUpdate() -> return --> render()
shouldComponentUpdate() --> false --> render is not called
componentDidUpdate() --> make API calls here for dependent data

Unmounting Phase: before component is destroyed
componentWillUnmount()
unsubscribe any subscriptions,
display dialog box, Thank You, ...


npm install @faker-js/faker

================

functional components --> 99% of components from React 16.4 version onwards.
Performance:
Can be slightly more performant due to their simpler structure and the lack of class instance overhead. 

class components inherit from Component -- overhead
class components can have state, life-cycle methods

In React 16.4 version Hooks was introduced to get class component capabilities.
1) useState() to declare a state member for functional component
2) React.memo() can be used in place of shouldComponentUpdate() lifecyle of class component for functional component.
3) useEffect() is a hook for componentDidMount(), componentDidUpdate() amd componentWillUnmount()

```
componentDidMount
useEffect(() => {

},[]);

componentDidUpdate
useEffect(() => {

},[dependency]);

componentDidMount ==> avoid using this
useEffect(() => {

});

componentWillUnmount; any function returned from componentDidMount will work like
componentWillUnmount.

useEffect(() => {

    return () => fn;
},[]);

fn will work like componentWillUnmount
```
4) useContext()

Problem : props drill
Prop drilling in React refers to the process of passing data or functions down through multiple layers of nested components via props, even when intermediate components do not directly use those props.

Solution: 
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

Note: Only Children of Provider can be a Consumer
```
<ProfileContextProvider>
        <A />
        <B />
</ProfileContextProvider>


<ProfileContextProvider>
        <D />
        <E />
        <F />
</ProfileContextProvider>

```

https://react.dev/learn/thinking-in-react

