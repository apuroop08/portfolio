document.getElementById("year").textContent = new Date().getFullYear();

const menu = document.querySelector(".menu");
const mobileNav = document.querySelector(".mobile_nav");
const logo = document.querySelector(".logo");

menu.addEventListener("click", () => {
    const isOpen = mobileNav.style.display === "flex";
    mobileNav.style.display = isOpen ? "none" : "flex";

    menu.classList.toggle("bi-list");
    menu.classList.toggle("bi-x-square-fill");
});
