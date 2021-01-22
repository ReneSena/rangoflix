import styled from "styled-components";

export const AvatarWrapper = styled.img`
	max-width: 168px;
	height: 30px;

	@media (max-width: 800px) {
		max-width: 105px;
	}
`;

export const MenuWrapper = styled.nav`
	width: 100%;
	height: 60px;
	z-index: 100;

	display: flex;
	justify-content: space-between;
	align-items: center;

	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	padding-left: 5%;
	padding-right: 5%;

	background: #ea1d2c;
	border-bottom: 1px solid #c1c1c1;

	@media (max-width: 800px) {
		height: 40px;
		justify-content: center;
	}
`;
