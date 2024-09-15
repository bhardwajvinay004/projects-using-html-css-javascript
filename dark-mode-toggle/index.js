const bodyEl = document.querySelector("body");
const inputEl = document.querySelector(".input");

function updateTheme() {
  if (inputEl.checked) {
    bodyEl.style.backgroundColor = "black";
  } else {
    bodyEl.style.backgroundColor = "white";
  }
}

function updateToggleState() {
  localStorage.setItem("darkMode", JSON.stringify(inputEl.checked));
}

const lsDarkMode = localStorage.getItem("darkMode");
inputEl.checked = lsDarkMode ? JSON.parse(lsDarkMode) : false;
updateTheme();

inputEl.addEventListener("input", () => {
  updateToggleState();
  updateTheme();
});
