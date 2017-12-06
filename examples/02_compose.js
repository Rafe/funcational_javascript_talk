const compose2 = (a, b) => {
  return (...args) => a(b(...args))
}

const compose = (...funcs) => {
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

// string process composition:

const toUpperCase = (string) => string.toUpperCase()
const replaceBeanToSauce = (string) => string.replace('bean', 'sauce')

console.log(compose(toUpperCase, replaceBeanToSauce)('bean and sauce'))

// redux middleware for log

const middleware = (store) => (next) => (action) => {
  log(action)
  next(action)
}

applyMiddleware = (middelwares, store) => {
  return compose(middlewares)(store)
}
