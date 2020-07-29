import styled from 'styled-components';

export const VideoCardContainer = styled.a`
	text-decoration: none;
	overflow: hidden;
	cursor: pointer;
	color: white;
	flex: 0 0 298px;
	width: 298px;
	height: 165px;
	background-image: ${({ url }) => `url(${url})`};
	background-size: cover;
	background-position: center;
	border-radius: 5px;
	position: relative;
	display: flex;
	align-items: flex-end;
	padding: 16px;
	transition: all .3s;
	
	&:hover,
	&:focus {
		opacity: .4;
		transform: scale(0.98);
		box-shadow: 0 0 0 1px var(--white);
	}

	&:not(:first-child) {
		margin-left: 20px;
	}
`;
