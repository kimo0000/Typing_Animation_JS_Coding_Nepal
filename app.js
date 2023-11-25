const text = document.querySelector(".text");

const updateText = () => {
  setTimeout(() => {
    text.textContent = "Develloper";
  }, 0);
  setTimeout(() => {
    text.textContent = "Programmer";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Youtuber";
  }, 8000);
  setTimeout(() => {
    text.textContent = "Designer";
  }, 12000);
  setTimeout(() => {
    text.textContent = "Blogger";
  }, 16000);
};

updateText();

setInterval(updateText, 20000);
