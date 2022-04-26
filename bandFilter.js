
const bandFilter = (array) => {
  if (array[0] < 40) {
    return [40]
  } else if (array[0] > 1000){
    return [1000]
  }
  return array
}

module.exports = bandFilter;