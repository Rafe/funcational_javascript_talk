class Container {
  constructor(value) {
    this.value = value
  }

  static of(value) {
    return new Container(value)
  }

  get isMonad() {
    return true
  }

  map(func) {
    return Container.of(func(this.value)).join()
  }

  join() {
    if (this.value && this.value.isMonad) {
      return this.value
    }
    return this
  }
}

class Maybe {
  constructor(value) {
    this.value = value
  }

  static of(value) {
    return new Maybe(value)
  }

  get isMonad() {
    return true
  }

  map(func) {
    if (!this.value) return this

    return Maybe.of(func(this.value)).join()
  }

  join() {
    if (this.value && this.value.isMonad) {
      return this.value
    }
    return this
  }
}
