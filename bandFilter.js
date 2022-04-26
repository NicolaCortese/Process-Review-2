
const bandFilter = (toBeFiltered, lowLimit = 40, highLimit = 1000) => {
  
  if (toBeFiltered.length === 0) {
    throw new Error("Error: No frequencies supplied");
  }
  
  const filteredBand = []
  
  toBeFiltered.forEach(frequencies => {
    if (frequencies < lowLimit) {
       filteredBand.push(lowLimit)
      } else if (frequencies > highLimit){
        filteredBand.push(highLimit)
      } else {
      filteredBand.push(frequencies)
    }
  });
  
  return filteredBand;
}

module.exports = bandFilter;