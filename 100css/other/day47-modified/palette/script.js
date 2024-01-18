// source: https://codepen.io/joshsalazar/pen/LXxzYj
const paletteSwatches = document.getElementsByClassName("palette")
let currentColor = "red";
let continousMode = false;

const pixel = document.getElementsByClassName("pixel")
for (let i = 0; i < pixel.length; i++) {
  pixel[i].addEventListener("click", function () {
    if (currentColor != "clear") {
      if (!this.classList.contains("palette")) {
        if(currentColor == "red"){
          this.className = 'pixel';
          $(this).addClass("red");
        }
        if(currentColor == "orange"){
          this.className = 'pixel';
          $(this).addClass("orange");
        }
        if(currentColor == "yellow"){
          this.className = 'pixel';
          $(this).addClass("yellow");
        }
        if(currentColor == "green"){
          this.className = 'pixel';
          $(this).addClass("green");
        }
        if(currentColor == "blue"){
          this.className = 'pixel';
          $(this).addClass("blue");
        }
        if(currentColor == "purple"){
          this.className = 'pixel';
          $(this).addClass("purple");
        }
      }
    } else if (!this.classList.contains("palette")) {
      this.className = 'pixel';
    }
  })
}

function PickColor(color, element) {
	console.log(paletteSwatches.length);
	for(i = 0; i < paletteSwatches.length; i++){
		console.log(paletteSwatches[i]);
		paletteSwatches[i].classList.remove("selected");
	}
	currentColor = color;
	element.classList.add("selected");
}

function ToggleContinuous(){
	continuousMode = !continuousMode;
}

function HoverColor(element){
	if (continuousMode){
		element.className = 'pixel';
		element.classList.add(currentColor);
	}
}
