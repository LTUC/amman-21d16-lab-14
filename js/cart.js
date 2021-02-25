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
    for (let i = 1; i < table.rows.length; i++) {
      table.deleteRow(i);  
    } 
  }
    // table.removeChild(table.getElementsByTagName("tbody")[0])
// var table = document.getElementById('table');
// var row = document.getElementsByTagName('tbody')[0];
//     row.parentNode.removeChild(row);
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
  const tbody=table.getElementsByTagName('tbody')[0];
  // TODO: Iterate over the items in the cart
  for (let i = 0; i < cart.items.length; i++) {
// TODO: Create a TR
const tableRow=document.createElement('tr');
// TODO: Create a TD for the delete link, quantity,  and the item
const deleteEl=document.createElement('td')
const quantityEl=document.createElement('td')
const itemEl=document.createElement('td')
deleteEl.textContent='X';
itemEl.textContent=cart.items[i].quantity;
quantityEl.textContent=cart.items[i].product;
// TODO: Add the TR to the TBODY and each of the TD's to the TR
  tbody.appendChild(tableRow);
  tableRow.appendChild(deleteEl);
  tableRow.appendChild(quantityEl);
  tableRow.appendChild(itemEl);
}
}
function removeItemFromCart(event) {
  console.log(cart);
  console.log(event.target.parentElement.rowIndex-1);
  // console.log(cart.items[1]);
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  const rowIndex=event.target.parentElement.rowIndex-1;
  console.log(rowIndex);
  cart.removeItem(rowIndex);
  // TODO: Save the cart back to local storage
  localStorage.setItem('cart',JSON.stringify(cart.items));
  // TODO: Re-draw the cart table
  clearCart();
  showCart();  
}
// This will initialize the page and draw the cart on screen
renderCart();