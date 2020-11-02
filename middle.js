const middle = function(arr) {
  let arrLength = arr.length;
  let resArr = [];
  if (arrLength === 1 || arrLength === 2) {
    return resArr;
  } else if (arrLength % 2 !== 0) {
    let ele = arr[Math.floor((arrLength / 2))];
    resArr.push(ele);
  } else {
    let ele1 = arr[Math.floor((arrLength / 2) - 1)];
    let ele2 = arr[Math.floor((arrLength / 2))];
    resArr.push(ele1);
    resArr.push(ele2);
  }
  return resArr;
};

module.exports = middle;
