import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

const Home = () => {
    return (
        <>
            <Menu />

            <BannerMain
                videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
                url={dadosIniciais.categorias[0].videos[0].url}
                videoDescription={"Já fez ovo cozido e deu errado? Não se preocupe, vem comigo que eu te mostro o passo a passo. :)"}
            />

            <Carousel
                ignoreFirstVideo
                category={dadosIniciais.categorias[0]}
            />

            <Carousel
                category={dadosIniciais.categorias[1]}
            />

            <Carousel
                category={dadosIniciais.categorias[2]}
            />      

            <Carousel
                category={dadosIniciais.categorias[3]}
            />           

            <Footer />
        </>
    );
}

export default Home;