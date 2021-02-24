/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;
let cartItems;
let tbody = table.getElementsByTagName("tbody")[0];
function loadCart() {
  cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
  }
}



// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  let trEl = document.createElement('tr');
  let tdEl = document.createElement('td');
  for (let i = 0; i < cartItems.length; i++) {
    trEl = document.createElement('tr');
    tbody.appendChild(trEl);
      tdEl = document.createElement('td');
      trEl.appendChild(tdEl);
      tdEl.id = i;
      tdEl.textContent = 'X';
      tdEl = document.createElement('td');
      trEl.appendChild(tdEl);
      tdEl.textContent = parseInt(cartItems[i].quantity);

      tdEl = document.createElement('td');
      trEl.appendChild(tdEl);
      tdEl.textContent = cartItems[i].product;
       
  }
  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

tbody.addEventListener('click', removeItemFromCart);
function removeItemFromCart(event) {
debugger;
// console.log(event.target);


if (event.target === event.target.parentNode.firstChild) {

  cart.removeItem(event.target.id);
  cart.saveToLocalStorage();

   renderCart();
   
    
 
}
 

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
