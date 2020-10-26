//Cart JS Script

//Actual Cart

// var cart = {
//     item1: "",
//     item2: "",
//     item3: "",
//     item4: "",
//     item5: "",
//     item6: ""
// };

var books = [
    {
        url: '',
        title: 'Coding for Beginners',
        price: '$25',
        isSelected: 0
    },
    {
        url: '',
        title: 'Javascript for Beginners',
        price: '$30',
        isSelected: 0
    },
    {
        url: '',
        title: 'SQL Programming For Beginners',
        price: '$25',
        isSelected: 0
    },
    {
        url: '',
        title: 'Database Management System',
        price: '$25',
        isSelected: 0
    },
    {
        url: '',
        title: 'SQL Database Programming',
        price: '$30',
        isSelected: 0
    },
    {
        url: '',
        title: 'Essential of Web Database Development',
        price: '$25',
        isSelected: 0
    }
]



//Startup Card load
loadCartTotCount();



//Item addition for Cart page
//Add Item-1
// $("#add-btn-1").click(function(){
//     // Make it go add to cart when button is clicked
//     $(".hide-item-1").show();
//     $(".hide-hr-1").show();
//  });

// //Remove Item-2
// $(".add-btn-2").click(function(){
//     $(".hide-item-2").show();
//     $(".hide-hr-2").show();
//  });

//  //Remove Item-3
// $(".add-btn-3").click(function(){
//     $(".hide-item-3").show();
//     $(".hide-hr-3").show();
//  });

//  //Remove Item-4
// $(".add-btn-4").click(function(){
//     $(".hide-item-4").show();
//     $(".hide-hr-4").show();
//  });

// //Remove Item-5
// $(".add-btn-5").click(function(){
//     $(".hide-item-5").show();
//     $(".hide-hr-5").show();
//  });

//  //Remove Item-6
// $(".add-btn-6").click(function(){
//     $(".hide-item-6").show();
//     $(".hide-hr-6").show();
//  });



//Addition Buttons on Books

//Add Item-1
$("#add-btn-1").click(function(){
    addtoCart(this);
    
 });

 //Add Item-2
$("#add-btn-2").click(function(){
    addtoCart(this);
 });

 //Add Item-3
$("#add-btn-3").click(function(){
    addtoCart(this);
 });

//Add Item-4
$("#add-btn-4").click(function(){
    addtoCart(this);
 });

 //Add Item-5
$("#add-btn-5").click(function(){
    addtoCart(this);
 });

 //Add Item-6
$("#add-btn-6").click(function(){
    addtoCart(this);
 });



//Removal Buttons on Cart Page

//Remove Item-1
$("#rm-btn-1").click(function(){
    remFromCart(this);
 });

//Remove Item-2
$("#rm-btn-2").click(function(){
    remFromCart(this);
 });

 //Remove Item-3
$("#rm-btn-3").click(function(){
    remFromCart(this);
 });

 //Remove Item-4
$("#rm-btn-4").click(function(){
    remFromCart(this);
 });

//Remove Item-5
$("#rm-btn-5").click(function(){
    remFromCart(this);
 });

 //Remove Item-6
$("#rm-btn-6").click(function(){
    remFromCart(this);
 });


//Removal Item function
 function remFromCart(remButtonRef){
    if(remButtonRef.id == "rm-btn-1"){
        cart.item1 = "Hello"
    }
    else if(remButtonRef.id == "rm-btn-2"){
        cart.item2 = "Hello"           
    }
    else if(remButtonRef.id == "rm-btn-3"){
        cart.item3 = "Hello" 
    }
    else if(remButtonRef.id == "rm-btn-4"){
        cart.item4 = "Hello"
    }
    else if(remButtonRef.id == "rm-btn-5"){
        cart.item5 = "Hello"
    }
    else if(remButtonRef.id == "rm-btn-6"){
        cart.item6 = "Hello"
    }  
    else{}    
    //renderCart();
 }

