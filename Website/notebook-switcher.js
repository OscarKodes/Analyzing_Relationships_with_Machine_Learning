
const selectMenu = document.getElementById("dropdown");
const superNotebooks = document.getElementById("supervised-container");
const unsuperNotebooks = document.getElementById("unsupervised-container");
const superText = document.getElementById("super-text");
// const visTitle = document.getElementById("vis-title");

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

        // update supervised text explaination
        updateTextAndTitle(selectedNotebook);
    }
});

const updateTextAndTitle = (notebook) => {

    const textObj = {
        1: "text-1",
        2: "text-2",
        3: "text-3",
        4: "text-4"
    }

    // const titleObj = {
    //     1: "Title-1",
    //     2: "Title-2",
    //     3: "Title-3",
    //     4: "Title-4"
    // }

    superText.innerText = textObj[notebook];
    // visTitle.innerText = titleObj[notebook];
} 