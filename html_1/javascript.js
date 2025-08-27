// ============================
// JavaScript Starter
// ============================

// Variables (different data types)
let userName = "Guest";   // String
let visitCount = 5;       // Number

// Perform a mathematical operation
let bonusVisits = visitCount + 2;

// Decision structure (if/else)
if (bonusVisits > 6) {
    console.log("You’ve earned a bonus badge!");
} else {
    console.log("Keep exploring to earn more badges!");
}

// Logical operator example
if (visitCount > 1 && userName !== "") {
    console.log("Returning visitor detected!");
} else {
    console.log("Welcome new visitor!");
}

// Output message to both console + DOM
const footer = document.querySelector("footer");
let message = `Hello ${userName}, visits: ${visitCount}, bonus: ${bonusVisits}`;
footer.innerHTML += `<p>${message}</p>`;
console.log(message);

// Example: Attach an event to buttons (for later use)
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("This feature will be available soon!");
    });
});
