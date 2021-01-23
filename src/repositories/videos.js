import URL_BASE from "../config";

const URL_VIDEOS = `${URL_BASE}/videos`;

const create = (objetoVideo) => {
	return fetch(`${URL_VIDEOS}?_embed=videos`, {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(objetoVideo),
	}).then(async (responseServer) => {
		if (responseServer.ok) {
			const resposta = await responseServer.json();
			return resposta;
		}

		throw new Error("Não possível cadastrar o servidor. ;(");
	});
};

export default {
	create,
};
