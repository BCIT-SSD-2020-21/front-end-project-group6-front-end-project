 var cartItem = []
var itemPrices = []
var shippingFee = "Free"

function sum(itemPrices) {
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





function addToCart(addButtonRef){
    if(addButtonRef.id == "add-btn-1"){
        cart.item1 = "Product 1";
    }
    else if(addButtonRef.id == "add-btn-2"){
        cart.item2 = "Product 2";        
    }
    else if(addButtonRef.id == "add-btn-3"){
        cart.item3 = "Product 3"; 
    }
    else if(addButtonRef.id == "add-btn-4"){
        cart.item4 = "Product 4";
    }
    else if(addButtonRef.id == "add-btn-5"){
        cart.item5 = "Product 5";
    }
    else {
        cart.item6 = "Product 6";
    }  
    
    var jsonCart = JSON.stringify(cart);
    localStorage.setItem("cart", jsonCart);
    renderCart();
    
 }
//Removal Item function
//  function remFromCart(remButtonRef){
//     if(remButtonRef.id == "rm-btn-1"){
//         cart.item1 = "Hello";
//     }
//     else if(remButtonRef.id == "rm-btn-2"){
//         cart.item2 = "Hello";           
//     }
//     else if(remButtonRef.id == "rm-btn-3"){
//         cart.item3 = "Hello" ;
//     }
//     else if(remButtonRef.id == "rm-btn-4"){
//         cart.item4 = "Hello";
//     }
//     else if(remButtonRef.id == "rm-btn-5"){
//         cart.item5 = "Hello";
//     }
//     else {
//         cart.item6 = "Hello";
//     }  
//     var jsonCart = JSON.stringify(cart);
//     localStorage.setItem("cart", jsonCart);
//     renderCart();
//  }
  function renderCart(){
    document.getElementById("cart1").value = cart.item1;
    document.getElementById("cart2").value = cart.item2;
    document.getElementById("cart3").value = cart.item3;
    document.getElementById("cart4").value = cart.item4;
    document.getElementById("cart5").value = cart.item5;
    document.getElementById("cart6").value = cart.item6;
  }
  function initCart(){
      var jsonCart = localStorage.getItem("cart");
      if(jsonCart !== null){
          cart = JSON.parse(jsonCart);
      }
      renderCart();
  }