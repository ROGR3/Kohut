const { execSync } = require('child_process');
const fs = require("fs")
const letters = JSON.parse(fs.readFileSync(__dirname + "/lettersSorted.json", "utf-8"))

exports.generate = async function generate(arguments) {
  const word = arguments[0]
  const year = arguments[1]
  console.log("Display " + word + " in year " + year)
  console.log("If you want to change or cancel, press CTRL+C. You have 10 seconds.")
  setTimeout(() => {
    console.log("starting")
    let { day, month } = calculateStartDay(word.length, 1, year)
    let date = `${year}-${month}-${day}`
    let splittedWord = word.split("")
    for (let i = 0; i < word.length; ++i) {
      console.log(splittedWord[i] + "  is done.")
      for (let j = 0; j < 49; ++j) {
        if (!letters[splittedWord[i]][j]) {
          for (let k = 0; k < 1; ++k) {
            fs.writeFileSync("fileName", JSON.stringify(Math.random()))
            execSync(`git add .`);
            execSync(`git commit -m "${date}" --date="${date}"`);
          }
        } else {
          for (let k = 0; k < 4; ++k) {
            fs.writeFileSync("fileName", JSON.stringify(Math.random()))
            execSync(`git add .`);
            execSync(`git commit -m "${date}" --date="${date}"`);
          }
        }
        //
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
    console.log("Deploying to github")
    execSync(`git push`);
    console.log("Done")
  }, 10)
}


function calculateStartDay(wordLength, month, year) {
  const letterWidth = 7
  const daysInWeek = 7

  let day = Math.floor((daysInWeek - wordLength + 1) * letterWidth / 2 * 7 + daysInWeek)
  month = Math.floor((day % 365) / 30) + 1;
  day = Math.floor((day % 365) % 7) + 1;
  console.log(day, month, year)
  let dayInWeek = whatDay(day, month, year)
  console.log(dayInWeek)
  let startingDay = day - dayInWeek < 0 ? day + (daysInWeek - dayInWeek) : day - dayInWeek
  return { day: startingDay, month }
}

function whatDay(day, month, year) {
  let date = new Date(`${year}-${month}-${day}`);
  return date.getDay()
}

function isLeapYear(year) {
  return (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0));
}