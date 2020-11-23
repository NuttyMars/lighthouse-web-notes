## DOM events

document.getElementsByTagName('tag')
document.getElementsByClassName('class')
-> these return an 'html collection' which is similar to an array, but a lighter version (methods, such as forEach, will not work on them)
-> html collections can be turned into classic arrays with Array.from('collection')

## Scripts

-> for scripts to work properly, the order needs to be:
  - load HTML
  - load JS libraries
  - load JS
(this is why scripts are usually loaded at the end of the body)

## jQuery syntax

$('target').action()
 - if target has tags, the action creates the specified tag
 - if target has no tags, the action either reads the target(when action param is empty), or writes to the target(when action param has a 'value' inside)