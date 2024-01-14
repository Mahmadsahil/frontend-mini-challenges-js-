const showDialog = document.querySelector("#ShowDialog");
const closeDialog = document.querySelector("#closeDialog");
const dialogBox = document.querySelector(".dialogBox");

const toggleVisibility = () => {
    dialogBox.style.visibility = dialogBox.style.visibility === "hidden" ? "unset" : "hidden";
};

showDialog.addEventListener("click", toggleVisibility);
closeDialog.addEventListener("click", toggleVisibility);
