// Dynamic Context Initialization for Copyright & Modified Dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Interactive Menu Controller Strategy
const menuButton = document.querySelector("#menu");
const navMenu = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
    navMenu.classList.toggle("open");
});