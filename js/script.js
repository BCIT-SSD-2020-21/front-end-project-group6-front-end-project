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
        url: 'images/SQL_Programming_For_Beginners.png',
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
        url: 'images/Essentials_of_Web_Database_Development.png',
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
    } else if (remButtonRef.id == "rm-btn-5") {
        cart.item5 = "Hello"
    } else if (remButtonRef.id == "rm-btn-6") {
        cart.item6 = "Hello"
    } else {}
    //renderCart();
}

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
    } else {
        books.isSelected = 1;
        bookSelected = {
                [books.title]: books
            }
            // bookSelected = {
            //     ["Title"]: books.title,
            //     ["Price"]: books.price,
            //     ["URL"]: books.url,
            //     ["Quantity"]: books.isSelected
            // }
    }
    localStorage.setItem('bookSelected', JSON.stringify(bookSelected));
}

function InitCartPage() {
    let booksInCart = localStorage.getItem("bookSelected");

    //let book1 = $(".cart-container");
    let book1 = document.querySelector(".cart-container")
    booksInCart = JSON.parse(booksInCart)
    console.log(book1, booksInCart, booksInCart.url);

    //book1.append("<div class="test"><span class="title">Hello World</span></div>");



    if (booksInCart) {

        book1.innerHTML = '';
        Object.values(booksInCart[0]).map(item => {
        
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
                                    <p class="mb-3 text-muted text-uppercase small">Front End - Book</p>
                                    <p class="mb-2 text-muted text-uppercase small">Order By</p>
                                </div>
                                <div>
                                    <div class="def-number-input number-input md-0 w-100">
                                        <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" class="minus decrease"></button>
                                        <input class="quantity" min="0" name="quantity" value="1" type="number">
                                        <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus increase"></button>
                                    </div>
                                    <small id="passwordHelpBlock" class="form-text text-muted text-center">
                    (Note, 1 Book)
                  </small>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <a href="#!" type="button" id="rm-btn-1" class="btn btn-danger card-link-secondary small text-uppercase mr-3"><i
                      class="fas fa-trash-alt mr-1"></i> Remove item </a>
            <a href="#!" type="button" class="btn btn-secondary card-link-secondary small text-uppercase"><i
                      class="fas fa-heart mr-1"></i> Move to wish list </a>
</div>
<p class="mb-0"><span><strong id="summary">${item.price}</strong></span></p class="mb-0">
</div>
</div>
</div>
</div>  
        `       
        })

        // book1.innerHTML += 
        // `The total cost is ${totalBookCost}`


    }        

    // $("#Book1Title").html(booksInCart.title);
    //console.log(booksInCart)
    // Object.values(booksInCart).map(item => {
    //     book1.innerHtml += `
    // <div class="test"><span class="title">Hello World</span></div>
    // `
    // $(".cart-container").html("Hello <b>world</b>!"
    // );
    // $("#Book1Title").html("Hello <b>world</b>!");  
    // <span>${item.price}</span>  
    //  }
    //  )

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