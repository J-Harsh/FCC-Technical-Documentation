const navlinks = document.querySelectorAll(".nav-link");
let currentActiveLink = document.querySelector(".nav-link.active");
console.log("hi");

navlinks.forEach((navlink) => {
    navlink.addEventListener("click", function () {
        console.log("active changed");
        currentActiveLink.classList.remove("active");
        currentActiveLink = this;
        currentActiveLink.classList.add("active");
    });
});

const btnLight = document.getElementById("btnLight"); // sun

btnLight.addEventListener("click", function()
{
    document.body.classList.remove("dark");
});

const btnDark = document.getElementById("btnDark"); // moon
btnDark.addEventListener("click", function()  
{
    document.body.classList.add("dark");
});
