const join = (...args) => {
  return args
    .filter(arg => arg !== '/')
    .map(pathPart => pathPart.replace(/(^\/|\/$)/g, ''))
    .join('/') + '/'
}

module.exports.join = join
