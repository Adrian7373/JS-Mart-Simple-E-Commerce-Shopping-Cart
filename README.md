# JS-Mart 🛒

JS-Mart is a simple, vanilla JavaScript e-commerce application that allows users to browse products, add them to a cart, and manage quantities. This project demonstrates DOM manipulation, API fetching, and local storage management.

## 🚀 Features

* **Dynamic Product Listing:** Fetches product data asynchronously from [FakeStoreAPI](https://fakestoreapi.com/).
* **Shopping Cart Management:**
    * Add items to the cart.
    * Increase or decrease item quantities.
    * Remove items completely when quantity reaches zero.
    * Real-time total price calculation.
* **Data Persistence:** Uses `localStorage` to save your cart so items remain after refreshing the page.
* **Clean UI:** Styled with CSS Flexbox for a neat layout.

## 🛠️ Technologies Used

* **HTML5**
* **CSS3** (Flexbox, custom styling)
* **JavaScript (ES6+)** (Fetch API, Async/Await, DOM Manipulation)

## 📂 Project Structure

```text
/JS-Mart
├── index.html      # Main HTML structure
├── index.js        # Logic for fetching API, cart management, and rendering
├── styles.css      # Styling for the application
└── images
    └── t-shirt1.jpg # Product placeholder image

```

## 🔧 How to Run

1. Clone this repository:
```bash
git clone https://github.com/Adrian7373/JS-Mart.git
```


2. Navigate to the project folder.
3. Open `index.html` in your web browser.

## 📝 Notes

* **Image Placeholder:** Currently, the application uses a local placeholder image (`t-shirt1.jpg`) for all product cards to ensure a uniform look, while the text data (titles and prices) is fetched dynamically from the API.
* **Deployment:** This project is static and can be easily deployed via **GitHub Pages**.

## 🔮 Future Improvements

* Update `renderItems` to use the actual image URLs from the API response.
* Implement a checkout success modal.
* Add responsive media queries for better mobile support.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Made with ❤️ by Adrian Ablaza
