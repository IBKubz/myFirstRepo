//ATM PRACTISE
//AARON KUBASZEWSKI 13/08/2019\

let pin = false
let correctPin = "8888"
let balance = "250"
let withdraw = "50"
const correctPin = (8888) => {
    if (correctPin) {
        console.log("retry");
        correctPin = false;
    }else{
        console.log("correct");
        correctPin = true
    }
}