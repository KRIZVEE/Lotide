const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemToCount){
  let result = {}

  for (let item of allItems){
    if(itemToCount[item]){
      if(result[item]){
        result[item] += 1
      }else{
        result[item] = 1;
      }
    }
  }

  // below code also works

  // for(let item of allItems){
  //   for (let key of Object.keys(itemToCount)){
  //     if(item === key && itemToCount[key]===true ){
  //       if(result.hasOwnProperty(item)){
  //         result[item] += 1;
  //       }else{
  //         result[item] = 1;
  //       }
  //     }
  //   }
  // }

  console.log('res : ',result);  
  return result;
}
const firstNames = [
  "Karima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Karima",
  "Fang",
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

/*

workign with objects

var p = {
  0: "value1",
  "b": "value2",
  key: "value3"
};

for (var key of Object.keys(p)) {
  console.log(key + " -> " + p[key])
}

var p = {
  "p1": "value1",
  "p2": "value2",
  "p3": "value3"
};

for (var key in p) {
  if (p.hasOwnProperty(key)) {
      console.log(key + " -> " + p[key]);
  }
}
 */