import React from 'react';
import { Link } from 'react-router-dom';

import Template from '../../../components/Template';

const CadastroCategoria = () => (
    <Template>
        <h1>Cadastro de categoria</h1>
        
        <Link to="/cadastro/video">Categorias video</Link>
    </Template>
);

export default CadastroCategoria;