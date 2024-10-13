const searchField = document.querySelector(".searchfield")
document.addEventListener("keyup", e => {
	const suggestions = document.querySelector(".suggestions");
	let text = e.target.value;
	if (text.length) {
		suggestions.innerHTML = "";
		suggestions.classList.add("active");
		suggestions.innerHTML += `
			<li>
				<b>${text}</b>
			</li>
			<li>
				Ver todos los resultados de <b>${text}</b>
			</li>
			<li>
				ut aliquid ex <b>${text}</b> vero eos
			</li>
		`
	} else {
		suggestions.innerHTML = "";
		suggestions.classList.remove("active");
	}
})
