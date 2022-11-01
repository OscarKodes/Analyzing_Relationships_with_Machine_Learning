
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
        1: "All the correlations between the feature pairs above had a p-value of 0." +
                "<br><br>" +
                "<ul>" + 
                "Notable findings:" +
                "<li>Subjects were more likely to have partners that had similar political leanings.</li>" +
                "<li>Subjects were more likely to have partners that had similar education levels.</li>" +
                "<li>The older a subject was when meeting their partner, the larger their age gap tended to be.</li>" +
                "<li>As subjects were likely to have partners that had similar education levels, their mothers were also likely to have similar education levels.</li>" +
                "<li>The older a subject was when they met their partner, the shorter it took for them to become a couple.</li>" +
                "</ul>",
        2: "All the top correlations with rQual shown had p-values below 0.05." +
                "<br><br>" +
                "<ul>" + 
                "Notable findings:" +
                "<li>Income: When couples had higher household incomes, the relationship was more likely to be self-rated as 'good.'</li>" +
                "<li>Education: When couples had higher education levels, the relationship was more likely to be self-rated as 'good.'</li>" +
                "<li>Age: When couples were older, the relationship was more likely to be self-rated as 'good.'</li>" +
                "<li>Children: When the subject's household had more members below the age of 18, the relationship was less likely to be self-rated as 'good.'</li>" +
                "</ul>",
        3: "Classification" +
                "<br><br>" +
                "<ul>" +
                "Notable findings:" +
                "<li>Income: When couples had higher household incomes, the relationship was more likely to be self-rated as 'good.'</li>" +
                "<li>Education: When couples had higher education levels, the relationship was more likely to be self-rated as 'good.'</li>" +
                "<li>Age: When couples were older, the relationship was more likely to be self-rated as 'good.'</li>" +
                "<li>Sex Frequency: When the couple had sex at least once a week or more, the relationship was more likely to be self-rated as 'good.'</li>" +
                "</ul>",
        4: "Regression" +
                "<br><br>" +
                "<ul>" +
                "Notable findings:" +
                "<li>Income: When couples had higher household incomes, the relationship was more likely to be self-rated as 'good.'</li>" +
                "<li>Equal Earnings: When couples earned about the same amount of income, the relationship was more likely to be self-rated as 'good.'</li>" +
                "<li>School : When couples met in school, the relationship was more likely to be self-rated as 'good.'</li>" +
                "<li>Work Neighbors: When couples met as work neighbors*, the relationship was more likely to be self-rated as 'good.'</li>" +
                "<li>Age: When couples were older, the relationship was more likely to be self-rated as 'good.'</li>" +
                "<li>Sex Frequency: When the couple had sex at least once a week or more, the relationship was more likely to be self-rated as 'good.'</li>" +
                "</ul>" +
                "* When consulting the codebook, it was unclear what the distinction was between coworkers and work neighbors if any.",
    }

    const titleObj = {
        1: "Top Correlations between Features",
        2: "Top Correlations between Features & Relationship Quality",
        3: "Classification Model Feature Coefficients",
        4: "Regression Model Feature Coefficients"
    }

    superText1.innerHTML = textObj1[notebook];
    superText2.innerHTML = textObj2[notebook];
    visTitle.innerHTML = titleObj[notebook];
} 
