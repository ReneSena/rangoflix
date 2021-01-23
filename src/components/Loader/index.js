import React from "react";

import { LoaderWrapper, LoaderFoodWrapper, Container } from "./styled";

import loadIcon from "../../assets/Img/restaurant.svg";

const Loader = () => (
	<Container>
		<LoaderWrapper src={loadIcon} />
	</Container>
);

export default Loader;
