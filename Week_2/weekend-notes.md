## OOP (continued)

->Private vs Public (Classes)

In some languages, properties can be made private, which means that they can't be accessed outside of the class that they're created in. In JavaScript there is no way of making something private, but if we add an _ to the start of a property name, other developers will know that they shouldn't access it directly.

->Single Responsibility Principle

The single responsibility principle states that a class should be responsible for a single part of the app's functionality, giving it only one reason to change. Or more simply, a class should only have one job.

->Inheritance

Use inheritance to reduce duplicate code and share behaviour between classes

>Object Oriented Programming (OOP) is a programming paradigm where we use objects to encapsulate (group) data and behaviour. These two things become properties of those objects.


>**Why do we do this? What's it all for?**
>
>1. To reduce duplicated code (reusability)
>2. To break code up into sensibly-divided units (modularity)
>
>Why do we need to do that? Because real software gets big (tens of thousands of lines of code or more); having a paradigm to give us conventions and techniques to organize and manage the code is paramount!
>
>OOP does not *need* classes!
>It's just how it's usually implemented in other purely OOP languages

## Best practices for clean and readable code:

1. Comment
-> comments can be accessed in an IDE when a function is called

2. Consistent indentation
-> stick to an [indentation style](https://en.wikipedia.org/wiki/Indentation_style)

3. Avoid obvious comments

4. Code grouping
-> keep tasks separate in a visual block of code, with some spaces between them
-> adding a comment at the beginning of each block of code also emphasizes the visual separation

5. Consistent naming scheme
-> use same scheme across (camelCase vs underscores), do not combine!

6. Keep code DRY = Don't Repeat Yourself

7. Avoid deep nesting

8. Limit line length (around 80 characters for terminal windows)

9. File and folder organization

10. Consistent temporary names
EX:
-> i for loops / j for nested loop
-> ret for return variables
-> temp / counter

11. Capitalize SQL keywords

12. Separate code from data
-> in the case of web development, the "data" usually implies HTML output

13. Alternate syntax inside templates
-> keep the inline code directly related to the output and readable

14. OO vs procedural
-> objects should be used for representing data, usually residing in a database
-> procedural functions may be used for specific tasks that can be performed independently

15. Read Open Source code
-> Open Source projects are built with the input of many developers, therefore need to maintain a high level of code readability so that the team can work together as efficiently as possible

16. Refactoring
-> refactor early, refactor often

## cURL

* get the content of the URL and display it in the terminal
  
  `curl URL`

  * store the output in a file using a redirect

    `curl URL > local path

* save the cURL Output to a file

  `curl -o/-O URL (optional local path)`

  * -o (lowercase o) the result will be saved in the filename provided in the command line
  * -O (uppercase O) the filename in the URL will be taken and it will be used as the filename to store the result

* fetch multiple files at a time

  `curl -O URL1 -O URL2`

  * when we download multiple files from a same sever as shown above, curl will try to re-use the connection

* follow HHTP location headers (redirects)

  `curl -L URL`

  * when a requested web page is moved to another place, an HTTP Location header will be sent as a Response and it will have the actual URL
  * we can insist that curl follow the redirection using -L option => the actual source code will be downloaded

* resume a previous download

  `curl -C (other options) URL`

  * if a big download is interrupted, using -C will restart it at the same progress point

* limit the rate of data transfer

  `curl --limit-rate xB ()other options URL`

  * limiting the transfer at x bytes/second

* download a file only if it is modified before/after the given time

  `curl -z dateexpression URL`

  * this downloads if it was modified after the date

  `curl -z -dateexpression URL`

  * this downloads if it was modified before the date

    * `man curl_getdate` gives details about date formats supported

* pass HTTP authentication

  `curl -u username:password URL`


* more info using verbose option

  `curl -v URL`

  * enables a full trace dump of all incoming/outgoing data to the given file
  * comes in handy when curl fails due to some reason and we don’t know why

## Character encoding

Just declaring a different encoding in your page won't change the bytes; you need to save the text in that encoding too.

As a content author, you need to check what encoding your editor or scripts are saving text in, and how to save text in UTF-8. (It's usually the default these days.) You may also need to check that your server is serving documents with the right HTTP declarations.

## Node.js

!! Though it's often referred to as a framework, Node actually functions as a JavaScript runtime, powered by Google's V8 engine — the same engine used to power the Chrome browser