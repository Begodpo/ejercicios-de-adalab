const fs = require("fs");

const handleFile = (err, fileContent) => {
  if (err !== null) {
    console.log("Error:", err);
  } else {
    const inputFile = JSON.parse(fileContent);
    inputFile.age = 37;
    console.log("datos: ", inputFile);
  }
};

fs.readFile("./input-file.json", "utf8", handleFile);

//Ejercicio incompleto
