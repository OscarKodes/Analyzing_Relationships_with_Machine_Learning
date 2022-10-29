
const selectMenu = document.getElementById("dropdown");
const superNotebooks = document.getElementById("supervised-container");
const unsuperNotebooks = document.getElementById("unsupervised-container");


selectMenu.addEventListener("change", (event) => {

    // see which notebook was selected
    let selectedNotebook = event.target.value;

    // hide / unhide divs based on selected notebook
    if (selectedNotebook > 4) {
        superNotebooks.classList.add("hidden");
        unsuperNotebooks.classList.remove("hidden");
    } else {
        superNotebooks.classList.remove("hidden");
        unsuperNotebooks.classList.add("hidden");
    }
})