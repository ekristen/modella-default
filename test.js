var defaults = require('./index.js')
var test = require('tape')
var model = require('modella')

test('function as defaultValue', function(t) {
  var User = model('user')
    .use(defaults)
    .attr('name', { defaultValue: 'other' })
    .attr('same', { defaultValue: new Date().getTime() })
    .attr('different', { defaultValue: function() { return new Date().getTime() }})
  
  var user1 = new User()
  
  setTimeout(function() {
    var user2 = new User()

    t.equal(user1.toJSON().same, user2.toJSON().same)
    t.notEqual(user1.toJSON().different, user2.toJSON().different)
    t.end()
  }, 250)
})
