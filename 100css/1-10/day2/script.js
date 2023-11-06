const button = document.querySelector(".btn");
let isAnimating = false;

const handleButton = () => {
  if (isAnimating) {
    button.classList.remove("btn-animation");
    button.classList.add("btn-animation-reverse");
  } else {
    button.classList.add("btn-animation");
    button.classList.remove("btn-animation-reverse");
  }
  isAnimating = !isAnimating;
};
