// source: https://codepen.io/UltimaPasuireALuiChiriac/pen/WYRodv

function changeColor(x) {
  x.style.backgroundColor = "#"+(Math.random()*0xFFFFFF<<0).toString(16);
}

function reset(){
  var pixeli = document.getElementsByClassName("pixel");
  for(var i = 0; i < pixeli.length; i++) {
    pixeli[i].style.backgroundColor = "white";
  }	
}
