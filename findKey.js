const findKey = function(obj, callback) {
  let result = '';
  for (let key of Object.keys(obj)) {
    if (callback(obj[key])) {
      result = key;
      return result;
    } else {
      result = undefined;
    }
  }
  return result;
};

module.exports = findKey;

