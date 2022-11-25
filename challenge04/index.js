const result = [];

const MAX = 98123;
const REAL_MAX = 55999;
const MIN = 11098;

let numberSplited = [];

const isCorrect = (number) => {
  const [a, b, c, d, e] = number
    .toString()
    .split("")
    .map((num) => parseInt(num));

  if (
    a <= b &&
    b <= c &&
    c <= d &&
    d <= e &&
    number.toString().includes("55")
  ) {
    return true;
  }
  return false;
};

for (let i = MIN; i <= REAL_MAX; i++) {
  isCorrect(i) && result.push(i);
}

console.log(result.length + "-" + result[55]);
