# JSProjects
This repository contains vanilla js projects/code snippets. In this space we also understand some important **Javascript concepts**

**Class in JS**

Javascript doesn't have real classes. The class syntax you will see is called syntactic sugar which is a fancy term for saying that it's a syntax that makes your code more readable (like a sweetener).

if you give **typeof(class)** you will **function**

```
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    isSquare() {
        return this.width === this.height;
    }
}

```

typeof(Rectangle); //"function"

**class is a function**

Rectangle class in real. This is how we write class before class pattern added in 2015 

```
function Rectangle(width, height){
  this.width = width;
  this.height = height;
}
```
**This function serves as the constructor. It's called the function constructor pattern in JavaScript"**
