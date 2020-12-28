## Ruby intro

gem install bundler - manage gems

[Ruby Toolbox](https://www.ruby-toolbox.com/) - Ruby library info

puts - use .inspect at the end of what you're looking at so you get a more detailed response
.method - shows all available methods for the object

[Learn Ruby the hard way](http://learnrubythehardway.org/book/) - come back to this!

`print` logs the string without the newline character implied, as opposed to `puts`

`chomp` removes the newline at the end of strings you get with the `gets` method
`strip` removes white spaces
`chop` removes the last character

`p` or `inspect` are methods to get details about your variables/functions etc

`gets` always returns a string -> convert it to a number with `.to_i`

In Ruby:

- Capitalized words can be used to define a constant
- A constant can refer to a Module, a Class or simple data like Floats and Strings
- Namespacing is used heavily to limit the exposure of constants defined in the global namespace
- The :: Syntax is used to access constants (Modules, Classes, etc)
- It is convention to only capitalize the first letter when defining Class and Module constants like Apple
- It is convention to capitalize and underscore the entire name when defining value constants like FOUNDED_BY
  ex: 
module Apple
  FOUNDED_BY = "L. Ron Hubbard"
end