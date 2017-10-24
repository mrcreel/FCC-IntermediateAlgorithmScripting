function addTogether () {
  let Result
  const mainArgs = arguments
  if (mainArgs.length === 1 && mainArgs[0] === mainArgs[0] + 0) {
    return function () {
      const InnerArgs = arguments[0]
      if (InnerArgs === InnerArgs + 0) {
        Result = mainArgs[0] + InnerArgs
        return Result
      } else {
        return Result
      }
    }
  } else if (arguments[1] === arguments[1] + 0) {
    Result = arguments[0] + arguments[1]
    return Result
  } else {
    return Result
  }
}

addTogether(2, 3) // should return 5.
addTogether('http://bit.ly/IqT6zt') // should return undefined.
addTogether(2, '3') // should return undefined.
addTogether(2)(3) // should return 5.
addTogether(2)([3]) // should return undefined.
