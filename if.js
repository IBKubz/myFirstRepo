//Practice If Statements
//Aaron Kubaszewski 13/08/2019

let weather = "rain"

if (weather == "sunny"){
    console.log("Better pack the sunscreen")
}else if (weather == "rain"){
    console.log("Better pack the raincoat")
}else{
    console.log("ok have a good day")
}

//write a program with an age to see if someone would get served
// in the pub

let  legalAge = 18
let customerAge = 40

if (customerAge >= legalAge){
    console.log("Here have a pint")
}else{
    console.log("Your Barred")
}

//Dodgy Stans Nightclub
// Female < 25 Get in for free
// Female > 35 £150
// Male < 25 £10
// Male > 35 £150
// Anyone else £15

let gender = "female"
let age = "27"

if (gender == "female" && age < 25){
    console.log("you get in for free")
}
else if (gender == "female" && age >35){
    console.log("That will be £150")
}
else if (gender == "male" && age <25){
    console.log("that's 10 pounds please")
}
else if (gender == "male" && age >35){
    console.log("150 pounds please")
}
else{
    console.log("15 pounds for entry please")
}

let day = "Saturday";

if (day == "Saturday" || day == "Sunday"){
    console.log("It's the weekend!")
}
else {
    console.log("whens the next weekend?")
 }

let password = "ygytgytgytgf"

if (password.length < 8){
    console.log("password not strong enough")
}
else {
    console.log("A Verification link has been sent to your email")
}

let num = "30"

if (num / 3 || 5){
    console.log("the number is divisible by 3 or 5")
}