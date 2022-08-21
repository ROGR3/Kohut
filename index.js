const { execSync } = require('child_process');
const fs = require("fs");
const { version } = require("./package.json");
const letters = JSON.parse(fs.readFileSync(__dirname + "/lettersSorted.json", "utf-8"))
exports.generate = async function generate(arguments) {
  if (arguments[0] == "-v" || arguments[0] == "--version") {
    console.log("v" + version)
    return
  }
  if (arguments[0] == "-h" || arguments[0] == "--help") {
    console.log("\x1b[32mKohut\x1b[0m v" + version)
    console.log("Usage: kohut [text] [year]")
    console.log("       kohut [string] [integer]")
    console.log()
    console.log("Options: Coming soon!")
    return
  }
  if (!arguments[0] || !arguments[1]) {
    console.log("You need to pass 'Text' value and a 'year' value. \nTry something like:\x1b[100m kohut atzuki 2003 \x1b[0m")
    return
  }
  if (arguments[0].length > 7) {
    console.log("Text property cannot have more than 7 letters!")
    return
  }
  if (!isInt(arguments[1])) {
    console.log("Year argument has to be an integer")
    console.log(arguments[1] + " is not an integer")
    return
  }
  const word = arguments[0]
  const year = arguments[1]
  console.log("Display \x1b[32m" + word + "\x1b[0m in year \x1b[32m" + year + "\x1b[0m")
  console.log("If you want to change or cancel, press \x1b[100mCTRL+C\x1b[0m")
  let counter = 6
  let intId = setInterval(() => {
    counter--
    printProgress("Starting in " + counter + "s")
    if (counter <= 0) {
      clearInterval(intId)
      console.log("")
      printProgress("Kohut started")
      console.log("")
    }
  }, 1000)
  setTimeout(() => {

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
  }, 7000)
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
function isInt(value) {
  return !isNaN(value) && (function (x) { return (x | 0) === x; })(parseFloat(value))
}
function printProgress(progress) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(progress);
}