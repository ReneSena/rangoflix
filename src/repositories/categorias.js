import URL_BASE from "../config";

const URL_CATEGORIAS = `${URL_BASE}/categorias`;

const getAll = () => {
	return fetch(`${URL_CATEGORIAS}`).then(async (responseServer) => {
		if (responseServer.ok) {
			const resposta = await responseServer.json();
			return resposta;
		}

		throw new Error("Não possível acessar o servidor. ;(");
	});
};

const getAllWithVideos = () => {
	return fetch(`${URL_CATEGORIAS}?_embed=videos`).then(
		async (responseServer) => {
			if (responseServer.ok) {
				const resposta = await responseServer.json();
				return resposta;
			}

			throw new Error("Não possível acessar o servidor. ;(");
		}
	);
};

export default {
	getAllWithVideos,
	getAll,
};
