const countLetters = function(sentence) {
  let arrLetters = sentence.split(' ').join('');
  let result = {};
  for (let char of arrLetters) {
    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }
  return result;
};

module.exports = countLetters;
