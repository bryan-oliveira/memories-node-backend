const sinon = require('sinon');
const chai = require('chai');
const dirtyChai = require('dirty-chai');
const expect = chai.expect

chai.use(dirtyChai);

const userController = require('../../../api/controllers/userController');
const dbHelper = require('../../../helpers/dbUserHelper')

describe("userController", () => {
  describe("list_users", () => {
    it("should respond", (done) => {
      let req, res, spy;

      req = res = {};
      spy = dbHelper.find_all = sinon.spy();

      userController.list_users(req, res);
      expect(spy.calledOnce).to.equal(true);
      done()
    });
  });

  describe("create_user", () => {
    it("should respond", (done) => {
      let req, res, spy;

      req = res = { 'body': {
        'name': "Mr. User",
        'email': "mr_user@email.com",
        'password': "P@ssw0rd"
      }}

      spy = dbHelper.save_user = sinon.spy();

      userController.create_user(req, res);
      expect(spy.calledOnce).to.equal(true);
      done()
    });
  });

  describe("find_user", () => {
    it("should respond", (done) => {
      let req, res, spy;

      req = res = { 'params': { 'userId': 234321 } };
      spy = dbHelper.find_user = sinon.spy();

      userController.find_user(req, res);
      expect(spy.calledOnce).to.equal(true);
      done()
    });
  });

  describe("update_user", () => {
    it("should respond", (done) => {
      let req, res, spy;

      req = res = { 'params': { 'userId': 234321 } };
      spy = dbHelper.update_user = sinon.spy();

      userController.update_user(req, res);
      expect(spy.calledOnce).to.equal(true);
      done()
    });
  });

  describe("delete_user", () => {
    it("should respond", (done) => {
      let req, res, spy;

      req = res = { 'params': { 'userId': 234321 } };
      spy = dbHelper.delete_user = sinon.spy();

      userController.delete_user(req, res);
      expect(spy.calledOnce).to.equal(true);
      done()
    });
  });
});
