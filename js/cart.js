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
const tbody=document.querySelector('tbody');

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
while(tbody.lastChild){
  tbody.removeChild(tbody.lastChild);

}
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
for (let i = 0; i < cart.items.length; i++) {
  const trEl=document.createElement('tr')
  tbody.appendChild(trEl);
  const deletItem=document.createElement('button');
  deletItem.type="button";
  deletItem.textContent="X";
  deletItem.id=i;
  trEl.appendChild(deletItem);
  const quantity=document.createElement('td');
  quantity.textContent=cart.items[i].quantity;
  trEl.appendChild(quantity);
  
  const itemName=document.createElement('td');
  itemName.textContent=cart.items[i].product;
  trEl.appendChild(itemName);
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
renderCart();
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
