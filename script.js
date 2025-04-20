// Scroll to products section
function scrollToProducts() {
    document.getElementById("Our filter").scrollIntoView({ behavior: "smooth" });
}

// Scroll to donation section (optional function)
function scrollToDonation() {
    document.getElementById("donation").scrollIntoView({ behavior: "smooth" });
}

// Buy Now button click
function buyNow(productName) {
    alert(`Thanks for your interest in the "${productName}"! Redirecting to checkout soon.`);
}

// Contact form submission handling
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
        alert("Thanks for reaching out! We'll get back to you shortly.");
        this.reset(); // clear the form
    } else {
        alert("Please fill out all fields before submitting.");
    }
});
