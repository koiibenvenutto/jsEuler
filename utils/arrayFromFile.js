const fs = require("fs");

function arrayFromFile(filePath) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(filePath, "utf8");

    // Split the data by comma and remove the quotes from each name
    const names = data.split(",").map((name) => name.replace(/"/g, "").trim());

    return names;
  } catch (err) {
    console.error("Error reading the file:", err);
    return [];
  }
}

module.exports = arrayFromFile;

