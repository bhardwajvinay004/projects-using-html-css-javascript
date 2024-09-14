const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const dateEl = document.getElementById("date");
const yearEl = document.getElementById("year");

const date = new Date();

monthEl.innerHTML = date.toLocaleString("en", {
  month: "long",
});

dayEl.innerHTML = date.toLocaleString("en", {
  weekday: "long",
});

dateEl.innerHTML = date.getDate();

yearEl.innerHTML = date.getFullYear();
