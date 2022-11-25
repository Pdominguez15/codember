import fs from "fs";

const file = fs.readFileSync("challenge01/users.txt", "utf-8");

const KEYS = ["usr", "eme", "psw", "age", "loc", "fll"];

const correctUsers = file
  .split("\n\n")
  .map((line) => line.replaceAll("\n", " ").split(" "))
  .map((planeUser) =>
    Object.fromEntries(planeUser.map((property) => property.split(":")))
  )
  .filter((user) => KEYS.every((key) => key in user));

const getNumberOfCorrectUsers = () => correctUsers.length;
const getUsrOfLastCorrectUser = () => correctUsers.at(-1).usr;

console.log(getNumberOfCorrectUsers() + getUsrOfLastCorrectUser());
