const chai = require('chai');
const dirtyChai = require('dirty-chai');

const expect = chai.expect;

chai.use(dirtyChai);

const Memory = require('../../../api/models/memoryModel.js');

describe('Memory', () => {
  it('should be invalid if name is empty', (done) => {
    const memory = new Memory();

    memory.validate((err) => {
      expect(err.errors.name).to.exist();
      done();
    });
  });

  it('should be valid if name is not empty', (done) => {
    const memory = new Memory({
      name: 'Xmas in NY',
    });

    memory.validate((err) => {
      expect(err.errors.name).to.not.exist();
      done();
    });
  });

  it('should be invalid if photo count is empty', (done) => {
    const memory = new Memory();

    memory.validate((err) => {
      expect(err.errors.photo_count).to.exist();
      done();
    });
  });

  it('should be valid if photo count is not empty', (done) => {
    const memory = new Memory({
      photo_count: 0,
    });

    memory.validate((err) => {
      expect(err.errors.photo_count).to.not.exist();
      done();
    });
  });

  it('should be invalid if cover photo is empty', (done) => {
    const memory = new Memory();

    memory.validate((err) => {
      expect(err.errors.cover_photo).to.exist();
      done();
    });
  });

  it('should be valid if cover photo is not empty', (done) => {
    const memory = new Memory({
      cover_photo: 'http://whatHappensInVegasStaysInVegas.com/pics',
    });

    memory.validate((err) => {
      expect(err.errors.cover_photo).to.not.exist();
      done();
    });
  });

  it('should be valid if startDateTime is a Date()', (done) => {
    const memory = new Memory({
      startDateTime: '10/05/1986',
    });

    memory.validate((err) => {
      expect(err.errors.startDateTime).to.not.exist();
      done();
    });
  });

  it('should be invalid if startDateTime is not a Date()', (done) => {
    const memory = new Memory({
      startDateTime: 'imAstring',
    });

    memory.validate((err) => {
      expect(err.errors.startDateTime).to.exist();
      done();
    });
  });

  it('should be valid if endDateTime is a Date()', (done) => {
    const memory = new Memory({
      endDateTime: '10/05/1986',
    });

    memory.validate((err) => {
      expect(err.errors.endDateTime).to.not.exist();
      done();
    });
  });

  it('should be invalid if endDateTime is not a Date()', (done) => {
    const memory = new Memory({
      endDateTime: 'imAstring',
    });

    memory.validate((err) => {
      expect(err.errors.endDateTime).to.exist();
      done();
    });
  });
});
