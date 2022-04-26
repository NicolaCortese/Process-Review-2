const bandFilter = require('./bandFilter')

describe("BandFilter", () => {
  it("should return a value within the limits unchanged", () => {
    expect(bandFilter([60])).toEqual([60]);
  });
})