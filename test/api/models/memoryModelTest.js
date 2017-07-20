const chai = require('chai');
const dirtyChai = require('dirty-chai');

const expect = chai.expect;

chai.use(dirtyChai);
chai.use(require('chai-datetime'));

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

  it('should be valid if photo count is 0 upon Memory creation', (done) => {
    const memory = new Memory();

    memory.validate((err) => {
      expect(memory.photo_count).to.equal(0);
      expect(err.errors.photo_count).to.not.exist();
      done();
    });
  });

  it('should be valid if friend count is 0 upon Memory creation', (done) => {
    const memory = new Memory();

    memory.validate((err) => {
      expect(memory.friend_count).to.equal(0);
      expect(err.errors.friend_count).to.not.exist();
      done();
    });
  });

  it('should be valid if cover photo is 0 upon new Memory creation', (done) => {
    const memory = new Memory({
      cover_photo: 0,
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

  it('should be invalid if startDateTime is empty', (done) => {
    const memory = new Memory();

    memory.validate((err) => {
      expect(err.errors.startDateTime).to.exist();
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

  it('should be valid if startDateTime is before endDateTime', (done) => {
    const memory = new Memory({
      startDateTime: new Date('10/05/1986'),
      endDateTime: new Date('11/05/1986'),
    });

    memory.validate(() => {
      expect(memory.startDateTime).to.be.beforeDate(memory.endDateTime);
      done();
    });
  });

  it('should be invalid if startDateTime is after endDateTime', (done) => {
    const memory = new Memory({
      startDateTime: new Date('11/05/1986'),
      endDateTime: new Date('10/05/1986'),
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

  it('should be invalid if endDateTime is empty', (done) => {
    const memory = new Memory();

    memory.validate((err) => {
      expect(err.errors.endDateTime).to.exist();
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
