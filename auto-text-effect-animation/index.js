const containerEl = document.querySelector(".container");

const roles = [
  "Web Developer",
  "Software Engineer",
  "Instructor",
  "Technical Lead",
  "Solution Architect",
];
let roleIndex = 0;
let charIndex = 0;

updateText();

function updateText() {
  charIndex++;

  containerEl.innerHTML = `<h1>I'm ${
    "aeiou".includes(roles[roleIndex].slice(0, 1).toLowerCase()) ? "an" : "a"
  } ${roles[roleIndex].slice(0, charIndex)}</h1>`;

  if (charIndex === roles[roleIndex].length) {
    roleIndex++;
    charIndex = 0;
  }
  if (roleIndex === roles.length) {
    roleIndex = 0;
  }

  setTimeout(updateText, 200);
}
