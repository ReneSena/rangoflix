import React, { useEffect, useState } from "react";
import Template from "../../components/Template";
import Loader from "../../components/Loader";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import categoriasRepository from "../../repositories/categorias";

const Home = () => {
	const [dadosIniciais, setDadosIniciais] = useState([]);

	useEffect(() => {
		categoriasRepository
			.getAllWithVideos()
			.then((categoriasComVideos) => {
				setDadosIniciais(categoriasComVideos);
			})
			.catch((error) =>
				console.error("Não foi possível acessar o servidor. :(", error)
			);
	}, []);

	return (
		<>
			<Template>
				{dadosIniciais.length === 0 && <Loader />}

				{dadosIniciais.map((categoria, indice) => {
					if (indice === 0) {
						return (
							<div key={categoria.id}>
								<BannerMain
									videoTitle={
										dadosIniciais[0].videos[0].titulo
									}
									url={dadosIniciais[0].videos[0].url}
									videoDescription={
										dadosIniciais[0].videos[0].description
									}
								/>
								<Carousel
									ignoreFirstVideo
									category={dadosIniciais[0]}
								/>
							</div>
						);
					}

					return <Carousel key={categoria.id} category={categoria} />;
				})}
			</Template>
		</>
	);
};

export default Home;
