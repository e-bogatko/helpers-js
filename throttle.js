// with last call function
function throttle(func, ms) {
  let isThrottled = false
  let savedArgs
  let savedThis

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments
      savedThis = this
      return
    }

    func.apply(this, arguments)

    isThrottled = true

    setTimeout(function () {
      isThrottled = false
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs)
        savedArgs = savedThis = null
      }
    }, ms)
  }

  return wrapper
}

// without last call function
function throttle(func, ms) {
  let isThrottled = false

  function wrapper() {
    if (isThrottled) {
      return
    }

    func.apply(this, arguments)

    isThrottled = true

    setTimeout(function () {
      isThrottled = false
    }, ms)
  }

  return wrapper
}
