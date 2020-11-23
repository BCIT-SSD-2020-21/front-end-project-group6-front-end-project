//Cart JS Script
let carts = document.querySelectorAll('.bookcart');

//Actual Cart
var books = [{
        url: 'images/Coding_for_Beginners.jpg',
        title: 'Coding for Beginners',
        price: 25,
        isSelected: 0
    },
    {
        url: 'images/Javascript_for_Beginners.jpg',
        title: 'Javascript for Beginners',
        price: 30,
        isSelected: 0
    },
    {
        url: 'images/SQL_Programming_For_Beginners.jpg',
        title: 'SQL Programming For Beginners',
        price: 25,
        isSelected: 0
    },
    {
        url: 'images/Database_Management_System.jpg',
        title: 'Database Management System',
        price: 25,
        isSelected: 0
    },
    {
        url: 'images/Sql_Database_Programming.jpg',
        title: 'SQL Database Programming',
        price: 30,
        isSelected: 0
    },
    {
        url: 'images/Essentials_of_Web_Database_Development.jpg',
        title: 'Essential of Web Database Development',
        price: 25,
        isSelected: 0
    }
]


for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartCount(books[i]);
        totalBookCost(books[i]);
    })
}


//Startup Card Count
loadCartTotCount();
InitCartPage();

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

/* //Add Item-1
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
 */


// //Removal Buttons on Cart Page

// //Remove Item-1
// $("#rm-btn-1").click(function(){
//     remFromCart(this);
//  });

// //Remove Item-2
// $("#rm-btn-2").click(function(){
//     remFromCart(this);
//  });

//  //Remove Item-3
// $("#rm-btn-3").click(function(){
//     remFromCart(this);
//  });

//  //Remove Item-4
// $("#rm-btn-4").click(function(){
//     remFromCart(this);
//  });

// //Remove Item-5
// $("#rm-btn-5").click(function(){
//     remFromCart(this);
//  });

//  //Remove Item-6
// $("#rm-btn-6").click(function(){
//     remFromCart(this);
//  });


// //Removal Item function
//  function remFromCart(remButtonRef){
//     if(remButtonRef.id == "rm-btn-1"){
//         cart.item1 = "Hello"
//     }
//     else if(remButtonRef.id == "rm-btn-2"){
//         cart.item2 = "Hello"           
//     }
//     else if(remButtonRef.id == "rm-btn-3"){
//         cart.item3 = "Hello" 
//     }
//     else if(remButtonRef.id == "rm-btn-4"){
//         cart.item4 = "Hello"
//     }
//     else if(remButtonRef.id == "rm-btn-5"){
//         cart.item5 = "Hello"
//     }
//     else if(remButtonRef.id == "rm-btn-6"){
//         cart.item6 = "Hello"
//     }  
//     else{}    
//     //renderCart();
//  }

//Addition Item function
function addtoCart(addButtonRef) {
    let i;
    if (addButtonRef.id == "add-btn-1") {
        //cart.item1 = "Test"
        //renderCart(products[0]); 
        i = 0;
    } else if (addButtonRef.id == "add-btn-2") {
        //cart.item2 = "Test"
        // renderCart(products[1]); 
        i = 1;
    } else if (addButtonRef.id == "add-btn-3") {
        //cart.item3 = "Test" 
        // renderCart(products[2]);
        i = 2;
    } else if (addButtonRef.id == "add-btn-4") {
        //cart.item4 = "Test"
        // renderCart(products[3]);
        i = 3;
    } else if (addButtonRef.id == "add-btn-5") {
        //cart.item5 = "Test"
        //renderCart(products[4]);
        i = 4;
    } else if (addButtonRef.id == "add-btn-6") {
        //cart.item6 = ""
        //renderCart(products[5]);
        i = 5;
    } else {}
    cartCount(books[i]);
    //renderCart();
}


//Cart item counting

