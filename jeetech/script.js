let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let cartCount = 0;

// Function to show a specific slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
}

// Initial display of the first slide
showSlide(currentSlide);

// Function to automatically change slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Change slide every 3 seconds
setInterval(nextSlide, 3000);

// Product data (can be dynamically populated or fetched from a server)
const products = [
    {
        title: "K8 Mic",
        description: "Capture professional-quality audio with the versatile K8 Microphone, designed for content creators",
        price: "₹600",
        image: "img/v1.jpg", // Ensure this image exists in your project
        videoLink: "https://www.instagram.com/reel/C9CgTWlP3xe/?igsh=b2ZvcHdiY245Mzh5"
    },
    {
        title: "MT-11",
        description: "Experience crystal-clear sound with the MT-11 Microphone, perfect for podcasts and live performances.",
        price: "₹899",
        image: "img/v2.jpg",
        videoLink: "https://youtube.com/shorts/boEsaLyOoJg?si=2adpCvD5wmbrsOE5"
    },
    {
        title: "MT-44",
        description: "The MT-44 Microphone delivers exceptional audio clarity for studio and live settings, enhancing your recordings.",
        price: "₹2200",
        image: "img/v3.jpg",
        videoLink: "https://www.youtube.com/watch?v=example3"
    },
    {
        title: "10 Inch Ringlight",
        description: "Illuminate your videos with the 10 Inch Ring Light for soft, even lighting that enhances your appearance.",
        price: "₹1400",
        image: "img/v4.jpg",
        videoLink: "https://www.instagram.com/reel/C9Kc3-lP0UI/?igsh=MTVxMGowOTZ6YndvYg=="
    },
    {
        title: "10 Inch RGB Ringlight",
        description: "Add vibrant color and adjustable brightness to your content with the dynamic 10 Inch RGB Ring Light.",
        price: "₹999",
        image: "img/v5.jpg",
        videoLink: "https://youtube.com/shorts/htrUtab8jvE?si=p6WqA7cpaCygh1oC"
    },
    {
        title: "Professional Tripod",
        description: "Ensure steady shots with the durable Professional Tripod, designed for photographers and videographers.",
        price: "₹6999",
        image: "img/v6.jpg",
        videoLink: "https://www.youtube.com/watch?v=example6"
    },
    {
        title: "Ulanzi VL49 RGB",
        description: "Light up your creative projects with the portable Ulanzi VL49 RGB, featuring multiple colors and brightness settings.",
        price: "₹1999",
        image: "img/v7.jpg",
        videoLink: "https://www.youtube.com/watch?v=example7"
    },
    {
        title: "Monopad",
        description: "Capture stunning shots on the go with the lightweight and adjustable Monopod for added stability.",
        price: "₹999",
        image: "img/v8.jpg",
        videoLink: "https://www.youtube.com/watch?v=example8"
    },
    {
        title: "K9 Mic",
        description: "The K9 Microphone provides pristine audio quality for streaming and podcasting, perfect for beginners and pros.",
        price: "₹999",
        image: "img/v9.jpg",
        videoLink: "https://www.youtube.com/watch?v=example9"
    },
    {
        title: "Ulanzi J12",
        description: "Versatile and compact, the Ulanzi J12 tripod adapts to any shooting situation with ease.",
        price: "₹2799",
        image: "img/v10.jpg",
        videoLink: "https://www.youtube.com/watch?v=example10"
    }
];

let currentIndex = -1; // Keep track of the current product index

// Function to open popup with product details
function openPopup(index) {
    currentIndex = index; // Set current index to the clicked product index
    const product = products[index];
    document.getElementById("popupImage").src = product.image;
    document.getElementById("popupTitle").textContent = product.title;
    document.getElementById("popupDescription").textContent = product.description;
    document.getElementById("popupPrice").textContent = product.price;
    document.getElementById("popupVideoLink").href = product.videoLink;

    // Show the popup
    document.getElementById("popup").style.display = "flex";

    // Add event listeners for closing the popup
    document.addEventListener("keydown", closePopupOnEscape);
    document.getElementById("popup").addEventListener("click", closePopupOnOutsideClick);
}



