/* global Cart */
'use strict';
// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
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
while (table.lastchild) {
  table.removeChild(table.lastChild)
}
}
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
let arr= [];
function showCart() {
 
  for (let i = 0; i < cart.items.length; i++) {
     arr= localStorage.getItem(localStorage.key(0));
    let row = document.createElement('tr');
    table.appendChild(row);

    let El3 = document.createElement('td');
    row.appendChild(El3);

    let deleteBtn = document.createElement('input');
    deleteBtn.type = "button";
    El3.appendChild(deleteBtn);
    El3.id = 'delete';
    El3.textContent = 'X'

    
    let El2 = document.createElement('td');
    row.appendChild(El2);
    El2.textContent = cart.items[i].quantity;

    let El1 = document.createElement('td');
    row.appendChild(El1);
    El1.textContent =cart.items[i].product;
  
  }
  // TODO: Find the table body
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
}

function removeItemFromCart(event) {
  cart.removeItem(event.target.id);
  cart.saveToLocalStorage();
  renderCart();}
//   // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
// }
// This will initialize the page and draw the cart on screen ll
renderCart();
