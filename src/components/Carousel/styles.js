import styled from "styled-components";

export const Title = styled.h3`
	font-weight: 700;
	font-size: 26px;
	line-height: 1;
	margin: 0;
	display: inline-block;
	padding-bottom: 20px;
	line-height: 1;
	border-radius: 4px;
	display: flex;
	align-items: center;

	&:before {
		content: "";
		display: block;
		width: 20px;
		height: 20px;
		background-color: ${(props) => props.background};
		border-radius: 50px;
		margin-right: 10px;
	}

	@media (max-width: 800px) {
		font-size: 24px;
		padding: 0 0 10px 0;
	}
`;

export const VideoCardList = styled.ul`
	margin: 0;
	padding-left: 0;
	padding-bottom: 32px;
	list-style: none;
	display: flex;
	overflow-x: auto;
	flex-direction: row;

	li {
		margin-right: 16px;
	}
`;

export const VideoCardGroupContainer = styled.section`
	color: var(--white);
	min-height: 197px;
	padding: 20px 40px;
	background-color: #171717;

	@media (max-width: 800px) {
		padding: 20px 10px;
		min-height: 165px;
	}
`;
