## OOP with Ruby

### Encapsulation 
  - hiding pieces of functionality and making it unavailable to the rest of the code base. It is a form of data protection, so that data cannot be manipulated or changed without obvious intention.

### Polymorphism 
  - the ability for different types of data to respond to a common interface. For instance, if we have a method that expects argument objects that have a `move` method, we can pass it any type of argument, provided it has a compatible `move` method. The object might represent a human, a cat, a jellyfish, or, conceivably, even a car or train. That is, it lets objects of different types respond to the same method invocation.

### Inheritance
  - The concept of inheritance is used in Ruby where a class inherits the behaviors of another class, referred to as the **superclass**. This gives Ruby programmers the power to define basic classes with large reusability and smaller **subclasses** for more fine-grained, detailed behaviors.

### Modules
  - Modules are similar to classes in that they contain shared behavior. However, you cannot create an object with a module. A module must be mixed in with a class using the include method invocation. This is called a **mixin**. After mixing in a module, the behaviors declared in that module are available to the class and its objects.

!! When defining a class, we typically focus on two things: *states* and *behaviors*. States track attributes for individual objects. Behaviors are what objects are capable of doing.
  - instance variables are scoped at the object (or instance) level, and are how objects keep track of their states
  - different instances of the same class have identical behaviors

### puts and p methods
 - the puts method appends .to_s by default to its output
 - the p method appends .inspect

### !! instance methods can be overridden! (ex. to_s can be redefined inside a class to do something else)

### self 
  = references the calling object (like `this` in JS) when used in an instance method
  = references the class itself when used inside a class but outside an instance method
- Use self when calling setter methods from within the class, to allow Ruby to disambiguate between initializing a local variable and calling a setter method.
- Use self for class method definitions.

### Class inheritance vs module mixins(interface inheritance)

- You can only subclass (class inheritance) from one class. You can mix in as many modules (interface inheritance) as you'd like.
- If there's an "is-a" relationship, class inheritance is usually the correct choice. If there's a "has-a" relationship, interface inheritance is generally a better choice. For example, a dog "is an" animal and it "has an" ability to swim.
- You cannot instantiate modules (i.e., no object can be created from a module). Modules are used only for namespacing and grouping common methods together.