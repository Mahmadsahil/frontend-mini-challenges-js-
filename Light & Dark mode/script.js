const checkbox1 = document.querySelector("#checkbox1");
const checkbox2 = document.querySelector("#checkbox2");
const innerCont = document.querySelector(".innerCont");

checkbox1.addEventListener("change", () => {

    if (checkbox1.checked){
        document.body.classList.add("dark");
        checkbox2.checked = true;
    } else {
        document.body.classList.add("dark");
        checkbox2.checked = false;
        document.body.classList.remove("dark");
        innerCont.classList.add("light");
    }

});

checkbox2.addEventListener("change", () => {

    if (checkbox2.checked) {
        innerCont.classList.remove("light");
        innerCont.classList.add("dark");
    } else {
        innerCont.classList.add("light");
        innerCont.classList.remove("dark");
    }

})
