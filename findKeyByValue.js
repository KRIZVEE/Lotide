const findKeyByValue = function(dict, dictIncomingvalue) {
  let dictKey = undefined;
  for (let key of Object.keys(dict)) {
    let value = dict[key];
    if (value === dictIncomingvalue) {
      return key;
    }
    // console.log(`key is ${key} and value is ${dict[key]}`);
  }
  return dictKey;
};

module.exports = findKeyByValue;

