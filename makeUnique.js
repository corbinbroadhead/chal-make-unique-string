// Write your solution below:
function makeUnique(str) {
    let uniqueStr = new Set(str.split(""))
    return [...uniqueStr].join("")
  }
console.log(makeUnique('corrbinn'));