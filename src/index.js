module.exports = function check(str, bracketsConfig) {
  if (str.length < 2) {
    return false;
  }
  let stack = [];
  const brackets = Object.fromEntries(bracketsConfig);

  for (let i = 0; i < str.length; i++) {
    const current = str[i]
    if (isClosedBracket(current)) {
      if (brackets[current] !== stack.pop()) return false;
    } else {
      stack.push(current);
    }
  }
  return true;

  function isClosedBracket(ch) {
    return ['(', '[', '{', '1', '3', '6', '7', '8', '|'].indexOf(ch) > -1;
  }
  
}
