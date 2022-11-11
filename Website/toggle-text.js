
const toggleBtn = document.querySelectorAll(".toggle-btn");
const toggleTxt = document.querySelectorAll(".toggle-txt");


for (let i = 0; i < toggleBtn.length; i++) {

    let btn = toggleBtn[i];

    btn.addEventListener("click", (event) => {

        toggleTxt[i].classList.toggle("hidden")
    })
}

