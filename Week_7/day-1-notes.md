## Scheduler environments:

npm start - launches the server to view the app in the browser
npm test - launches jest for automated testing
npm run storybook - launches the storybook component testing in the browser

## When using JSX:
- need to `import React from "react";` at the top of our file in order for the conversion to happen
- Always start component names with a capital letter!!
- any JSX expression can be rendered to the DOM using ReactDOM.render

  ### JSX rules:
  - all tags must be closed: either open and close tags, or self closing tags
  - a child tag must close before its parent
  - all JSX expressions must result in one root level element
  - no HTML comments - in JSX comments are made like this: `{/* comment */}`

## Working with React
- because it is directive and not imperative, it works with patterns:
  - .map is a looping pattern
  - sometimes a component does not have any children; when it does, it can access them using `props.children`
  - event handling - we can attach event handlers to React elements and pass a reference to a function directly
  - state can be managed through useSate, which is commonly imported along with React
  - Controlled components - input, textarea, select, are elements that track their changes; when managing their state with React, we call them controlled components (setName changes the state)
  - Conditional rendering
    1. In JavaScript:
      - true && expression always evaluates to expression
      - false && expression always evaluates to false
    -> we can use this to conditionally render React elements
    (ex: {name && <h1>Hello, {name}.</h1>} - the h1 will only render when name is present)
    2. If our requirement is to render one of two elements based on state, it would be better to use a ternary operator
    (ex: { isLoggedIn ? <Logout /> : <Login /> } - shows login or logout button based on whether the user is logged in or not)
  - Fragments - components can only return one element; the same goes for conditional expressions; to avoid nesting unneeded div, we can wrap the elements we want to render in a Fragment
    - There are three ways to access the Fragment, which is a component type provided by React.
      1. import React, { Fragment } from 'react' would be required for the above example
      2.  <React.Fragment></React.Fragment> would use the already imported React reference
      3. <></> is the shorthand for a Fragment