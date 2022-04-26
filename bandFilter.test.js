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

  it("should iterate through an array of 5 elements, changing 3 elements", () => {
    expect(bandFilter([30,60,1010,20,60])).toEqual([40,60,1000,40,60]);
  });

  it("should change the lower and upper limit", () => {
    expect(bandFilter([30,60,1010,20,60],20,900)).toEqual([30,60,900,20,60]);
  });

  it("should return an error if given an empty array", () => {
    expect(() => { bandFilter([]) }).toThrow("Error: No frequencies supplied")
  });


  // it("should return an error if array contains data types other than integers", () => {
  //   expect(bandFilter(["hello"])).toEqual("Error: Wrong input type");
  // });
})