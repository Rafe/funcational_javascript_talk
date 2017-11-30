## Easy Funcational Programming in Javascript

---

### Imperative vs Declarative

```js

// imperative
var makes = [];
for (var i = 0; i < cars.length; i++) {
  makes.push(cars[i].make);
}

// declarative
var makes = cars.map(function(car) { return car.make; });
```

---

```js
// imperative
var authenticate = function(form) {
  var user = toUser(form);
  return logIn(user);
};

// declarative
var authenticate = compose(logIn, toUser);
```

---

### Curry

0. explain what is curry
0-1. show stephen curry
0-2. show curry

1. show current fetch code for api
2. use curry to refactor
3. show replace
4. use curry to generate further function

---

### Compose

0. show compose implementation

```
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

---

### React Example

---
