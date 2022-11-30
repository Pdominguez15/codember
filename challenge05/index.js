import fs from "fs";

const mecenasName = JSON.parse(
  fs.readFileSync("challenge05/mecenas.json", "utf8")
);

const getLastSurvivor = (names) => {
  let survivors = names.map((mecena, index) => ({ name: mecena, index }));

  let initialLength;

  while (survivors.length > 1) {
    initialLength = survivors.length;

    survivors = survivors.filter((survivor, index) => index % 2 === 0);

    if (initialLength % 2 !== 0) {
      survivors.shift();
    }
  }
  return survivors[0].name + "-" + survivors[0].index;
};
console.log(getLastSurvivor(mecenasName));
