var cart = [];

function setCart(newCart) {
  cart = newCart;
}
function getCart() {
  return cart
}

function addToCart(item) {
  //sets price for item by generating a random number between 0 and 100.
  var price = Math.floor((Math.random() * 100) + 1)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
