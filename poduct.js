// Data of product
const products = [
  {
    productId: 1,
    productImg: "productimg/product1.png",
    productName: "Mazagran",
    productFrom: "Swizerland",
    productRating: "4.0",
    productDef:
      "Mazagran coffee is a cross between iced coffee, tea and your favorite rum drink. It typically consists of espresso, lemon, sugar and (sometimes) rum.",
    productPrice: "$21",
  },

  {
    productId: 2,
    productImg: "productimg/product3.png",
    productName: "Frappucino",
    productFrom: "Argentina",
    productRating: "4.8",
    productDef:
      "Made famous by Starbucks, the Frappuccino is a blended iced coffee drink that’s topped with whipped cream and syrup. But not all Frapps are made the same: watch out for coffee-free versions. Unless you're into that sorta thing.",
    productPrice: "$17",
  },

  {
    productId: 3,
    productImg: "productimg/product2.png",
    productName: "Nirocoffee",
    productFrom: "Georgia",
    productRating: "4.5",
    productDef:
      "A cold brew and nitrogen bubbles is a cold brew coffee with a frothy, Guinness-like consistency. It’s poured via a nitro tap, too.",
    productPrice: "$30",
  },

  {
    productId: 4,
    productImg: "productimg/product5.png",
    productName: "Iced Espreso",
    productFrom: "Mexico",
    productRating: "4.9",
    productDef:
      "Like an iced coffee, iced espresso can be served straight or with a dash of milk, cream or sweetener. You can also ice speciality espresso-based drinks like americanos, mochas, macchiatos, lattes and flat whites.",
    productPrice: "$13",
  },

  {
    productId: 5,
    productImg: "productimg/product8.png",
    productName: "Cappucino",
    productFrom: "France",
    productRating: "4.5",
    productDef:
      "Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top. Sometimes you can find variations that use cream instead of milk or ones that throw in flavor shot, as well.",
    productPrice: "$32",
  },

  {
    productId: 6,
    productImg: "productimg/product6.png",
    productName: "Café au Lait",
    productFrom: "Moroco",
    productRating: "4.2",
    productDef:
      "Café au lait is perfect for the coffee minimalist who wants a bit more flavor. Just add a splash of warm milk to your coffee and you’re all set! ",
    productPrice: "$25",
  },

  {
    productId: 7,
    productImg: "productimg/product7.png",
    productName: "Americano",
    productFrom: "USA",
    productRating: "4.2",
    productDef:
      "With a similar flavor to black coffee, the americano consists of an espresso shot diluted in hot water. Pro tip: if you’re making your own, pour the espresso first, then add the hot water.",
    productPrice: "$12",
  },

  {
    productId: 8,
    productImg: "productimg/product4.png",
    productName: "Colds Brew",
    productFrom: "Serbia",
    productRating: "4.1",
    productDef:
      "The trendiest of the iced coffee bunch, cold brew coffees are made by steeping coffee beans from anywhere between 6-36 hours, depending on how strong you would like your cold brew. Once the beans are done steeping, add cold milk or cream",
    productPrice: "$35",
  },
];

// select product container
const productsContainer = document.querySelector(".products");

products.forEach((product, i) => {
  const html = ` 
    <div class="product" data-index=${product.productId}>
        <img src="${product.productImg}" alt="">
        <div class="product_text">
            <h3>${product.productName}</h3>
            <p>${product.productFrom}</p>
        </div>
        <div class="product_price">${product.productPrice}</div>
    </div>
      `;

  productsContainer.insertAdjacentHTML("afterbegin", html);
});

/////////////////////////////////////////

// MODAL SECTION //

// select the cart button
const cartBtn = document.querySelector(".cart_btn");
const modal = document.querySelector(".modal");
const cancel = document.querySelector(".cart_cross_btn i");

// function to include class cart_flex to modal to make it display
cartBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("cart_flex");
});

// remove cart_flex class
const rClass = () => {
  modal.classList.remove("cart_flex");
};

// click on cancel btn  to close the cart
cancel.addEventListener("click", () => {
  rClass();
});

//////////////////////////////////////////////////

// .click on product

// select all the product
const allProducts = document.querySelectorAll(".product");

// for each product add a event listener click
allProducts.forEach((product) => {
  // click event
  product.addEventListener("click", () => {
    // select the data attribute as index number dor array
    const indexNum = product.dataset.index - 1;

    // select the img of the product
    document
      .querySelector(".product_product_img img")
      .setAttribute("src", `${products[indexNum].productImg}`);

    // select the haeding tag
    document.querySelector(
      ".product_detail h1"
    ).innerHTML = `${products[indexNum].productName}`;

    // select area from the product
    document.querySelector(
      ".product_from"
    ).innerHTML = `${products[indexNum].productFrom}`;

    // select product rating
    document.querySelector(
      ".product_ratings"
    ).innerHTML = `${products[indexNum].productRating}  &#160;<i class="fa fa-star" aria-hidden="true"></i></div`;

    // product defination
    document.querySelector(
      ".product_detail p"
    ).innerHTML = `${products[indexNum].productDef}`;

    // select product price
    document.querySelector(
      ".product_product_price"
    ).innerHTML = `${products[indexNum].productPrice}`;
  });
});

//////////////////////////////////////////////////


// cart section

// cart product
let cartProducts = [];