// Function to close popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
    // Remove event listeners when closing the popup
    document.removeEventListener("keydown", closePopupOnEscape);
    document.getElementById("popup").removeEventListener("click", closePopupOnOutsideClick);
}

// Function to go back to the previous product
function goBack() {
    if (currentIndex > 0) {
        openPopup(currentIndex - 1); // Open the previous product
    } else {
        closePopup(); // Close popup if there is no previous product
    }
}

// Function to close the popup when clicking outside of it
function closePopupOnOutsideClick(event) {
    const popupContent = document.querySelector(".popup-content");
    if (event.target === document.getElementById("popup")) {
        closePopup();
    }
}

// Function to close the popup when pressing the "Escape" key
function closePopupOnEscape(event) {
    if (event.key === "Escape") {
        closePopup();
    }
}

const trendproducts = [
    {
        title: "Waterwash Gun",
        description: "High-pressure waterwash gun for spotless, quick cleaning",
        price: "₹1299",
        image: "img/t1.jpg", // Ensure this image exists in your project
        videoLink: "https://www.instagram.com/reel/C-pwZ1ZS5O2/?igsh=MWVpMjN4ZGMyaDZ5cQ=="
    },
    {
        title: "G-Speaker",
        description: "Portable Bluetooth speaker with powerful sound and sleek design",
        price: "₹999",
        image: "img/t2.jpg",
        videoLink: "https://youtube.com/shorts/jpAyKvrzu4M?si=9XHbzAuurZxHQL-5"
    },
    {
        title: "Panda Toy",
        description: "Adorable panda plush toy that’s soft, cuddly, and perfect for all ages.",
        price: "₹550",
        image: "img/t3.jpg",
        videoLink: "https://www.instagram.com/reel/DA8e9Hkv0P_/?igsh=eTgzMjN5cWwzZzNl"
    },
    {
        title: "Dashboard Toy",
        description: "Fun dashboard toy to add a lively touch to your car interior.",
        price: "₹399",
        image: "img/t4.jpg",
        videoLink: "https://www.instagram.com/reel/C9Kc3-lP0UI/?igsh=MTVxMGowOTZ6YndvYg=="
    },
    {
        title: "Air Bed",
        description: "Comfortable, easy-to-inflate air bed for home or travel use.",
        price: "₹5999",
        image: "img/t5.jpg",
        videoLink: "https://www.youtube.com/watch?v=example5"
    },
    {
        title: "Display airpods",
        description: "Stylish AirPods display stand to showcase and protect your earbuds.",
        price: "₹999",
        image: "img/t6.jpg",
        videoLink: "https://youtube.com/shorts/wvermjlVUbs?si=rMLhtO5fJ2v6MPGL"
    },
    {
        title: "Ultrapods",
        description: "Compact, ultra-clear wireless earbuds for immersive sound on the go",
        price: "₹199",
        image: "img/t7.jpg",
        videoLink: "https://www.instagram.com/reel/C8BzlD5ve4B/?igsh=MmVxcmFxdXdpNzJm"
    },
    {
        title: "Crystal Ball",
        description: "Elegant crystal ball decor piece, perfect for adding a mystical vibe.",
        price: "₹279",
        image: "img/t8.jpg",
        videoLink: "https://www.instagram.com/reel/C7wJes_iQlW/?igsh=ODJ6dDBueXBlYzN4"
    },
    {
        title: "Mini Projector",
        description: "Compact mini projector for a theater-like experience anywhere.",
        price: "₹1499",
        image: "img/t9.jpg",
        videoLink: "https://www.instagram.com/reel/C8YpX3yvSdu/?igsh=c3VwZzNnZnk5aDd2"
    },
    {
        title: "Robot Vaccum Cleaner",
        description: "Smart robot vacuum for effortless, hands-free floor cleaning.",
        price: "₹1299",
        image: "img/t10.jpg",
        videoLink: "https://www.youtube.com/watch?v=example10"
    }
];

