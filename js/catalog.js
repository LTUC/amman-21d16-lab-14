/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  // TODO: Add an <option> tag inside the form's select for each product

  const selectItem = document.getElementById('items');

  for (let i = 0 ; i < Product.allProducts.length ; i++ ) {

    const optionEl = document.createElement('option');
    optionEl.textContent = Product.allProducts[i].name;
    optionEl.value=Product.allProducts[i].name;
    selectItem.appendChild(optionEl);
    


  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading

  event.preventDefault();
  
// Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart

function addSelectedItemToCart() {

  

  const selectItem = document.getElementById('items');
  const selectName = selectItem.options[selectItem.selectedIndex].value;
  console.log(selectName);


  // TODO: suss out the item picked from the select list
  // let selectFilePath ;
// debugger;
// TODO: get the quantity
debugger;
let quantityEl = document.getElementById('quantity');
let getQuantity = parseInt(quantityEl.value);
new CartItem(selectName,getQuantity);

localStorage.setItem('cartitem', JSON.stringify(CartItem.allitems));
  // TODO: using those, add one item to the Cart

  // new Cart(selectName, selectFilePath, getQuantity);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
const itemCounter = 0;
function updateCounter() {
debugger;
  // const quantityEl = document.getElementById('quantity');
  // itemCounter += parseInt(quantityEl.value);

  const spanEl = document.getElementById('itemCount');
  spanEl.textContent = CartItem.allitems.length;
  

}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {

  
  // TODO: Get the item and quantity from the form

  const previewEl = document.getElementById('cartContents');

  const selectItem = document.getElementById('items');
  const selectName = selectItem.options[selectItem.selectedIndex].text;

  const quantityEl = document.getElementById('quantity');
  const selectQuantity = quantityEl.value;

  // TODO: Add a new element to the cartContents div with that information
  
  const h1El = document.createElement('h1');
  h1El.textContent = selectName + ': ' + selectQuantity + ' ordered';
  previewEl.appendChild(h1El);

}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
