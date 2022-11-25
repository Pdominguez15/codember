import fs from "fs";

const file = fs.readFileSync("challenge02/encrypted.txt", "utf-8");

const getMessageAscii = () => {
  const ASCII_LOWERCASE_START = 97;
  const ASCII_LOWERCASE_FINISH = 122;

  let result = "";
  let char_ascii = "";
  let code_ascii = 0;

  for (let char of file) {
    char_ascii = char_ascii + char;
    code_ascii = parseInt(char_ascii);
    if (char === " ") {
      result = result + char_ascii;
    } else if (
      code_ascii >= ASCII_LOWERCASE_START &&
      code_ascii <= ASCII_LOWERCASE_FINISH
    ) {
      result = result + String.fromCharCode(code_ascii);
      char_ascii = "";
    }
  }
  return result;
};

console.log(getMessageAscii());
