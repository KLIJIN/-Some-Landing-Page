const hamb = document.querySelector("#hdrBurgerMenu")
const overlay = document.querySelector(".overlay")
const headerMenu = document.querySelector(".header__menu")

const toggleBtnClass = (el) => {
    el.classList.toggle("open");
}

const toggleElDisplay = (el) => {
    if (el.style.display === "block"){
        console.log("display", el.style.display)
        el.style.display = "none";
    }else {
        console.log("display",el.style.display)
        el.style.display = "block";
    }
}

hamb.addEventListener( "click" , () => {
    toggleBtnClass(hamb)
    toggleElDisplay(overlay)
    toggleElDisplay(headerMenu)
});

overlay.addEventListener( "click" , () => {
    headerMenu.style.display = "none";
    overlay.style.display = "none";
})