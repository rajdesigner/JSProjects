# JSProjects
This repository contains vanilla js projects/code snippets. In this space we also understand some important **Javascript concepts**

**Array destructuring**

Array destructuring is a new feature in javascript and it is a syntactic sugar.

```
const dimensions = [20, 5]

// create variables
const [width, height] = dimensions;

// log them
console.log(width); //20
console.log(height); //5
```


* Array destructuring is syntactic sugar (meaning that it makes your code look easier to read).
* The order in array destructuring matters, as every variable will be matched to the corresponding array item.
* You can identify destructuring when you see the square brackets [] on the left side of the equal sign.


**Nullish coalescing**

The nullish coalescing ?? operator is a new operator introduced in JavaScript that allows you to default to a certain value when the left-hand side is a nullish value. A nullish value is a value that is either **null** or **undefined**

```
const getName = name => {
    return name ?? 'N/A'
}

console.log(getName("Sam")); // "Sam"
console.log(getName(undefined)); // "N/A"
console.log(getName(null)); // "N/A"

```
you can only use nullish coalescing when the variable is defined. So, the variable name (or whatever variable you use to the left-hand side of the operator) has to be defined.


**Immutability**
An Immutable object is an object which cannot be changed. Every update creates a new value, leaving the old one untouched.

```
const grades = [10, 20];
const gradesCopy = [...grades];
console.log(gradesCopy); // [10, 20] (new array, not linked to 'grades'). you can make a copy of objects like it.
```

The way it works is that you're creating a new array with the [ ] syntax, and inside of this array, you're spreading the items from the grades array.
This is called a shallow copy.

**Callback data & handling errors **

A callback is a function definition passed as an argument to another function.

```
const sayHello = (name) => {
    welcomeUser(name, ()=>{
        console.log('Done!');
    });
```

```
const welcomeUser = (name, callback) => {
    setTimeout(() => {
        console.log(`Welcome ${name}`);
        if (callback) {
            callback(); // call the success callback
        }
    }, 1000);
}
```


**class in JS**

Javascript doesn't have real classes. The class syntax you will see is called syntactic sugar which is a fancy term for saying that it's a syntax that makes your code more readable (like a sweetener).

if you give **typeof(class)** you will get **function**

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
