const curry2 = (func) => (a) => (b) => func(a, b)

const curry3 = (func) => (a) => (b) => (c) => func(a, b, c)

const curryN = (func, received = []) => {
  return (...args) => {
    const props = received.concat(args)
    if (props.length >= func.length) {
      return func(...props)
    }

    return curryN(func, props)
  }
}
