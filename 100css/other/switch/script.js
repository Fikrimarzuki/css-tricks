const background = document.querySelector(".background");
const switchButton = document.querySelector(".switch_container");

switchButton.addEventListener("click", () => {
  if (background.classList.contains("off")) {
    background.classList.remove("off");
  }
  background.classList.toggle("on");
});