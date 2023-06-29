/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if(i === nums.length) return 1;

  return nums[i] * product(nums,  i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, longestWord = 0) {
  if(i  === words.length) return longestWord

  if(words[i].length > longestWord){
    longestWord = words[i].length;
  }

  return longest(words, i + 1, longestWord)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, returnStr = "") {
  if(i === str.length || i > str.length) return returnStr;
  
  returnStr += str[i];

  return everyOther(str, i + 2, returnStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */
function isPalindrome(str, i = 0) {
  if(i === str.length) return true;

  if(str[i] !== str[str.length-1-i]){
    return false;
  }
  else{
    return isPalindrome(str, i + 1);
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if(i === arr.length) return -1;
  if(arr[i] === val){
    return i;
  }
  else{
    return findIndex(arr, val, i + 1);
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = 0, returnStr = "") {
  if(i === str.length) return returnStr;
  returnStr = str[i] + returnStr; 
  return revString(str, i + 1, returnStr)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let returnArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") returnArr.push(obj[key]);
    if (typeof obj[key] === "object") returnArr.push(...gatherStrings(obj[key]));
  }
  return returnArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
