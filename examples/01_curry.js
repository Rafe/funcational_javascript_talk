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

// create api action

const fetch = require('isomorphic-fetch')
const fetchGoogle = curry2(fetch)('http://google.com')

// create add6

const add = (a, b) => a + b

const add6 = curry2(add)(6)

// match

const match(pattern, str) => {
  str.match(pattern)
}

const isBeansauce = curry(match)('beansauce')
