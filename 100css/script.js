(function() {
  const container = document.getElementById("container");
  const data = [...Array(100).keys()]
  function render() {
    let innerHtml = "";
    const folders = ["1-10", "11-20", "21-30", "31-40", "41-50", "51-60", "61-70", "71-80", "81-90", "91-100"]
    data.map((el, i) => {
      const folder = folders[Math.floor(i/10)]
      innerHtml += `<div class="box">
        <h3>Day-${i+1}</h3>
        <div class="image-box">
          <img src="./${folder}/day${i+1}/day${i+1}.png" alt="${i}" />
          <a href="./${folder}/day${i+1}/index.html" target="_blank">Preview</a>
        </div>
      </div>`
    })
    container.innerHTML = innerHtml;
  }
  render()
})()

