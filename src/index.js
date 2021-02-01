module.exports = function check(str, bracketsConfig) {
  let stackArr = new Array;
  let bracketsObj = Object.fromEntries(bracketsConfig);
  str = str.split('');
  let i = 0;
  while (i <= str.length) {
    let el = bracketsObj[str[i]];
      if (stackArr[0] === str[i]) {
          stackArr.shift();
      } else if (el) {
          stackArr.unshift(el);
      } else {
          return false;
      }
    i++;
  }
  return stackArr.length === 0;
}