/* global Cart */
'use strict';


 //Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
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

// TODO: Remove items.the rows (tr) in the cart table (tbody)
function clearCart() {
  document.getElementsByTagName('tr').innerHTML="";
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

   //TODO: Find the table body
   const tbody =document.getElementsByTagName('tbody');

  // TODO: Iterate over the items in the cart
  

  for (let i =0 ; i< cart.items.length ; i++){
  // TODO: Create a TR
   // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  
  let tr= document.createElement('tr');
  tr.setAttribute('id',i)
  tbody.appendChild(tr);


  let tdRemove= document.createElement('td');
  tdRemove.textContent='X';
  tr.appendChild(tdRemove);

  let quantityTd =document.createElement('td');
  quantityTd.textContent=cart.items[i].quantity;
  tr.appendChild(quantityTd);

  let itemTd=document.createElement('td');
  itemTd.textContent=cart.items[i].product;
  tr.appendChild(itemTd);

  
 

}
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  if (event.target.textContent==='X'){
    cart.removeItem(event.target.id);
  }
  
  // TODO: Save the cart back to local storage
 

}

// This will initialize the page and draw the cart on screen
renderCart();
