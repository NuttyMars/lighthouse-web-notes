## Functions as objects

* functions are first-class objects, meaning
  * Functions can be stored in variables and passed around
  * Functions can do everything that other objects can do (like having properties assigned to them)

## Callback functions

! Functions are values and can be treated as such => they can be passed as arguments into function
What this means is that we can pass *data* but also *behaviour* to a function

! Can be written as arrow functions when inline
!! Arrow functions cannot be named!

> Functions that take in callbacks are called **Higher Order Functions**
#### Otherwise said
> Higher-Order functions are any functions which operate on other functions (therefore include, but are not limited to functions that take in callbacks)

! .filter method filters the results we are looking for
! .reject method is the opposite of filter (filters them out)