//Addition Item function
function addtoCart(addButtonRef){
    let i;
    if(addButtonRef.id == "add-btn-1"){
        //cart.item1 = "Test"
        //renderCart(products[0]); 
        i = 0;
    }
    else if(addButtonRef.id == "add-btn-2"){
        //cart.item2 = "Test"
       // renderCart(products[1]); 
       i = 1;     
    }
    else if(addButtonRef.id == "add-btn-3"){
        //cart.item3 = "Test" 
       // renderCart(products[2]);
       i = 2;
    }
    else if(addButtonRef.id == "add-btn-4"){
        //cart.item4 = "Test"
       // renderCart(products[3]);
       i = 3;
    }
    else if(addButtonRef.id == "add-btn-5"){
        //cart.item5 = "Test"
        //renderCart(products[4]);
        i = 4;
    }
    else if(addButtonRef.id == "add-btn-6"){
        //cart.item6 = ""
        //renderCart(products[5]);
        i = 5;
    }  
    else{}    
    cartCount(books[i]);
    //renderCart();
 }

//   function renderCart(remButtonRef){
//     document.getElementById("cart1").value = cart.item1;
//     document.getElementById("cart2").value = cart.item2;
//     document.getElementById("cart3").value = cart.item3;
//     document.getElementById("cart4").value = cart.item4;
//     document.getElementById("cart5").value = cart.item5;
//     document.getElementById("cart6").value = cart.item6;
//   }

//Remove expected shipping delivery date
//When items are all hidden
// if($(".hide-item-1").is(":hidden")){
//     $(".hide-item-6").hide();
//     $(".hide-hr-6").hide();
// }


//Cart item counting

function cartCount(books) {
    //Test if output can be read
    //console.log("the product is ", books)
    //Set the var cartTotCount to existing local storage
    let cartTotCount = localStorage.getItem('cartCount');

    //converts cartTotCount string to Int
    cartTotCount = parseInt(cartTotCount);

    //If cart has been pressed, increase local storage for cartCount
    if (cartTotCount){
        localStorage.setItem('cartCount', cartTotCount + 1);
        $("#cart-icon-count").text(cartTotCount + 1);
    }
    else{
        localStorage.setItem('cartCount', 1);
        $("#cart-icon-count").text(1);
    }

bookSelect(books);

}

//Function to load cart initially
function loadCartTotCount() {
let cartTotCount = localStorage.getItem('cartCount');
    //Set cart count on startup
    if (cartTotCount){
     $("#cart-icon-count").text(cartTotCount);
    }
}

function bookSelect(books) {

    //console.log("The book selected is", books)

    //Make a variable and set it to any existing items from local storage
    let bookSelected = localStorage.getItem('bookSelected');
    bookSelected = JSON.parse(bookSelected);

    //Put the variable in a suitable format for display


    //If books have been selected
    if(bookSelected != null){
        //When selecting for the first time it will be undefined
        //when its undefined you want to take the old book
        //and add the new
        if (bookSelected[books.title] == undefined){
            bookSelected = {
             ...bookSelected,
             [books.title]: books
            }
        }
        else{
            bookSelected = {
                ...bookSelected,
                [books.title]: books
               }
            bookSelected.isSelected = bookSelected.isSelected + 1;

        }
           bookSelected[books.title].isSelected = bookSelected[books.title].isSelected + 1;
             //books.isSelected = books.isSelected + 1;
            // bookSelected = {
            //     ["Title"]: books.title,
            //     ["Price"]: books.price,
            //     ["URL"]: books.url,
            //     ["Quantity"]: books.isSelected
          //  }
            //  ["Title"]: books.title,
            //  ["Price"]: books.price,
            //  ["URL"]: books.url,
            //  ["Quantity"]: books.isSelected
    }
    else
    {
        books.isSelected = 1;
        bookSelected = {
            [books.title]: books}
        // bookSelected = {
        //     ["Title"]: books.title,
        //     ["Price"]: books.price,
        //     ["URL"]: books.url,
        //     ["Quantity"]: books.isSelected
        // }
    }





    localStorage.setItem('bookSelected', JSON.stringify(bookSelected));
}
