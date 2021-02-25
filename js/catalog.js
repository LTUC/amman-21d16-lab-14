/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
const selectElement = document.getElementById('items');
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product

  for (let i in Product.allProducts) {
    let option_tag = document.createElement('option');
    option_tag.text = Product.allProducts[i].name;
    selectElement.appendChild(option_tag);
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
  // TODO: suss out the item picked from the select list
  const productName= selectElement.options[selectElement.selectedIndex].value;
  // TODO: get the quantity
  const quantity=document.getElementById('quantity');
  // TODO: using those, add one item to the Cart
  cart.addItem(productName,quantity.value);
  console.log(cart);
}


// TODO: Update the cart count in the header nav with the number of items in the Cart
let cartCount=document.getElementById('itemCount');
cartCount.textContent=0;
function updateCounter() {
  cartCount.textContent++;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  const productName= selectElement.options[selectElement.selectedIndex].value;
  const quantity=document.getElementById('quantity');
  // TODO: Add a new element to the cartContents div with that information
  const cartContents = document.getElementById('cartContents');
  const ulEl=document.createElement('ul');
  cartContents.appendChild(ulEl);
  const liEl=document.createElement('li');
  ulEl.appendChild(liEl);
  liEl.textContent=`${quantity.value} : ${productName}`;
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
