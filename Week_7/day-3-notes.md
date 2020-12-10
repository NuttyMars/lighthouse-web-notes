## The Rules of Hooks

1. Don't call Hooks inside loops, conditions, or nested functions - use the loops, conditions and functions inside the Hook
2. Only call Hooks from inside React components
3. The effect method that we pass to useEffect must either return undefined or a function
  - The function will be used for side effect clean up
  - The easiest way to avoid issues with this rule is always to declare your effect as a multiline function

## Dependencies array
- when empty, it will take effect every time a render happens
- when it has parameters inside, it will take effect when the parameter values have changed

## Some side effects need cleanup(like setTimeout), others don't (like console.log)