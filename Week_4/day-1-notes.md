## Default styles

* display: block
  - A block level element will take up the entire space of its parent element. It can contain other block elements or inline elements
  - paragraphs, headings, div, section, footer, article, paragraph, lists, nav

* display: inline
  - Inline elements do not start a new line when they are rendered in the browser. They only take up as much space as the content needs
  - Inline elements contain only data and other inline elements. Unlike block elements, we can't add a width, height, padding or margin to inline elements. They simply take up as much room as they need to display their content
  - span, anchor, em, strong, span

* display: inline-block
  - An inline-block element has properties of both. It doesn't automatically create a new line in the browser, but it can have a margin, padding, height, and width
  - image tags and buttons

## display: flex
= a layout module in CSS that is great for layouts that need to adapt to different screen sizes and display devices

-> parent properties:
  - display: flex is applied to the parent
  - flex-direction = row(main axis x) or column(main axis y)
    - this connects to the children property of reverse
  - justify-content = determines where the flex items are along the main axis
  - align-items = determines how flex items are laid out on the cross axis

-> child properties:
  - order = controls the order elements appear in without changing your HTML (default value 0)
  - flex-grow = dictates how much space a flex item should take up

## Adding JS to your HTML

- inside the head or body with a <script></script> tag
- by linking to a JS file with <script src="filename.js"></script>
  -> will not render the page until the JS script has finished if included in the head
  -> if included in the body at the bottom, the page will render before running the script (best practice)
- inline scripting - best suited when trying to add specific event handlers
