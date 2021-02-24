/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //todo: Add an <option> tag inside the form's select for each product
  let selectEl = document.getElementById('items');

  for (let i = 0; i <Product.allProducts.length; i++) {
     let optionEl = document.createElement('option');
    optionEl.textContent = Product.allProducts[i].name;
    selectEl.appendChild(optionEl);
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
  console.log(cart)
  // console.log(addItem)
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
  // document.getElementById('items').value;
  // document.getElementById('quantity').value;

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // suss out the item picked from the select list

  let item = document.getElementById('items').value;

  let quantity = parseInt(document.getElementById('quantity').value);
  //  get the quantity
  // using those, add one item to the Cart
  cart.addItem(item, quantity);
  
  // console.log(item, quantity);
}
// TODO: Update the cart count in the header nav with the number of items in the Cart
  function updateCounter() {
    document.getElementById('itemCount').textContent = cart.items.length;
  }



// // TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
//   function updateCartPreview() {

//     let cartCont = document.getElementById('cartContents');
//     cartCont.innerHTML ='';
  
//     // TODO: Add a new element to the cartContents div with that information
//     for(let i = 0; i <cart.items.length; i++){
//       cartCont.textContent +=  `(${cart.items[i].product}, ${cart.items[i].quantity})`;
//     }}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
// function saveToLocalStorage() {
//   localStorage.setItem('items', JSON.stringify(items));
//   localStorage.setItem('quantity', JSON.stringify(quantity));
//   localStorage.setItem('countCartArr', JSON.stringify(countCartArr));
//   }
populateForm();
