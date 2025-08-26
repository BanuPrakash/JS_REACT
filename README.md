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