function op(index) {
    currentIndex = index; // Set current index to the clicked product index
    const product = trendproducts[index];
    document.getElementById("popupImage").src = product.image;
    document.getElementById("popupTitle").textContent = product.title;
    document.getElementById("popupDescription").textContent = product.description;
    document.getElementById("popupPrice").textContent = product.price;
    document.getElementById("popupVideoLink").href = product.videoLink;

    // Show the popup
    document.getElementById("popup").style.display = "flex";

    // Add event listeners for closing the popup
    document.addEventListener("keydown", closePopupOnEscape);
    document.getElementById("popup").addEventListener("click", closePopupOnOutsideClick);

    
}

// Function to close popup
function clp() {
    document.getElementById("popup").style.display = "none";
    // Remove event listeners when closing the popup
    document.removeEventListener("keydown", closePopupOnEscape);
    document.getElementById("popup").removeEventListener("click", closePopupOnOutsideClick);
}

function gobkk() {
    if (currentIndex > 0) {
        op(currentIndex - 1); // Open the previous product
    } else {
        clp(); // Close popup if there is no previous product
    }
}

let cart = [];

// Function to add product to cart
function addToCart() {
    // Access the current product from the products array (or trendproducts array)
    const currentProduct = products[currentIndex] || trendproducts[currentIndex];

    // Check if the product already exists in the cart
    const existingItem = cart.find(item => item.title === currentProduct.title);
    if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if already in cart
    } else {
        cart.push({ ...currentProduct, quantity: 1 }); // Add new item with quantity 1
    }

    alert(`${currentProduct.title} has been added to your cart.`);
    updateCartCount();
}

// Update the cart count in the header
function updateCartCount() {
    document.getElementById("cartCount").textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Function to toggle the visibility of the cart popup
function toggleCartPopup() {
    const cartPopup = document.getElementById("cartPopup");
    cartPopup.style.display = cartPopup.style.display === "none" || cartPopup.style.display === "" ? "block" : "none";
    renderCartItems(); // Refresh items in cart each time the popup is opened
}

// Function to render the cart items with quantity controls
function renderCartItems() {
    const cartItemsList = document.getElementById("cartItemsList");
    cartItemsList.innerHTML = ""; // Clear previous cart items

    let totalAmount = 0;
    cart.forEach((item, index) => {
        const itemElement = document.createElement("li");

        itemElement.innerHTML = `
            ${item.title} - ₹${item.price}
            <div class="quantity-control">
                <button onclick="decreaseQuantity(${index})">-</button>
                <input type="text" value="${item.quantity}" readonly />
                <button onclick="increaseQuantity(${index})">+</button>
            </div>
            <span>₹${item.price.replace('₹', '') * item.quantity}</span>
        `;
        cartItemsList.appendChild(itemElement);

        totalAmount += parseInt(item.price.replace('₹', ''), 10) * item.quantity;
    });

    document.getElementById("cartTotalAmount").textContent = totalAmount;
}

// Functions to adjust quantities
function increaseQuantity(index) {
    cart[index].quantity += 1;
    renderCartItems();
    updateCartCount();
}

function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        cart.splice(index, 1); // Remove the item if quantity reaches 0
    }
    renderCartItems();
    updateCartCount();
}

// Function to place the order
function placeOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
    } else {
        alert("Your order has been placed successfully!");
        cart = []; // Clear the cart
        updateCartCount();
        toggleCartPopup(); // Close cart popup
    }
}

// Function to add a product to the cart
function addToCart() {
    // Get product details from popup
    const title = document.getElementById("popupTitle").textContent;
    const price = parseFloat(document.getElementById("popupPrice").textContent.replace("₹", ""));
    const image = document.getElementById("popupImage").src;

    // Create cart item object
    const cartItem = { title, price, image, quantity: 1 };

    // Get cart from localStorage or initialize an empty array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.title === title);
    if (existingItem) {
        existingItem.quantity += 1; // Increment quantity
    } else {
        cart.push(cartItem); // Add new item to cart
    }

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Optionally alert the user
    alert(`${title} added to cart!`);
}
