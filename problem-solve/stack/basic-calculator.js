const calculate = (s) => {
  let res = 0;
  let num = 0;
  let sign = 1;
  let stack = [1];

  for (let ch of s) {
    if (ch === " ") continue;

    if (!isNaN(ch)) {
      num = num * 10 + parseInt(ch);
      continue;
    }

    if (ch === "(") {
      stack.push(sign);
      continue;
    }

    if (ch === ")") {
      stack.pop();
      continue;
    }

    if (ch === "+" || ch === "-") {
      res += sign * num;
      num = 0;

      sign = (ch === "+" ? 1 : -1) * stack[stack.length - 1];
    }
  }

  return res + sign * num;
};

console.log(calculate("(1+(4+5+2)-3)+(6+8)"));
console.log(calculate(" 2-1 + 2 "));
console.log(calculate("2147483647"));
console.log(calculate("1-(     -2)"));
console.log(calculate("- (3 + (4 + 5))"));
console.log(calculate("2-4-(8+2-6+(8+4-(1)+8-10))")); // -15
console.log(
  calculate(
    "1-(3+5-2+(3+19-(3-1-4+(9-4-(4-(1+(3)-2)-5)+8-(3-5)-1)-4)-5)-4+3-9)-4-(3+2-5)-10"
  )
); //-15
