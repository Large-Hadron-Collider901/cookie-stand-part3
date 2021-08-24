
"use strict";

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
    //TODO: Add an <option> tag inside the form's select for each product
    const selectElement = document.getElementById("items");
    for (let i in Product.allProducts) {
        let productName = Product.allProducts[i].name;
        let option = document.createElement("option"); // created an option element
        console.log(productName); //debugger successful 
        option.value = productName;
        option.textContent = productName;
        selectElement.append(option);
    }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
    // TODO: Prevent the page from reloading
    event.preventDefault(); // this is how we prevent the page from reloading

    // Do all the things ...
    addSelectedItemToCart();
    cart.saveToLocalStorage();
    updateCounter();
    updateCartPreview();
}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() { // this function adds an item to the cart
    // TODO: suss out the item picked from the select list
    let addItems = document.querySelector("#items"); // this selects the html element where the added items will show up
    let itemQuantity = document.querySelector("#quantity"); // this selects the html element where the quantity will show up
    cart.addItem(addItems.value, parseInt(itemQuantity.value));
    console.log(addItems.value);
    // TODO: get the quantity
    console.log(itemQuantity.value);

    // TODO: using those, add one item to the Cart
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
    let itemCount = document.querySelector("#itemCount"); // this selects the itemCount html element where we will show how many items are in the cart
    let itemSum = 0;
    for (let i = 0; i < cart.items.length; i++) {
        itemSum += cart.items[i].quantity;
        console.log(itemSum);
    }
    itemCount.textContent = itemSum;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
    // TODO: Get the item and quantity from the form
    let cartContent = document.querySelector("#cartContents");
    let addUpdateItems = document.querySelector("#items");
    let addItemQuantity = document.querySelector("#quantity");
    let itemName = document.createElement("h4");

    itemName.textContent = `${addUpdateItems.value} : ${addItemQuantity.value}`;
    cartContent.append(itemName);

    // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById("catalog");
catalogForm.addEventListener("submit", handleSubmit);
console.log(catalogForm);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();