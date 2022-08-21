const { execSync } = require('child_process');
const fs = require("fs")
const letters = JSON.parse(fs.readFileSync(__dirname + "/lettersSorted.json", "utf-8"))

exports.generate = async function generate(arguments) {
  const word = arguments[0]
  const year = arguments[1]
  console.log("Display " + word + " in year " + year)
  console.log("If you want to change or cancel, press CTRL+C. You have 10 seconds.")
  // setTimeout(() => { }, 10000)

  let month = 1
  let day = calculateStartDay(month, year)
  let date = `${year}-${month}-${day}`

  let splittedWord = word.split("")

  for (let i = 0; i < word.length; ++i) {
    console.log(splittedWord[i] + "  is done.")
    for (let j = 0; j < 49; ++j) {
      if (!letters[splittedWord[i]][j]) {
        for (let k = 0; k < 1; ++k) {
          fs.writeFileSync("fileName", JSON.stringify(Math.random()))
          execSync(`git add .`);
          execSync(`git commit -m "idk what am I doing" --date="${date}"`);
        }
      } else {
        for (let k = 0; k < 4; ++k) {
          fs.writeFileSync("fileName", JSON.stringify(Math.random()))
          execSync(`git add .`);
          execSync(`git commit -m "idk what am I doing" --date="${date}"`);
        }
      }
      if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        if (day == 31) {
          month++
          day = 1
        }
        else {
          day++
        }
      } else if (month == 2) {
        if (isLeapYear(year)) {
          if (day == 29) {
            month++
            day = 1
          } else {
            day++
          }
        } else {
          if (day == 28) {
            month++
            day = 1
          } else {
            day++
          }
        }
      } else {
        if (day == 30) {
          month++
          day = 1
        } else {
          day++
        }
      }
      date = `${year}-${month}-${day}`
    }
  }
  execSync(`git push`);
}


function calculateStartDay(month, year) {
  let day = 1
  while (whatDay(day, month, year) != 0) {
    day++
  }
  return day
}

function whatDay(day, month, year) {
  let date = new Date(`${year}-${month}-${day}`);
  return date.getDay()
}

function isLeapYear(year) {
  return (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0));
}