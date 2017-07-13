var expect = require('chai').expect

var User = require('../../../api/models/userModel.js')

describe('User', function() {
    it('should be invalid if name is empty', function(done) {
        var user = new User()

        user.validate(function(err) {
            expect(err.errors.name).to.exist
            done()
        })
    })

    it('should be valid if name is not empty', function(done) {
        var user = new User({
          name: "userName"
        })

        user.validate(function(err) {
            expect(err).to.not.exist
            done()
        })
    })
})
