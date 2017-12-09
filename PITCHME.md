## Easy Functional Programming for JavaScript

---

### JavaScript is a multi-paradigm language 

![tight-end](assets/tight-end.jpg)

---

### JavaScript is a multi-paradigm language 

+ First class Function 
+ Lambda
+ Closure

---

### JavaScript is a multi-paradigm language 

+ Object Oriented
+ Single Source Inheritance
+ Class implementation with prototype

---

### JavaScript is a multi-paradigm language 

#### What is missing?

+ Purity
+ Immutability
+ Recursive

---

## Apps eat world, Web eat apps and JavaScript eat Web

---

### Imperative vs Declarative

#### Imperative

+ Stand up, walk 10 steps by your foot to the fridge, use your hand to open the door, get water, walk back 10 steps...

#### Declarative

+ I wish I had a glass of cold water now

---

### Imperative vs Declarative

![i-vs-d](assets/declarative-imperative.png)

---

### Imperative vs Declarative

```js

// imperative

const authenticate = function(form) {
  if (!form.username || !form.password) {
    return false
  }

  var user = {
    username: form.username,
    password: form.password,
  }
  
  return signIn(user)
};
```

---

### Imperative vs Declarative

```js
// semi-declarative
const authenticate = (form) => {
  if(!validateForm(form)) {
    return false
  }

  return signIn(toUser(form))
}
```

---

### Imperative vs Declarative

```js
// declarative

const authenticate = (form) => 
  signIn(
    toUser(
      validateForm(form)
    )
  )

```
---

### Imperative vs Declarative

```js
// declarative with higher-order function

const authenticate = compose(
  signIn,
  toUser,
  validateForm,
)
```

---

### Higher order Libraries

+ Lodash
+ Ramda
+ Underscore.js
 
---

### Higher order Functions

+ Curry
+ Compose
+ Monad
 
---

### Curry

``` js
const curry = (func, received = []) => {
  return (...args) => {
    const props = received.concat(args)
    if (props.length >= func.length) {
      return func(...props)
    }

    return curry(func, props)
  }
}
```

---

### Compose

``` js
function compose(...funcs) {
  return (args) => {
    funcs.reduce((func1, func2) => {
      return func2(func1())
    }, () => args)
  }
}
```

---

### Monad

> "Once you understand monads, you immediately become incapable of explaining them to anyone else” Lady Monadgreen’s curse ~ Gilad Bracha (used famously by Douglas Crockford)

---

### Monad

```js
class Container {
  constructor(value) {
    this.value = value
  }

  static of(value) {
    return new Container(value)
  }

  map(func) {
    return Container.of(func(this.value)).join()
  }
}

Container.of("bean").map((value) => value + "sauce!")
// => Container(beansauce!)
```

---

### Monad

```js

class Maybe {
  ...
  map(func) {
    if (!this.value) return this

    return Maybe.of(func(this.value))
  }
}
```

---

### Monad

```js

// Either

function validateForm(form) {
  return form.username && form.password ?
    Right.of(form) : Left.of('username and password is required')
}

Right.of(form).map(validateForm).map(signIn)
```

---

### Make JavaScript Great Again !!!

![JAGA](assets/jaga.png)
