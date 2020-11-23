var cartItem = []
var itemPrices = []
var shippingFee = "Free"

function sum(itemPrices) {


    // let bookSelected = localStorage.getItem('bookSelected');
    // bookSelected = JSON.parse(bookSelected);

    console.log(bookSelected);

    if (toString.call(itemPrices) !== "[object Array]")
        return false;

    var subTotal = 0
    for (var i = 0; i < itemPrices.length; i++) {
        if (isNaN(itemPrices[i])) {
            continue;
        }
        subTotal += Number(itemPrices[i]);
    }
}

if (subTotal < 100) {
    shippingFee === 5;
}

var taxOwing = (subTotal * 1.12)

if (cartItem == null) {
    document.write("Your Cart is Empty!");
} else {
    document.write("Your Subtotal is: " + "$" + subTotal + "<br>" + "+ Tax at 12% = " + taxOwing + "<br>" + "+ Shipping = $" + shippingFee + "<hr>" + "Your total = " + (subTotal + taxOwing + Number(shippingFee)));
}