const bandFilter = require('./bandFilter')

describe("BandFilter", () => {
  it("should return a value within the limits unchanged", () => {
    expect(bandFilter([60])).toEqual([60]);
  });

  it("should change a value to the lower limit if < lower limit", () => {
    expect(bandFilter([35])).toEqual([40]);
  });
})