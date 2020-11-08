!! When we start a server we need to stay away from the default ports!!
  Protocol	 | Default port
----------------------------
  http	     |  80
  https	     |  443
  ssh	       |  22
  postgresql | 	5432
  mongodb	   |  27017


>HTTP is a request-response protocol, where the client makes requests and the server sends responses
>
>HTTP is a text based protocol, making it easy to read and understand for humans
>
>HTTP requests must contain the verb/method (eg: GET) and the Path (eg: /about)
>
>HTTP requests aren't always to receive data, but sometimes to save data, like when we submit a form on a website. This is done via a POST instead of a GET
>
>Requests and responses both contain key-value based headers (eg: Accept-Language: fr, Content-Type: text/html, etc.)


## HTTP Methods

There are **9 HTTP request methods**, but we only need to consider 4 of them right now:

GET: used to "get" some data from the server
POST: usually used to create some new data
PUT: generally used for editing existing data on the server
DELETE: used to delete some existing data

## URL structure

>http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
>protocol|domain     | port|  resource path   | query parameters      |  anchor


* Protocol (http/https)
  * browsers also know how to handle other protocols such as mailto: (to open a mail client) or ftp: to handle file transfer
* Domain or Host (the 'name' of the website)
  * alternatively, it is possible to directly use an IP address,
* Port (gate used to access the resources)
  * usually omitted if the web server uses the standard ports of the HTTP protocol (80 for HTTP and 443 for HTTPS)
* Resource Path (path to the resource/page we're accessing)
* Query Parameters
  * extra parameters provided to the Web server
  * a list of key/value pairs separated with the & symbol
* Anchor = an anchor to another part of the resource itself

## Status codes

= information sent from a server to a client on the status of the request

100 series - Connecting
200 series - OK
300 series - Redirection
400 series - Something went wrong - You fudged up
500 series - Something went wrong - Server fudged up

> #### Common ones to look out for:
>200: "Everything went great!"
>201: "The request has succeeded and a new resource has been created as a result."
>404: "Resource was not found."
>500: "The server had an error."


# Remember:

**!! HTTP is not alternative to TCP, but rather the text-based "language" that is used to communicate over a TCP connection.**

!! This means that every time our browser accesses a website, it makes an HTTP request by opening a TCP connection on port 80 (or 443 for https) to a given HTTP server's IP address. 

!! It then sends text-based commands such as GET /path-to-page HTTP/1.1\r\n along with many other request headers (such as the user agent string, etc.) and waits for a response from the server. 

!! The response could be any type of document, which typically is either HTML, CSS, or JS