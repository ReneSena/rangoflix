import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import CadastroVideo from "./pages/cadastro/Video";
import CadastroCategoria from "./pages/cadastro/Categoria";
import Page404 from "./pages/error/404";

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/cadastro/video" component={CadastroVideo} />
				<Route
					path="/cadastro/categoria"
					component={CadastroCategoria}
				/>
				<Route
					path="/cadastro/categoria/editar"
					component={CadastroCategoria}
				/>
				<Route component={Page404} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
