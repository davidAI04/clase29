const expect = require("chai").expect;
const calculator = require("../app");

describe("Calculator test using EXPECT interface from CHAI module: ", function () {
  describe("Check addTest function :", function () {
    it("Check the returned value using : expect(value).to.equal('value) : ", function () {
      result = calculator.addTested("text");
      expect(result).to.equal("text tested")
    });

    it("Check the returned va;ue using: expect(value).to.be.a('value') : ", function () {
      result = calculator.addTested("text");
      expect(result).to.be.a('string');
    });

    it("CHeck the returned value using: expect(value).to.have.lengthOf(value): ", function () {
      result = calculator.addTested("text");
      expect(result).to.have.lengthOf(11);
    })
  })
})