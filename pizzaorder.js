let orderCount = 0; 

const takeOrder = (topping, secondtopping) => {
  console.log(`Pizza with ${topping} and ${secondtopping}`);
  orderCount++;
}

takeOrder("cheese", "pepperoni");
