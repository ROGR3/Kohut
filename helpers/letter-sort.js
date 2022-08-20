const fs = require("fs")
const letters = JSON.parse(fs.readFileSync("./letters.json", "utf-8"))
for (let letter in letters) {
  let rev = []
  for (let i = 0; i < 7; ++i) {
    for (let j = 0; j < 7; ++j) {
      rev.push(letters[letter][j * 7 + i])
    }
  }
  letters[letter] = rev
}
fs.writeFileSync("./lettersSorted.json", JSON.stringify(letters))