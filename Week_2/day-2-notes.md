## Asyncronous flow

`setTimeout(callback, time in ms)`
  * will place the action 'on the backburner' and execute it after the main thread has finished

`setInterval(callback, time in ms)`
  * will execute every x(time in ms) seconds
  * needs a clearInterval() in order to stop its execution
    (it will run to infinity othewise)

## fs = file system

>= specific to Node; we can ask it to read and write files from our system

! needs to be referenced
`const fs = require('fs');`

## stdin / stdout

>**stdin**
>requires the user to input something so we can take an action

>**stdout**
>can replace console.log, but can present encoding issues

## Events

! *User events* will use stdin (input from user) to take an action (callback)
! Not all event handling is due to user events

## readline

= a builtin module in Node that helps us read one line at a time

>needs to be referenced: `const readline = require('readline');`

>Once this code is invoked, the Node.js application will not terminate until the readline.Interface is closed because the interface waits for data to be received on the input stream.
>
>```javascript
>const rl = readline.createInterface({
>  input: process.stdin,
>  output: process.stdout
>});
>```
