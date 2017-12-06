class Left {
  constructor(value) {
    this.value = value
  }

  of(value) {
    return new Left(value)
  }

  map(func) {
    return this
  }
}

class Right {
  constructor(value) {
    this.value = value
  }

  of(value) {
    return new Right(value)
  }

  map(func) {
    return Right.of(func(this.value))
  }
}

function validateName(name) {
  return name.length > 5 ? Right.of(name) : Left.of('name is too long')
}

function toUpperCase(name) {
  return name.toUpperCase()
}

console.log(Right.of('test test test').map(validateName).map(toUpperCase))
