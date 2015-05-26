
module.exports = function(Model) {
  Model.on('initialize', function(Model) {
    Object.keys(Model.attrs).forEach(function(m) {
      if (typeof Model.attrs[m] == 'function') {
        Model.attrs[m] = Model.attrs[m](Model)
      }
    })
  })
}
