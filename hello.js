console.log("Hello")

let birthDate = new Date(1996/12/03)
let today = Date.now()
let birthday = new Date(2019/12/03)

let newDiff = birthday.getTime() - today
let newDayDiff = Math.floor(newDiff / (1000 * 60 * 60 *24))
console.log 