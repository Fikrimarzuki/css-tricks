(function() {
  const container = document.getElementById("container");
  function render() {
    let innerHtml = "";
    data.map((el, i) => {
      let content = "";
      el.content.map((cn, j) => {
        content += `
          <a href="${cn.htmlSource}" target="_blank">${cn.subtitle}</a>
          <p>source: ${cn.source}</p>
        `
      })
      innerHtml += `<div class="box">
        <h3><span class="box-number">${i+1}.</span><br />${el.title}</h3>
        <div class="image-box">
          <img src="${el.imageUrl}" alt="${el.title}" />
        </div>
        <div class="content-box">
          <p><strong>Type:</strong> ${el.type} ${el.isUndone ? "- COMING SOON" : ""}</p>
          ${content}
        </div>
      </div>`
    })
    container.innerHTML = innerHtml;
  }
  render()
}
)()