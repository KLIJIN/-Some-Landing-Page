const hamb = document.querySelector("#hdrBurgerMenu")
const overlay = document.querySelector(".overlay")
const headerMenu = document.querySelector(".header__menu")
const body = document.querySelector("body")

const toggleBtnClass = (el) => {
    el.classList.toggle("open");
}

const bodyLock = (wrapper) => {   
    !body.classList.contains("wrapper") 
        ? body.classList.add(wrapper)
        : body.classList.remove(wrapper)
   //alternative ways
    // if ( !body.classList.contains("wrapper") ) {
    //     body.classList.add(wrapper);
    //  // document.body.classList.add("wrapper")
    // }else {
    //     body.classList.remove(wrapper);
    //     // document.body.classList.remove("wrapper")
    // }
}
       

const toggleElDisplay = (el) => {
    if (el.style.display === "block"){
        console.log("display", el.style.display)
        el.style.display = "none";
    }else if (el.style.display === "" || el.style.display === "none" ){
        console.log("display",el.style.display)
        el.style.display = "block";
    }
}


hamb.addEventListener( "click" , () => {
    toggleBtnClass(hamb)
    toggleElDisplay(overlay)
    toggleElDisplay(headerMenu)
    bodyLock("wrapper")
});

overlay.addEventListener( "click" , () => {
    headerMenu.style.display = "none";
    overlay.style.display = "none";
    body.classList.remove("wrapper");
})