let cart = [];
let items = [];
let totalPrice = 0;

const productHolder = document.querySelector(".productsHolder");
const cartItemsHolder = document.querySelector(".cartItemsHolder");
const totalCartPrice = document.querySelector(".totalCartPrice");


const fetchItems = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(`Error fetching data!: ${err}`);
    }
};


window.AddToCart = (itemID) => {
    const itemToAdd = items.find(item => item.id === itemID);
    const isDuplicated = cart.find(item => item.id === itemToAdd.id)
    if (isDuplicated != null) {
        isDuplicated.qty++;
        console.log("qty+1");
    } else {
        cart.push(itemToAdd);
        console.log("new item");
    }
    calculateTotal();
    renderCart();
}

const renderCart = () => {
    cartItemsHolder.innerHTML = "";
    for (const item of cart) {
        const cartItem = document.createElement("div");
        cartItem.className = "cartItem";
        cartItem.innerHTML = `<button class="minusButton" onclick="minusQuantity(${item.id})">-</button>x${item.qty}<button class="plusButton" onclick="plusQuantity(${item.id})">+</button>
                                <p>${item.title} - $${item.price}</p>`;
        cartItemsHolder.append(cartItem);
    }
    calculateTotal();
    totalCartPrice.innerHTML = `Total:$${totalPrice.toFixed(2)}`;
    saveData();
}


const renderItems = async () => {
    const storedCart = localStorage.getItem("savedCart");
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    console.log(cart);
    const fetchedData = await fetchItems();
    items = fetchedData;
    items.forEach(item => {
        item.qty = 1;
    });
    for (const item of items) {
        const itemCard = document.createElement("div");
        itemCard.innerHTML = `<img src="/images/t-shirt1.jpg" class="productImage" >
                                <div class="titlePrice">
                                <h3 class="itemTitle">${item.title}</h3> 
                                <p class="itemPrice">$${item.price}</p>
                                </div>
                                <button class="addToCart-btn" onclick="AddToCart(${item.id})">Add to cart</button>`;
        itemCard.classList.add("itemCard")
        productHolder.appendChild(itemCard);
    }
    renderCart();
};

const calculateTotal = () => {
    totalPrice = cart.reduce((accumulator, cartItem) => {
        return accumulator + cartItem.price * cartItem.qty;
    }, 0);
}

const saveData = () => {
    localStorage.setItem("savedCart", JSON.stringify(cart));
}

window.plusQuantity = (itemID) => {
    itemToUpdate = cart.find((item) => item.id === itemID);
    itemToUpdate.qty++;
    renderCart();
    calculateTotal();
}

window.minusQuantity = (itemID) => {
    itemToUpdate = cart.find((item) => item.id === itemID);
    if (itemToUpdate.qty === 1) {
        const indexToRemove = cart.findIndex((item) => item.id === itemToUpdate.id);
        if (indexToRemove !== -1) cart.splice(indexToRemove, 1);
    }
    itemToUpdate.qty--;
    renderCart();
    calculateTotal();
}

renderItems();

