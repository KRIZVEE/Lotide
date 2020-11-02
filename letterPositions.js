const letterPositions = function(sentence) {
  const results = {};
  let letterStr = sentence;
  for (let key of Object.keys(letterStr)) {
    let keyIndex = Number(key);
    let keyValue = letterStr[key];
    if (results[keyValue]) {
      results[keyValue].push(keyIndex);
    } else {
      results[keyValue] = [keyIndex];
    }
  }
  return results;
};

module.exports = letterPositions;