function cartCount(books) {
    //Test if output can be read
    //console.log("the product is ", books)
    //Set the var cartTotCount to existing local storage
    let cartTotCount = localStorage.getItem('cartCount');

    //converts cartTotCount string to Int
    cartTotCount = parseInt(cartTotCount);

    //If cart has been pressed, increase local storage for cartCount
    if (cartTotCount) {
        localStorage.setItem('cartCount', cartTotCount + 1);
        $("#cart-icon-count").text(cartTotCount + 1);
    } else {
        localStorage.setItem('cartCount', 1);
        $("#cart-icon-count").text(1);
    }

    bookSelect(books);

}

//Function to load cart initially
function loadCartTotCount() {
    let cartTotCount = localStorage.getItem('cartCount');
    //Set cart count on startup
    if (cartTotCount) {
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
    if (bookSelected != null) {
        //When selecting for the first time it will be undefined
        //when its undefined you want to take the old book
        //and add the new
        if (bookSelected[books.title] == undefined) {
            bookSelected = {
                ...bookSelected,
                [books.title]: books
            }
        } else {
            bookSelected = {
                ...bookSelected,
                [books.title]: books
            }
            bookSelected.isSelected = bookSelected.isSelected + 1;

        }
        bookSelected[books.title].isSelected = bookSelected[books.title].isSelected + 1;
    } else {
        books.isSelected = 1;
        bookSelected = {
            [books.title]: books
        }
    }
    localStorage.setItem('bookSelected', JSON.stringify(bookSelected));
}

function InitCartPage() {
    let booksInCart = localStorage.getItem("bookSelected");
    let booksTotal = localStorage.getItem("totalBookCost");
    //let book1 = $(".cart-container");
    let book1 = document.querySelector(".cart-container")
    booksInCart = JSON.parse(booksInCart)
    booksTotal = JSON.parse(booksTotal)
        //console.log(book1, booksInCart, booksInCart.url);

    //book1.append("<div class="test"><span class="title">Hello World</span></div>");


    if (booksTotal) {
        $("#book-Total").text("$" + booksTotal);
        $("#book-Total1").text("$" + booksTotal);
    }


    if (booksInCart) {

        book1.innerHTML = '';
        Object.values(booksInCart).map(item => {

            book1.innerHTML +=
                ` <!-- Cart Item 1 -->
        <div class="mt-3">
            <div class="pt-4 wish-list">
                <div class="row mb-4 hide-item-1">
                    <div class="col-md-5 col-lg-3 col-xl-3">
                        <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                            <img class="img-fluid w-100" src="${item.url}" alt="">
                        </div>
                    </div>
                    <div class="col-md-7 col-lg-9 col-xl-9">
                        <div>
                            <div class="d-flex justify-content-between">
                                <div>
                                    <h5 id="Book1Title">${item.title}</h5>
                                    <p class="mb-3 text-muted text-uppercase small">Software - Book</p>
                                    <p class="mb-2 text-muted text-uppercase small">Quantity: ${item.isSelected}</p>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <a href="#!" type="button" id="rm-btn-1" class="btn btn-danger card-link-secondary small text-uppercase mr-3"><i
                      class="fas fa-trash-alt mr-1"></i> Remove item </a>
            <a href="#!" type="button" class="btn btn-secondary card-link-secondary small text-uppercase"><i
                      class="fas fa-heart mr-1"></i> Move to wish list </a>
</div>
<p class="mb-0"><span><strong id="summary">$${item.price}.00</strong></span></p class="mb-0">
</div>
</div>
</div>
</div>  
        `
        })
    }

}

function totalBookCost(books) {

    //console.log("The cost is ", books.price);

    let cartCost = localStorage.getItem('totalBookCost');

    console.log("My cartCost is", cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);

        localStorage.setItem("totalBookCost", cartCost + books.price);
    } else {
        localStorage.setItem("totalBookCost", books.price);
    }

}