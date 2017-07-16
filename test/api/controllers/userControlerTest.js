const sinon = require('sinon');
const chai = require('chai');
const dirtyChai = require('dirty-chai');
const expect = chai.expect

chai.use(dirtyChai);

const userController = require('../../../api/controllers/userController');
const User = require('../../../api/models/userModel')

describe("userController", () => {
  describe("list_users", () => {
    it("should respond", () => {
      let req, res, spy;

      req = res = {};
      spy = User.find = sinon.spy();

      userController.list_users(req, res);
      expect(spy.calledOnce).to.equal(true);
    });
  });

  // describe("create_user", () => {
  //   it("should respond", () => {
  //     let req, res, spy;
  //
  //     req = res = { 'body': {
  //       'name': "Mr. User",
  //       'email': "mr_user@email.com",
  //       'password': "P@ssw0rd"
  //     }}
  //
  //     spy = User.save = sinon.spy();
  //
  //     userController.create_user(req, res);
  //     expect(spy.calledOnce).to.equal(true);
  //   });
  // });

  describe("find_user", () => {
    it("should respond", () => {
      let req, res, spy;

      req = res = { 'params': { 'userId': 234321 } };
      spy = User.findById = sinon.spy();

      userController.find_user(req, res);
      expect(spy.calledOnce).to.equal(true);
    });
  });

  describe("update_user", () => {
    it("should respond", () => {
      let req, res, spy;

      req = res = { 'params': { 'userId': 234321 } };
      spy = User.findOneAndUpdate = sinon.spy();

      userController.update_user(req, res);
      expect(spy.calledOnce).to.equal(true);
    });
  });

  describe("delete_user", () => {
    it("should respond", () => {
      let req, res, spy;

      req = res = { 'params': { 'userId': 234321 } };
      spy = User.remove = sinon.spy();

      userController.delete_user(req, res);
      expect(spy.calledOnce).to.equal(true);
    });
  });
});
