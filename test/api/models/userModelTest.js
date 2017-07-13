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
          name: "userName",
        })

        user.validate(function(err) {
            expect(err.errors.name).to.not.exist
            done()
        })
    })

    it('should be invalid if email is empty', function(done) {
        var user = new User()

        user.validate(function(err) {
            expect(err.errors.email).to.exist
            done()
        })
    })

    it('should be valid if name is not empty', function(done) {
      var user = new User({
        email: "example@email.com",
      })

        user.validate(function(err) {
            expect(err.errors.email).to.not.exist
            done()
        })
    })

    it('should be invalid if password is empty', function(done) {
        var user = new User()

        user.validate(function(err) {
            expect(err.errors.password).to.exist
            done()
        })
    })

    it('should be valid if password is not empty', function(done) {
      var user = new User({
        password: "lukeIamYourFather",
      })

        user.validate(function(err) {
            expect(err.errors.password).to.not.exist
            done()
        })
    })
})
