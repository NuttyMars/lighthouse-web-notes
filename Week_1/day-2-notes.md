## Looping

`for...in` -> for use with objects; takes the keys, which in an array are the indexes

`for...of` -> for use with arrays; takes the values


## Function best practices

### Naming conventions
* avoid generic names like 'data', or 'run'
* name your functions beginning with action words like createUser, or sendUserData
* be consistent with your naming conventions
* if you're joining an existing project, observe and adapt any existing conventions
* use camelCasedNames

### Do's
* Properly indent the function code
* Functions should focus on a single task: returning a value or causing a side effect. 
* Break your function into additional smaller functions if you find it doing two or more things
  * One single task could be to compute and return a value
  * Another single task could be to perform a side effect such as logging a message to the screen
* It is ideal if functions try to avoid reading outer scope variables. If a function needs some information / data, then that data should instead be passed in as a parameter, making it available within the function's inner scope.

## Falsey values

<dl>
  <dt>ZEN is a guy who would likes to have FUN always</dt>
  <dd>Z - Zero</dd>
  <dd>E - Empty String</dd>
  <dd>N - Null</dd>
  <dd>F - False</dd>
  <dd>U - Undefined</dd>
  <dd>N - NaN</dd>

>!! we can easily check for empty strings and arrays with the help of their falsey values
>  * an empty string is falsey => !string will be true
>  * an empty array's length will be 0 (falsey) => !array.length will be true