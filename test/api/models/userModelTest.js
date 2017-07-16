const chai = require('chai');
const dirtyChai = require('dirty-chai');
const expect = chai.expect

chai.use(dirtyChai);

const User = require('../../../api/models/userModel.js')

describe('User', () => {
    it('should be invalid if name is empty', (done) => {
        const user = new User()

        user.validate(function(err) {
            expect(err.errors.name).to.exist()
            done()
        })
    })

    it('should be valid if name is not empty', (done) => {
        const user = new User({
          name: "userName",
        })

        user.validate(function(err) {
            expect(err.errors.name).to.not.exist()
            done()
        })
    })

    it('should be invalid if email is empty', (done) => {
        const user = new User()

        user.validate(function(err) {
            expect(err.errors.email).to.exist()
            done()
        })
    })

    it('should be valid if name is not empty', (done) => {
      const user = new User({
        email: "example@email.com",
      })

        user.validate(function(err) {
            expect(err.errors.email).to.not.exist()
            done()
        })
    })

    it('should be invalid if password is empty', (done) => {
        const user = new User()

        user.validate(function(err) {
            expect(err.errors.password).to.exist()
            done()
        })
    })

    it('should be valid if password is not empty', (done) => {
      const user = new User({
        password: "lukeIamYourFather",
      })

        user.validate(function(err) {
            expect(err.errors.password).to.not.exist()
            done()
        })
    })
})
