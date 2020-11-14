## VS hortcut (Emmet abbreviation)

`Shift + !` => puts a basic HTML structure in the file

## Express

-> res.render()

  1st param = file path
  2nd param = object - the keys of the object can be used as variables inside the ejs template (key will print as key value)

!! when the route has : (ex: urls/:id) the id will automatically be passed within req.params

>!! hrefs and buttons can only be GET methods
>!!if we need to change method, we use them in a form tag with method= inside the tag

## Git branches

`git checkout -b <branch name>`
-> creates and switches to that branch

rebasing = merges branches in a more linear fashion

## Cookies

= files that allow web servers to 'know' a user

* session cookies / in-memory cookies = get deleted when the user closes the browser
* persistent cookies / tracking cookies = expire at a specific date or after a specific length of time
* secure cookies = can only be transmitted over an encrypted connection
  * cannot be transmitted over unencrypted connections
  * less likely to be exposed to cookie theft via eavesdropping
  * a cookie is made secure by adding the Secure flag to the cookie
* http-only cookies = cannot be accessed by client-side APIs, such as JavaScript
  * a cookie is given this characteristic by adding the HttpOnly flag to the cookie
* same-site cookies = advanced attributes that allow cookie theft
  * declared with attribute SameFile, which can have a value of:
    * Strict = browsers should only send these cookies with requests originated from the same domain/site as the target domain
    * Lax = would not restrict originating site, but enforce target domain to be the same as cookie domain (block third-party cookies)
    * None = allow cross-site cookies
* third-party cookies = belong to a domain different from the one shown in the address bar (ads)
* supercookie = a cookie with an origin of a top-level domain (such as .com) or a public suffix (such as .co.uk)
  * ordinary cookies, by contrast, have an origin of a specific domain name, such as example.com
* zombie cookie = a cookie that is automatically recreated after being deleted
  * this is accomplished by storing the cookie's content in multiple locations; when the cookie's absence is detected,the cookie is recreated using the data stored in these locations

### Getting a cookie
req.cookies.id;

### Setting a cookie
req.cookie();