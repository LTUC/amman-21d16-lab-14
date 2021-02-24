'use strict';
// const imgs = ['bag'
//   ,'banana'
//   ,'bathroom'
//   ,'boots'
//   ,'breakfast'
//   ,'bubblegum'
//   ,'chair'
//   ,'cthulhu'
//   ,'dog-duck'
//   ,'dragon'
//   ,'pen'
//   ,'pet-sweep'
//   ,'scissors'
//   ,'shark'
//   ,'sweep'
//   ,'tauntaun'
//   ,'unicorn'
//   ,'usb'
//   ,'water-can'
//   ,'wine-glass'];

  // const imgPaths = ['bag.jpg'
  // ,'banana.jpg'
  // ,'bathroom.jpg'
  // ,'boots.jpg'
  // ,'breakfast.jpg'
  // ,'bubblegum.jpg'
  // ,'chair.jpg'
  // ,'cthulhu.jpg'
  // ,'dog-duck.jpg'
  // ,'dragon.jpg'
  // ,'pen.jpg'
  // ,'pet-sweep.jpg'
  // ,'scissors.jpg'
  // ,'shark.jpg'
  // ,'sweep.png'
  // ,'tauntaun.jpg'
  // ,'unicorn.jpg'
  // ,'usb.gif'
  // ,'water-can.jpg'
  // ,'wine-glass.jpg'];

// Cart constructor.

const Cart = function (items) {
  // this.items is an array of CartItem instances.
  this.items = items;
};

Cart.prototype.addItem = function (product, quantity) {
  // TODO: Fill in this instance method to create a new CartItem and add it to this.items
  this.items.push(new CartItem(product, quantity));
};

Cart.prototype.saveToLocalStorage = function () {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
  localStorage.setItem(JSON.stringify(this.items));
};

Cart.prototype.removeItem = function (item) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!
  this.items.splice(item, 1);
};

const CartItem = function (product, quantity) {
  this.product = product;
  this.quantity = quantity;
};
// Product contructor.
const Product = function (filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};

Product.allProducts = [];
function fillList(){
  let selList = document.getElementById('items');
  for(let i = 0;  i< Product.allProducts.length; i++){
    let option = document.createElement('option');
    selList.appendChild(option);
    option.setAttribute("value", Product.allProducts[i].name);
    option.textContent = Product.allProducts[i].name;
  }
}
function generateCatalog() {
  new Product('assets/bag', 'Bag');
  new Product('assets/banana', 'Banana');
  new Product('assets/bathroom', 'Bathroom');
  new Product('assets/boots', 'Boots');
  new Product('assets/breakfast', 'Breakfast');
  new Product('assets/bubblegum', 'Bubblegum');
  new Product('assets/chair', 'Chair');
  new Product('assets/cthulhu', 'Cthulhu');
  new Product('assets/dog-duck', 'Dog-Duck');
  new Product('assets/dragon', 'Dragon');
  new Product('assets/pen', 'Pen');
  new Product('assets/pet-sweep', 'Pet Sweep');
  new Product('assets/scissors', 'Scissors');
  new Product('assets/shark', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun', 'Taun-Taun');
  new Product('assets/unicorn', 'Unicorn');
  new Product('assets/usb.gif', 'USB');
  new Product('assets/water-can', 'Water Can');
  new Product('assets/wine-glass', 'Wine Glass');
  fillList();
}
//checked


// Initialize the app by creating the big list of products with images and names
generateCatalog();
