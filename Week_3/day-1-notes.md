## Project evaluation

* Proper and consistent indentation and spacing
* Clear and consistent function and variable names
* Modular and reusable code (small, single-serving functions)
* Well-commented code
* No presence of dead/un-used code
* Good commit history (multiple commits, at least one for each major step, and clear and helpful commit messages)
* Sensible structure for the project's files and directories

## Express

-> helps with routing
Routing refers to how an application’s endpoints (URIs) respond to client requests. Each endpoint (or route or webpage) can have one or more handler functions, which are executed when the route is matched

* ejs = embedded javascript
  * templates that help parse complex webpages (pages that combine HTML and JS) = server side rendering
  * we send a view to the browser with res.render()
    * !! res.render() will look in a views folder for the view, so our resources need to be in the correct folder
  * code that gets reused between resources is contained in 'partials'
    * EX: headers, footers and other parts of pages that repeat
  * When sending variables to an EJS template, we need to send them inside an object, even if we are only sending one variable. This is so we can use the key of that variable to access the data within our template
* partials are denoted with _ in front of the name (EX: _header.ejs)
* routes should be handled from most specific to least specific

-> when a POST is submitted, the body (which does not exist for a GET request) will be transmitted also, but packaged as a Buffer (not human readable)
  to fix this install body parser: npm install npm body-parser

## CRUD     vs   [HTTP methods](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods)

C = Create   |  POST
R = Read     |  GET
U = Update   |  PUT
D = Delete   |  DELETE

**GET**
The GET method requests a representation of the specified resource. Requests using GET should only retrieve data and should have no other effect.
-> safe/idempotent
**HEAD**
The HEAD method asks for a response identical to that of a GET request, but without the response body.
-> safe/idempotent
**POST**
The POST method requests that the server accept the entity enclosed in the request as a new subordinate of the web resource identified by the URI.
-> not idempotent
**PUT**
The PUT method requests that the enclosed entity be stored under the supplied URI. If the URI refers to an already existing resource, it is modified; if the URI does not point to an existing resource, then the server can create the resource with that URI.
-> idempotent
**DELETE**
The DELETE method deletes the specified resource.
-> idempotent
**TRACE**
The TRACE method echoes the received request so that a client can see what (if any) changes or additions have been made by intermediate servers.
-> safe/idempotent
**OPTIONS**
The OPTIONS method returns the HTTP methods that the server supports for the specified URL.
-> safe/idempotent
**CONNECT**
The CONNECT method converts the request connection to a transparent TCP/IP tunnel, usually to facilitate SSL-encrypted communication (HTTPS) through an unencrypted HTTP proxy.
**PATCH**
The PATCH method applies partial modifications to a resource.

>Some of the methods (for example, GET, HEAD, OPTIONS and TRACE) are, by convention, defined as safe, which means they are intended only for information retrieval and should not change the state of the server.
>
>=> They should not have side effects!!
>By contrast, methods such as POST, PUT, DELETE and PATCH are intended for actions that may cause side effects either on the server, or external side effects such as financial transactions or transmission of email
>
>Methods PUT and DELETE are defined to be idempotent, meaning that multiple identical requests should have the same effect as a single request. Methods GET, HEAD, OPTIONS and TRACE, being prescribed as safe, should also be idempotent, as HTTP is a stateless protocol

## Testing our pages

-> we can test using the browser or cURL(console logs will show here)