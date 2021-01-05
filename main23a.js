function pirkumaSumma() {
	let cena = document.getElementById("cena").value;
	let jamaksa = cena;
	if (cena>100) {
		jamaksa = cena*0.95;
	}
	else if (cena>50) {
		jamaksa = cena*0.97;
	}
    document.getElementById("jamaksa").innerHTML = `Par pirkumu jāmaksā ${jamaksa}`;	
}