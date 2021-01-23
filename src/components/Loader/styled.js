import styled, { keyframes } from "styled-components";

const load = keyframes`
	0% {
		transform: scale(1);
	}
	100% {
		transform: scale(1.2);
		filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.4));
	}
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: calc(100vh - 170px);
	z-index: 100;
`;

export const LoaderWrapper = styled.img`
	width: 80px;
	animation: ${load} 1s infinite ease-in;
	animation-direction: alternate;
`;
