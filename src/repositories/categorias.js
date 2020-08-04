import config from '../config';

const URL_CATEGORIAS = `${config.URL_BASE}/categorias`;

const getAllWithVideos = () => {
  return fetch(`${URL_CATEGORIAS}?_embed=videos`)
    .then(async (responseServer) => {
      if (responseServer.ok) {
        const resposta = await responseServer.json();
        return resposta;
      }
      
      throw new Error('Não possível acessar o servidor. ;(')
    })

};

export default {
  getAllWithVideos,
};
