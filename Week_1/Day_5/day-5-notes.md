> To be able to console log objects, add this line of code:
>
> `const inspect = require('util').inspect;`

## Recursion

> In a nutshell: A function that calls itself until it doesn't

```javascript
function name(param) {      //declare the function
  if (recursive case)       //recursive case = while this condition is true, the function will keep calling itself
    name(do this action);   //the function calls itself with the action to perform
}

name(value)                 //we call the function with a value outside of itself
base case                   //not something that is explicitly specified, the function will stop executing when it reaches this
```
> !! A function must have at least one recursive case and at least one base case in order to be recursive

#### Recursion is the best solution when the problem you are solving is just a smaller instance of the problem you have already solved (like with deeply nested arrays)