const axios = require("axios");

const root = async () => {
	const response = await axios.get("https://cat-fact.herokuapp.com/facts");
	const datos = response.data.all;
	const textos = datos.map(elemento => elemento.text);

	textos.forEach((texto) => {
		console.log(texto);
		console.log('----');
	});
}

root();