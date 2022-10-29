
const selectMenu = document.getElementById("dropdown");
const superNotebooks = document.getElementById("supervised-container");
const unsuperNotebooks = document.getElementById("unsupervised-container");
const superText1 = document.getElementById("super-text1");
const superText2 = document.getElementById("super-text2");
const visTitle = document.getElementById("vis-title");

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

    const notebookLinks = {
        1: `<a href="https://github.com/OscarKodes/Analyzing_Relationships_with_Machine_Learning/blob/main/1%20-%20Exploratory%20Analysis%20.ipynb">EDA notebook</a>`,
        2: `<a href="https://github.com/OscarKodes/Analyzing_Relationships_with_Machine_Learning/blob/main/1%20-%20Exploratory%20Analysis%20.ipynb">EDA notebook</a>`,
        3: `<a href="https://github.com/OscarKodes/Analyzing_Relationships_with_Machine_Learning/blob/main/2%20-%20Classification.ipynb">classification notebook</a>`,
        4: `<a href="https://github.com/OscarKodes/Analyzing_Relationships_with_Machine_Learning/blob/main/3%20-%20Regression.ipynb">regression notebook</a>`
    }

    const textObj1 = {
        1: `This barchart shows the features that had the strongest correlations with each other based on the correlation matrix conducted in my ${notebookLinks[notebook]}.`,
        2: `This barchart shows the features that had the strongest correlations with relationship quality based on the correlation matrix conducted in the ${notebookLinks[notebook]}.`,
        3: `This barchart shows the features left in my Logistic Regression model (for predicting relationship quality) after conducting backwards elimination to remove all features that were more likely to be statistically insignifgant (where their alpha levels were over p = .05). The specific steps I took can be found in the ${notebookLinks[notebook]}.`,
        4: `This barchart shows the features left in my Linear Regression model (for predicting relationship quality) after conducting backwards elimination to remove all features that were more likely to be statistically insignifgant (where their alpha levels were over p = .05). The specific steps I took can be found in the ${notebookLinks[notebook]}.`
    }

    const textObj2 = {
        1: "text-1",
        2: "text-2",
        3: "text-3",
        4: "text-4"
    }

    const titleObj = {
        1: "Title-1",
        2: "Title-2",
        3: "Title-3",
        4: "Title-4"
    }

    superText1.innerHTML = textObj1[notebook];
    superText2.innerText = textObj2[notebook];
    visTitle.innerText = titleObj[notebook];
} 