const navContaeins = document.querySelector(".megamenu");
const navbtn = document.querySelector(".icone");
navContaeins.style.display = "none";
let isDisplayed = false;

const toggleMenu = () => {
    if (!isDisplayed) {
        navContaeins.style.display = "flex";
    } else {
        navContaeins.style.display = "none";
    }
    
    isDisplayed = !isDisplayed;
};


navbtn.addEventListener("click", toggleMenu)
