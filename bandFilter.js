
const bandFilter = (toBeFiltered, lowLimit = 40, highLimit = 1000) => {
  
  if (toBeFiltered.length === 0) {
    throw new Error("Error: No frequencies supplied");
  }
  
  const filteredBand = []
  
  toBeFiltered.forEach(frequency => {
    // if (!frequency.isInteger()) {
    //   throw new Error("Error wrong input type supplied");
    // }
    if (frequency < lowLimit) {
       filteredBand.push(lowLimit)
      } else if (frequency > highLimit){
        filteredBand.push(highLimit)
      } else {
      filteredBand.push(frequency)
    }
  });
  
  return filteredBand;
}

module.exports = bandFilter;