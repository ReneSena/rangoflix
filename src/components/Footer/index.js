import React from "react";
import { Link } from "react-router-dom";
import { FooterBase } from "./styled";

import Logo from "../../assets/Img/Logo.png";

function Footer() {
	const data = new Date();

	return (
		<FooterBase>
			<Link to="/">
				<img src={Logo} width="100" alt="Logo do RangoFlix" />
			</Link>
			<p>Feito com React ♥ 2020 - {data.getFullYear()}</p>
		</FooterBase>
	);
}

export default Footer;
