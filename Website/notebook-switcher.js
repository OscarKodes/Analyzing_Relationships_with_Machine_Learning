
const selectMenu = document.getElementById("dropdown");
const superNotebooks = document.getElementById("supervised-container");
const unsuperNotebooks = document.getElementById("unsupervised-container");

const notebookLink = document.getElementById("notebook-link");

const elementsFor1 = document.querySelectorAll(".n1");
const elementsFor2 = document.querySelectorAll(".n2");
const elementsFor3 = document.querySelectorAll(".n3");
const elementsFor4 = document.querySelectorAll(".n4");

const links = {
    1: "https://github.com/OscarKodes/Analyzing_Relationships_with_Machine_Learning/blob/main/1%20-%20Exploratory%20Analysis%20.ipynb",
    2: "https://github.com/OscarKodes/Analyzing_Relationships_with_Machine_Learning/blob/main/1%20-%20Exploratory%20Analysis%20.ipynb",
    3: "https://github.com/OscarKodes/Analyzing_Relationships_with_Machine_Learning/blob/main/2%20-%20Classification.ipynb",
    4: "https://github.com/OscarKodes/Analyzing_Relationships_with_Machine_Learning/blob/main/3%20-%20Regression.ipynb"
}

selectMenu.addEventListener("change", (event) => {

    // see which notebook was selected
    let selectedNotebook = event.target.value;

    // actions to take if the unsupervised notebook is selected
    if (selectedNotebook > 4) {
        superNotebooks.classList.add("hidden");
        unsuperNotebooks.classList.remove("hidden");
    } 
    
    // actions to take if a supervised notebook is selected
    else {
        superNotebooks.classList.remove("hidden");
        unsuperNotebooks.classList.add("hidden");

        // update all the text related elements
        updateNotebookText(selectedNotebook);

        // change the notebook link based on selected notebook
        notebookLink.href = links[selectedNotebook];
    }

    
});

// Hide elements for all notebooks except the first one
const switchElements = (notebookElements, turnOn) => {

    for (let i = 0; i < notebookElements.length; i++) {
        let e = notebookElements[i];

        if (turnOn) {
            e.classList.remove("hidden");
        } else {
            e.classList.add("hidden");
        }
    }
}

let elementArr = [
    elementsFor1,
    elementsFor2,
    elementsFor3,
    elementsFor4
]

const updateNotebookText = (notebook) => {

    // turn all off
    elementArr.map(e => switchElements(e, false));

    // turn selected on
    switchElements(elementArr[notebook - 1], true);
}

// Initially show just notebook 1
updateNotebookText(1);
