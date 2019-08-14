//Practice Functions
//13/08/2019

const reverseString = (s) =>{
    return s.split("").reverse().join("")
}

const addThreeNumbers = (num1, num2, num3) =>{
    console.log("I am adding youer three numbers")
    return num1 + num2 + num3
}

const hello = () =>{
    console.log("HELLO")
}
const displayName = (name) =>{
    console.log(name)
}

const displayGreeting = (name) =>{
    hello()
    displayName(name)
}
hello()
displayName("Aaron")
console.log(addThreeNumbers(10,20,30))
console.log("hello world")
console.log(reverseString("hello world"))

let coffeeIsGrinding = false;

const pressGrindBeans = () => {
    if (coffeeIsGrinding) {
    console.log("Stopping the Grind");
    coffeeIsGrinding = false;
} else {
    console.log("Grinding is about to begin");
    coffeeIsGrinding = true;
    }
}

pressGrindBeans ();
pressGrindBeans ();

const takeOrder = (large, Coffee) =>{
    console.log('making $(large) $(coffee)');
}

drink("large","coffee")

const addUp = (num1, num2) => {
    return num1 + num2;
}
addUp(7,3);
console.log(addUp(2,5));