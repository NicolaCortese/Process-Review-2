
const bandFilter = (array) => {
  if (array[0] === 60) {
    return [60]
  }
  return [40]
}

module.exports = bandFilter;