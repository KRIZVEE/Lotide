const countOnly = function(allItems, itemToCount) {
  let result = {};

  for (let item of allItems) {
    if (itemToCount[item]) {
      if (result[item]) {
        result[item] += 1;
      } else {
        result[item] = 1;
      }
    }
  }

  console.log('res : ',result);
  return result;
};

module.exports = countOnly;