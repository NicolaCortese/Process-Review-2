
const bandFilter = (toBeFiltered, lowLimit = 40, highLimit = 1000) => {
  const filteredBand = []
  
  toBeFiltered.forEach(element => {
    if (element < lowLimit) {
       filteredBand.push(lowLimit)
      } else if (element > highLimit){
        filteredBand.push(highLimit)
      } else {
      filteredBand.push(element)
    }
  });
  
  return filteredBand;
}

module.exports = bandFilter;