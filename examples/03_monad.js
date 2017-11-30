class Container {
  constructor(value) {
    this.value = value
  }

  static of(value) {
    return new this.prototype.constructor(value)
  }

  map(func) {
    return this.prototype.constructor.of(func(this.value)).join()
  }

  join() {
    if (this.value && this.value.constructor === this.prototype.constructor) {
      return this.value
    }
    return this
  }
}

class Maybe extends Container {
  map(func) {
    return !this.value ? this : super.map(func)
  }
}

class Left extends Container {
  map(func) {
    if (this.value === 'errors') {
      return this
    }

    return super.map(func)
  }
}

class Right extends Container {
  map(func) {
    return super.map(func)
  }
}

function validateName(name) {
  return name.length > 5 ? Right.of(name) : Left.of('name is too long')
}

console.log(Right.of('test test test').map(validateName))
