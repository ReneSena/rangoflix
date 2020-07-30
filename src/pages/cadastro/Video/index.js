import React from 'react';
import { Link } from 'react-router-dom';

import Template from '../../../components/Template';

const CadastroVideo = () => (
    <Template>
        <h1>Cadastro de vídeo</h1>
        
        <Link to="/cadastro/categoria">Cadastro de Categorias</Link>
    </Template>
);

export default CadastroVideo;

