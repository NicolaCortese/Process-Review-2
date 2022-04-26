const bandFilter = require('./bandFilter')

describe("BandFilter", () => {
  it("should return a value within the limits unchanged", () => {
    expect(bandFilter([60])).toEqual([60]);
  });

  it("should change a value to the lower limit if < lower limit", () => {
    expect(bandFilter([35])).toEqual([40]);
  });

  it("should change a value to the upper limit if > upper limit", () => {
    expect(bandFilter([1010])).toEqual([1000]);
  });

  it("should iterate through an array of 2 elements, without making changes", () => {
    expect(bandFilter([50,60])).toEqual([50,60]);
  });

  it("should iterate through an array of 2 elements, changing one element", () => {
    expect(bandFilter([30,60])).toEqual([40,60]);
  });
})