const Buybtn = document.querySelector(".buy_btn");

const cart = document.querySelector(".cart_product_section");


// // num of item in cart
const numOfCartItem = () => {
  const cartItem = document.querySelector(".cart_num");
  const length = cartProducts.length;
  cartItem.textContent = length;
};

// add product  on html page
function displayProduct(e){
  // e.preventDefault();

  cartProducts.forEach((product, i) => {
    const html = `
      <div class="cart_product">
        <img class="cart_img" src="${product.cartProductImg}" alt="">
        <div class="cart_text">
            <h3 class="cart_heading col">${product.cartProductName}</h3>
            <p class="cart_location col">${product.cartProductFrom}</p>
            <div class="cart_price col">${product.cartProductPrce}</div>
        </div>
        <div class="cart_remove remove_item" data-index='${i}'><i class="fa fa-minus" aria-hidden="true"></i></div>
      </div>
      `;
    cart.insertAdjacentHTML("afterbegin", html);
  });

  console.log(cartProducts)

  const deleteBtn = document.querySelectorAll(".remove_item");

  deleteBtn.forEach((btn)=>{
    btn.addEventListener("click", () => {
      let indexNum = Number(btn.dataset.index);
      let incIndexNum = indexNum + 1;
      if(cartProducts.length===1){
      cartProducts.splice(indexNum, incIndexNum);
      }else{
        cartProducts.splice(indexNum, indexNum);
      }
      cart.innerHTML=''
      displayProduct()
      numOfCartItem()
      console.log(cartProducts)
    });
  })

};

// add product to the cart  array
Buybtn.addEventListener("click", () => {
  // get the img,product name,producy productPrice, product location
  const img = document
    .querySelector(".product_product_img img")
    .getAttribute("src");
  const productName = document.querySelector(".product_detail h1").textContent;
  const productFrom = document.querySelector(".product_from").textContent;
  const productPrice = document.querySelector(
    ".product_product_price"
  ).textContent;

  // create a object
  const cartProduct = {
    cartProductImg: img,
    cartProductName: productName,
    cartProductFrom: productFrom,
    cartProductPrce: productPrice,
  };

  cartProducts.push(cartProduct);

  cart.innerHTML = "";
  displayProduct();
  numOfCartItem();
});


document.querySelector('.cart_submit_btn button').addEventListener('click',()=>{
  cart.innerHTML=''
  cartProducts=[]
  numOfCartItem()
})


// add item to cart
// const addToCart = () => {
//   cartProducts.forEach((product, i) => {
//     const html = `
//     <div class="cart_product">
//       <img class="cart_img" src="${product.cartProductImg}" alt="">
//       <div class="cart_text">
//           <h3 class="cart_heading col">${product.cartProductName}</h3>
//           <p class="cart_location col">${product.cartProductFrom}</p>
//           <div class="cart_price col">${product.cartProductPrce}</div>
//       </div>
//       <div class="cart_remove remove_item" data-index='${i}'><i class="fa fa-minus" aria-hidden="true"></i></div>
//     </div>
//     `;

//     cartProductSection.insertAdjacentHTML("afterbegin", html);
//   });
// };

// // selecting the cart
// const cartProductSection = document.querySelector(".cart_product_section");

// // inclue item in cart
// const cartInclude = () => {
//   // if cart is empty
//   if (cartProducts.length === 0) {
//     html = ' <div class="cart_empty">Your cart is empty</div>';
//     cartProductSection.insertAdjacentHTML("afterbegin", html);
//   } // if cart not empty
//   else {
//     addToCart();

//     const remItem = document.querySelectorAll(".cart_remove");

//     remItem.forEach((item) => {
//       item.addEventListener("click", (e) => {
//         // e.preventDefault();
//         let indenN = item.dataset.index;

//         cartProducts.splice(indenN, indenN + 1);
//         // alert(item.dataset.index);

//         cartProductSection.innerHTML = " ";
//         if (cartProducts.length === 0) {
//           html = ' <div class="cart_empty">Your cart is empty</div>';
//           cartProductSection.insertAdjacentHTML("afterbegin", html);
//         } else if (cartProducts.length > 0) {
//           // cartProductSection.innerHTML = " ";
//           addToCart();
//         }

//         numOfCartItem();
//       });
//     });

//     // number of item in a caart
//     numOfCartItem();
//   }
// };

// // running cart include
// cartInclude();

// // select the buty button
// const buyBtn = document.querySelector(".buy_btn");

// buyBtn.addEventListener("click", (e) => {
//   e.preventDefault();

//   // get the img,product name,producy productPrice, product location
//   const img = document
//     .querySelector(".product_product_img img")
//     .getAttribute("src");
//   const productName = document.querySelector(".product_detail h1").textContent;
//   const productFrom = document.querySelector(".product_from").textContent;
//   const productPrice = document.querySelector(
//     ".product_product_price"
//   ).textContent;

//   // create a object
//   const cartProduct = {
//     cartProductImg: img,
//     cartProductName: productName,
//     cartProductFrom: productFrom,
//     cartProductPrce: productPrice,
//   };

//   // push the object into the cart
//   cartProducts.push(cartProduct);

//   // set the inner html of cart to empty
//   cartProductSection.innerHTML = " ";

//   // run cart include function
//   cartInclude();
// });
