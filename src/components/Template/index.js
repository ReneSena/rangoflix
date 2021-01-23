import React from "react";
import { useLocation } from "react-router-dom";
import Menu from "../Menu";
import Footer from "../Footer";

import { Main } from "./styled";

const Template = ({ children }) => {
	const { pathname } = useLocation();

	return (
		<>
			<Menu />
			<Main>{children}</Main>
			{!pathname.includes("/cadastro") && <Footer />}
		</>
	);
};

export default Template;
