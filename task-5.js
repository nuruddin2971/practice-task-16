const mergeInventory = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }
  let margeArr = [...arr1, ...arr2];
  return margeArr;
};
const highestScore = (scoreArr) => {
  if (!Array.isArray(scoreArr)) {
    return "Invalid";
  }
  return Math.max(...scoreArr);
};

let resutl1 = mergeInventory([1, 2], [3, 4]);
let resutl2 = highestScore([3, 7, 2, 9, 4]);
let resutl3 = highestScore("3,7,2");

console.log(resutl1);
console.log(resutl2);
console.log(resutl3);
