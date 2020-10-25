//Cart JS Script

//Actual Cart

var cart = {
    item1: "",
    item2: "",
    item3: "",
    item4: "",
    item5: "",
    item6: ""
};


//Item addition for Cart page
//Add Item-1
$("#add-btn-1").click(function() {
    // Make it go add to cart when button is clicked
    $(".hide-item-1").show();
    $(".hide-hr-1").show();
});

//Remove Item-2
$(".add-btn-2").click(function() {
    $(".hide-item-2").show();
    $(".hide-hr-2").show();
});

//Remove Item-3
$(".add-btn-3").click(function() {
    $(".hide-item-3").show();
    $(".hide-hr-3").show();
});

//Remove Item-4
$(".add-btn-4").click(function() {
    $(".hide-item-4").show();
    $(".hide-hr-4").show();
});

//Remove Item-5
$(".add-btn-5").click(function() {
    $(".hide-item-5").show();
    $(".hide-hr-5").show();
});

//Remove Item-6
$(".add-btn-6").click(function() {
    $(".hide-item-6").show();
    $(".hide-hr-6").show();
});



//Addition Buttons on Books

//Add Item-1
$("#add-btn-1").click(function() {
    addtoCart(this);
});

//Add Item-2
$("#add-btn-2").click(function() {
    addtoCart(this);
});

//Add Item-3
$("#add-btn-3").click(function() {
    addtoCart(this);
});

//Add Item-4
$("#add-btn-4").click(function() {
    addtoCart(this);
});

//Add Item-5
$("#add-btn-5").click(function() {
    addtoCart(this);
});

//Add Item-6
$("#add-btn-6").click(function() {
    addtoCart(this);
});



//Removal Buttons on Cart Page

//Remove Item-1
$("#rm-btn-1").click(function() {
    remFromCart(this);
});

//Remove Item-2
$("#rm-btn-2").click(function() {
    remFromCart(this);
});

//Remove Item-3
$("#rm-btn-3").click(function() {
    remFromCart(this);
});

//Remove Item-4
$("#rm-btn-4").click(function() {
    remFromCart(this);
});

//Remove Item-5
$("#rm-btn-5").click(function() {
    remFromCart(this);
});

//Remove Item-6
$("#rm-btn-6").click(function() {
    remFromCart(this);
});


//Removal Item function
function remFromCart(remButtonRef) {
    if (remButtonRef.id == "rm-btn-1") {
        cart.item1 = "Hello"
    } else if (remButtonRef.id == "rm-btn-2") {
        cart.item2 = "Hello"
    } else if (remButtonRef.id == "rm-btn-3") {
        cart.item3 = "Hello"
    } else if (remButtonRef.id == "rm-btn-4") {
        cart.item4 = "Hello"

    }
    else if(remButtonRef.id == "rm-btn-5"){
        cart.item5 = "Hello"
    }
    else if(remButtonRef.id == "rm-btn-6"){

        cart.item6 = "Hello"
    } else {}
    renderCart();
}

//Addition Item function

function addtoCart(addButtonRef){
    if(addButtonRef.id == "add-btn-1"){
    cart.item1 = "Test" 
    }
    else if(addButtonRef.id == "add-btn-2"){
        cart.item2 = "Test"      
    }
    else if(addButtonRef.id == "add-btn-3"){
        cart.item3 = "Test" 
    }
    else if(addButtonRef.id == "add-btn-4"){
        cart.item4 = "Test"
    }
    else if(addButtonRef.id == "add-btn-5"){
        cart.item5 = "Test"
    }
    else if(addButtonRef.id == "add-btn-6"){
        cart.item6 = ""
    }  
    else{}    
    cartCount();

    renderCart();
}


  function renderCart(remButtonRef){

    document.getElementById("cart1").value = cart.item1;
    document.getElementById("cart2").value = cart.item2;
    document.getElementById("cart3").value = cart.item3;
    document.getElementById("cart4").value = cart.item4;
    document.getElementById("cart5").value = cart.item5;
    document.getElementById("cart6").value = cart.item6;
}

//Remove expected shipping delivery date
//When items are all hidden
// if($(".hide-item-1").is(":hidden")){
//     $(".hide-item-6").hide();
//     $(".hide-hr-6").hide();
// }


//Cart item counting


function cartCount() {


    //Set the var cartTotCount to existing local storage
    var cartTotCount = localStorage.getItem('cartCount');


    //converts cartTotCount string to Int
    cartTotCount = parseInt(cartTotCount);


    //If cart has been pressed, increase local storage for cartCount
    if (cartTotCount){
        localStorage.setItem('cartCount', cartTotCount + 1);
        //document.querySelector('.cart-icon span').textContent = cartTotCount + 1;
        $("#cart-icon-count").text(cartTotCount + 1);
    }
    else{
        localStorage.setItem('cartCount', 1);
        $("#cart-icon-count").text(cartTotCount + 1);
    }

}

