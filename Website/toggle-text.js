
const toggleBtn = document.querySelectorAll(".toggle-btn");
const toggleTxt = document.querySelectorAll(".toggle-txt");

const collapsable = document.querySelectorAll(".collapsable");


for (let i = 0; i < toggleBtn.length; i++) {

    let btn = toggleBtn[i];

    btn.addEventListener("click", (event) => {

        toggleTxt[i].classList.toggle("hidden")
        collapsable[i].classList.toggle("no-padding")
    })
}

