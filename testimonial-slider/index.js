const testimonials = [
  {
    name: "Cherise G",
    photoUrl:
      "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
  },
  {
    name: "XYZ",
    photoUrl:
      "https://images.unsplash.com/photo-1611912901739-374ecac03e3b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "wkjdef fsjcb bukdhe bf cskbhfbhs. ebjhdfsf  ukhs f s",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const unameEl = document.querySelector(".username");

let i = 0;

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[i];

  imgEl.src = photoUrl;
  textEl.innerText = text;
  unameEl.innerText = name;
  i++;

  if (i === testimonials.length) {
    i = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 5000);
}

updateTestimonial();
