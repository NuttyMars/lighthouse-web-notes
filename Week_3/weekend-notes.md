## MEAN stack
-> includes Node.js, Express, Angular.js and MongoDB

### Full stack = both back-end and front-end technologies
-> back-end = server-side technologies like web servers (Node.js), databases
-> front-end = the stuff a user sees and interacts with, such as HTML / CSS / JavaScript and all the associated considerations on client-side (or in the browser)

## HTML

Some of the fundamental HTML elements:

<html> - represents the root of an HTML document
<head> - provides general information (metadata) about the document
  <title> - defines the title of the document, shown in a browser's title bar
  <link> - specifies relationships between the current document and an external resource
<body> - represents the content of an HTML document
<h1>, <h2>, ... Heading elements implement six levels of document headings
<p> - represents a paragraph of text
<div> - Division Element, generic container for flow content
<ol>, <ul> list of items with, or without numerical ordering
  <li> - represents an item in a list
<a> - anchor element; defines a hyperlink to a location or page on the Web
<table> - display a data table. Note: not to be used for layout
  <tr> - a table row
  <td> - a cell in a table row

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

## CSS
>!! An element can have 0 to n classes -> Classes imply stylistic or behavioral properties about an element

>IDs may be used when you have a unique element such as a call to action that is styled and/or behaves very differently than other elements on a page or website.
>
>IDs also need be used when you need to reference them from the URL using the anchor hash value (also called the page fragment)

  ### Best practices
  * Use classes most of the time
  * Use neither unless necessary
    * You can always target any element without giving it a class or ID
    *  However, if the CSS selector that will need to be written in order to accurately target the element is too verbose, then you should consider classifying the element

## Event-driven architecture (EDA)

> When `X` happens, then do `Y`

-> On the client side (browser), we have the DOM, which has events such as onClick, onFocus, onLoad, as well as custom events. (jQuery is a library for client-side events)

-> On the server side, Node.js provides an EventEmitter class that is basis for event-driven patterns

## Event propagation
  ### - Bubbling and Capturing
    Since DOM elements are nested within other elements, in a tree-like structure, events that affects a child element bubble up through its parents.

    It is possible to prevent an event from continuing its propagation at any stage using stopPropagation(). *Don’t stop bubbling without a need!*

    When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors => on nested handlers, it will run all handlers from the most nested to the last

>   Most events bubble -> a focus event and some select others are exceptions

In the DOM:
this – is the “current” element, the one that has a currently running handler on it
event.target – is the “target” element that initiated the event, it doesn’t change through the bubbling process

[MDN DOM events reference](https://developer.mozilla.org/en-US/docs/Web/Events)

## jQuery
- fixes browser compatibility issues
- wraps native JS code in a cleaner API

## Events
Actions are constantly occurring on a webpage, but the developer is only notified about them if they're listening for them. Listening for an event basically means you're waiting for the browser to tell you that a specific event has occurred and then you'll specify how the page should react.

To specify to the browser what to do when an event occurs, you provide a function, also known as an event handler. This function is executed whenever the event occurs (or until the event is unbound).

-> obtrusive JS = using inline handlers
-> unobtrusive JS = separating HTML form JS (Best practice!)
