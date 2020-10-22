
var cartItem = []
var itemPrices = []
var shippingFee = 5

if (subTotal > 100){
    shippingFee = "Free";
} 

var taxOwing === (subTotal * 1.12)

if (cartItem == null){
    document.write("Your Cart is Empty!")
};
    else {document.write("Your Subtotal is: " + "$" + subTotal + <br> + "+ Tax at 12% = " + taxOwing + <br> "+ Shipping = " + shippingFee + <hr> + "Your total = " + (subTotal + taxOwing + shippingFee)
};


function sum(itemPrices) {
    if (toString.call(itemPrices) !== "[object Array]")
        return false;

        var subTotal = 0
        for (var i=0; i<itemPrices.length; i++)
            {
                if (isNaN(itemPrices[i])){
                    continue;
                }
                subTotal += Number(itemPrices[i]);
            }
}