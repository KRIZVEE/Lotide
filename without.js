const without = function(source, itemsToRemove) {
  let res = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i]))    {
      res.push(source[i]);
    }
  }
  return res;
};

module.exports = without;