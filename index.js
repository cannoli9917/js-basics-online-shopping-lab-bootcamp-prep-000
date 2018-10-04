var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = (Math.floor(Math.random() * 100) + 1);
 var newObj = {"itemName": item, "itemPrice": price};
 cart.push(newObj);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  }
<<<<<<< HEAD
  else if (cart.length === 1) { 
    return (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`);
  }
  else {
    var string = `In your cart, you have `;
    for (var i = 0; i < (cart.length - 1); i++) {
    string += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
    }
    string += `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
    return string;
=======
  else {
  for (var i = 0; i < cart.length; i++) {
    var string = `In your cart, you have `;
    var itemString = `${cart[i].itemName} at ${cart[i].itemPrice}`;
    return string.concat(itemString);
  }
>>>>>>> 999c98c87b7bfff77d7e64a699e532aa6b74ce26
  }
}

function total() {
  var totalPrice = 0;
  for (var i = 0; i < cart.length; i++) {
    totalPrice += cart[i].itemPrice;
  }
  return totalPrice;
}

function removeFromCart(item) {
  var element;
  for (var i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      element = i;
      cart.splice(element,1);
      return cart;
    }
  }
  return `That item is not in your cart.`;
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    var cost = total();
    cart = [];
    return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
  }
  else {
    return `Sorry, we don't have a credit card on file for you.`
  }
}
