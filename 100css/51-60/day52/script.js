console.clear();

let tilesContainer = document.querySelector(".tiles-container");

function helper(index) {
  const tile = document.createElement("div");
  const className = `tile tile${index}`;

  tile.className = className;
  tilesContainer.appendChild(tile);

  for (let i = 1; i <= 12 + index * 6; i++) {
    const dot = document.createElement("div");
    tile.appendChild(dot);
    dot.className = `dot dot${i}`;
  }
}

//code to create HTML, run and copy paste the html generated
// for (let i = 1; i <= 10; i++) {
//   helper(i);
// }