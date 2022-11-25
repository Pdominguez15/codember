import fs from "fs";

const colors = JSON.parse(fs.readFileSync("challenge03/colors.txt", "utf8"));

const getLongestZebras = (colors) => {
  let currentZebras = [colors[0]];
  let longestZebras = [...currentZebras];
  let color = "";

  for (let i = 1; i < colors.length; i++) {
    color = colors[i];

    if (currentZebras.length === 1 && currentZebras.at(-1) !== color) {
      currentZebras.push(color);
    } else if (currentZebras.at(-2) === color) {
      currentZebras.push(color);
    } else if (currentZebras.at(-1) !== color) {
      currentZebras = [currentZebras.at(-1), color];
    } else {
      currentZebras = [color];
    }

    if (currentZebras.length >= longestZebras.length) {
      longestZebras = [...currentZebras];
    }
  }

  return longestZebras.length + "@" + longestZebras.at(-1);
};

console.log(getLongestZebras(colors));
