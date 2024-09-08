const isPalindrome = (num) => {
  if (num < 0) return false;

  if (num % 10 === 0 && num === 0) return false;

  let revNum = 0;
  let originalNum = num;

  while (originalNum !== 0) {
    let digit = originalNum % 10;
    revNum = revNum * 10 + digit;
    originalNum = Math.floor(originalNum / 10);
  }

  return revNum === num;
};

const isPalindromeOptimized = (num) => {
  // Negative numbers are not palindromes
  if (num < 0) return false;

  // Numbers ending with 0 are not palindromes unless the number is 0
  if (num % 10 === 0 && num === 0) return false;

  let halfRev = 0;

  while (num > halfRev) {
    let digit = num % 10;
    halfRev = halfRev * 10 + digit;
    num = Math.floor(num / 10);
  }

  // For even number of digits, number should be equal to reversedHalf
  // For odd number of digits, reversedHalf // 10 removes the middle digit
  return num === halfRev || num === Math.floor(halfRev / 10);
};

const num = 12321;
console.log(isPalindrome(num));
console.log(isPalindromeOptimized(num));
