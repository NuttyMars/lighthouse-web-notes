> To be able to console log objects, add this line of code:
>
> `const inspect = require('util').inspect;`

## Recursion

> In a nutshell: A function that calls itself until it doesn't

```javascript
//declare the function
function name(param) {
  //recursive case = while this condition is true, the function will keep calling itself
  if (recursive case)
    //the function calls itself with the action to perform
    name(do this action);
  else
    //the function will stop executing when it reaches this
    base case
}
//we call the function like any other function
name(value) 
```
> !! A function must have at least one recursive case and at least one base case in order to be recursive

#### Recursion is the best solution when the problem you are solving is just a smaller instance of the problem you have already solved (like with deeply nested arrays)