let a = 123;
function isPalindrome(x) {
  let b = `${x}`;
  let tezeSoz = "";
  for (let i = b.length - 1; i >= 0; i--) {
    tezeSoz += b[i];
  }
  if (b == tezeSoz) {
    return true;
  } else {
    return false;
  }
  // console.log(tezeSoz);
}
isPalindrome(a);
