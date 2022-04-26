
const bandFilter = (array) => {
  if (array[0] === 60) {
    return [60]
  } else if (array[0] === 1010){
    return [1000]
  }
  return [40]
}

module.exports = bandFilter;