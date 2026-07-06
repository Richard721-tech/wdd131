// Get the current year
const currentYear = new Date().getFullYear();

// Display the copyright year
document.getElementById("copyright").innerHTML =
    `&copy; ${currentYear} | Ojofeyitimi Richard Oluwasegun | Nigeria`;

// Display the last modified date
document.getElementById("lastModified").innerHTML =
    `Last Modified: ${document.lastModified}`;