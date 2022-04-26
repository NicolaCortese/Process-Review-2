
const bandFilter = (toBeFiltered) => {
  const filteredBand = []
  
  toBeFiltered.forEach(element => {
    if (element < 40) {
       filteredBand.push(40)
      } else if (element > 1000){
        filteredBand.push(1000)
      } else {
      filteredBand.push(element)
    }
    
  });
  
  return filteredBand;
}

module.exports = bandFilter;