"use strict";
// Cart constructor.
const Cart = function (items) {
    // this.items is an array of CartItem instances.
    this.items = items;
};

Cart.prototype.addItem = function (product, quantity) {
    // TODO: Fill in this instance method to create a new CartItem and add it to this.items
    let newItem = new CartItem(product, quantity); // Adding a new cart item
    this.items.push(newItem); // here we are pushing the new item to the array
    console.log(this.items); // debugger successful
};

Cart.prototype.saveToLocalStorage = function () {
    // TODO: Fill in this instance method to save the contents of the cart to localStorage
    localStorage.setItem("cart", JSON.stringify(this.items)); // stringify converts the array into a string so it is in the correct format
    // setItem saves it to localStorage 
};

Cart.prototype.removeItem = function (item) {
    // TODO: Fill in this instance method to remove one item from the cart.
    // Note: You will have to decide what kind of parameter to pass in here!
    for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].product === item) {
            this.items.splice(i, 1); // this removes an item from the array
        }
    }
    this.saveToLocalStorage();
};


const CartItem = function (product, quantity) {
    this.product = product;
    this.quantity = quantity;
};

// Product constructor.
const Product = function (filePath, name) {
    this.filePath = filePath;
    this.name = name;
    Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
    new Product("assets/bag.jpg", "Box of Pat's Salmon Cookies (One Dozen) $11.99");
    new Product("assets/banana.jpg", "Pat's Salmon Cookies T-Shirt $20.16");
    new Product("assets/bathroom.jpg", "Salmon Cookie Cutter $5.97");
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();