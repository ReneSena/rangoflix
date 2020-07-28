import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/cadastro/video" component={CadastroVideo} />
                <Route path="/cadastro/categoria" component={CadastroCategoria} />
                <Route component={() => <div>404</div>} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;