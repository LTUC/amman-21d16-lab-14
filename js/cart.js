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
    const cartItems = JSON.parse(localStorage.getItem('cart'));

    for (let i = 0; i < cartItems.length; i++) {
        // table.deleteRow(i);
    }

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

    // TODO: Find the table body


    // TODO: Iterate over the items in the cart
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    console.log(cartItems);

    for (let i = 0; i < cartItems.length; i++) {

        let row = table.insertRow(i);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.innerHTML = "X";
        cell2.innerHTML = cartItems[i].quantity;
        cell3.innerHTML = cartItems[i].product;

        // // TODO: Create a TR
        // let trEl = document.createElement('tr');

        // // TODO: Create a TD for the delete link, quantity,  and the item
        // let tdEl1 = document.createElement('td');
        // tdEl1.textContent = 'deleteLink';
        // let tdEl2 = document.createElement('td');
        // tdEl2.textContent = cartItems[0].quantity;
        // let tdEl3 = document.createElement('td');
        // tdEl3.textContent = cartItems[1].product;

        // // TODO: Add the TR to the TBODY and each of the TD's to the TR
        // tbodyEl.appendChild(trEl);
        // trEl.appendChild(tdEl1);
        // trEl.appendChild(tdEl2);
        // trEl.appendChild(tdEl3);
    }
}

function removeItemFromCart(event) {

    const cartItems = JSON.parse(localStorage.getItem('cart'));

    // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
    let removedItem = cartItems[event.target.cellIndex];
    cart.removeItem(removedItem);

    // TODO: Save the cart back to local storage
    cart.saveToLocalStorage();

    // TODO: Re-draw the cart table
    showCart();

}

// This will initialize the page and draw the cart on screen
renderCart();