function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cartContainer");
    cartContainer.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        cartContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}" class="cart-image">
                <h3>${item.title}</h3>
                <p>Price: ₹${item.price}</p>
                <p>Quantity: 
                    <button onclick="changeQuantity(${index}, -1)">-</button>
                    ${item.quantity}
                    <button onclick="changeQuantity(${index}, 1)">+</button>
                </p>
                <p>Total: ₹${itemTotal}</p>
            </div>
        `;
    });

    document.getElementById("totalAmount").innerText = `Total Amount: ₹${total}`;
}

// Function to increase or decrease quantity
function changeQuantity(index, delta) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart[index].quantity += delta;

    // Remove item if quantity is 0
    if (cart[index].quantity === 0) cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart(); // Reload the cart
}

// Open the popup when "Place Order" is clicked
document.getElementById("placeOrderButton").onclick = function () {
    document.getElementById("customerPopup").style.display = "flex";
};

// Close the popup
function closePopup() {
    document.getElementById("customerPopup").style.display = "none";
}
function submitOrder() {
    // Get customer details
    const customerName = document.getElementById("customerName").value.trim();
    const customerAddress = document.getElementById("customerAddress").value.trim();
    const customerContact = document.getElementById("customerContact").value.trim();

    // Validate inputs
    if (!customerName || !customerAddress || !customerContact) {
        alert("Please fill all fields!");
        return;
    }

    // Get cart data
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Cart is empty!");
        closePopup();
        return;
    }
    const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Generate a unique order ID
    const orderId = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    // Prepare the order data (ensure proper key mapping)
    const orderData = cart.map(item => ({
        OrderID: orderId,
        CustomerName: customerName,
        CustomerAddress: customerAddress,
        CustomerContact: customerContact,
        ItemTitle: item.title,
        ItemPrice: item.price,
        Quantity: item.quantity,
        ItemTotal: item.price * item.quantity,
    }));

    // Add total row to the order data
    orderData.push({
        OrderID: orderId,
        CustomerName: customerName,
        CustomerAddress: customerAddress,
        CustomerContact: customerContact,
        ItemTitle: "Total",
        ItemPrice: "",
        Quantity: "",
        ItemTotal: totalAmount,
    });

    // Retrieve existing order data
    let existingData = [];
    const existingFile = localStorage.getItem("ordersHist");
    if (existingFile) {
        const workbook = XLSX.read(existingFile, { type: "base64" });
        const sheet = workbook.Sheets["Orders"];
        existingData = XLSX.utils.sheet_to_json(sheet);
    }

    // Combine existing data with the new order data
    const updatedData = [...existingData, ...orderData];

    // Create the Excel sheet with proper headers
    const ws = XLSX.utils.json_to_sheet(updatedData);
    XLSX.utils.sheet_add_aoa(ws, [
        [
            "OrderID",
            "CustomerName",
            "CustomerAddress",
            "CustomerContact",
            "ItemTitle",
            "ItemPrice",
            "Quantity",
            "ItemTotal",
        ],
    ], { origin: "A1" });

    // Create a new workbook and append the sheet
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Orders");

    // Save the updated workbook in localStorage
    const workbookOutput = XLSX.write(wb, { bookType: "xlsx", type: "base64" });
    localStorage.setItem("ordersHist", workbookOutput);

    // Download the updated Excel file
    XLSX.writeFile(wb, "Order_CustDetails.xlsx");

    // Clear the cart, close popup, and refresh the UI
    localStorage.removeItem("cart");
    loadCart();
    closePopup();
    alert("Order placed successfully!");
}
// Load cart when the page loads
window.onload = loadCart;

function goBack() {
    window.history.back();
}