const title = document.getElementById("title");
const bg = document.getElementsByTagName("body");
const h1 = document.getElementsByClassName("world")
h1.style = "color: black;";

function darkTheme() {
    window.alert("Test")
};

const profile = document.getElementById("profile")
profile.addEventListener(ondblclick, () => {
    alert("It works")
});

const popup = document.querySelector("#popup");
const button = document.querySelector("#klik")
const exit = document.querySelector("#exit");

// popup.style.display = "none"

function showPopup() {
    popup.style.display = "flex"
}

function closePopup() {
    popup.style.display = "none"
}