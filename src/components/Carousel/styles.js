import styled from 'styled-components';

export const Title = styled.h3`
	font-weight: 600;
	font-size: 35px;
	line-height: 1;
	margin: 0;
	display: inline-block;
	padding-bottom: 10px;
	background: red;
	line-height: 1;
	border-radius: 4px;

	@media (max-width: 800px) {
		font-size: 24px;
		padding: 0 0 10px 0;
	}
`;

export const ExtraLink = styled.a`
	margin-left: 16px;
	text-decoration: none;
	transition: opacity .3s;

	&:hover,
	&:focus {
		opacity: .5;
	}

	@media (max-width: 800px) {
		display: block;
		margin-bottom: 16px;
		margin-left: 0;
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
	background-color: ${props => props.background || ''};

	@media (max-width: 800px) {
		padding: 20px 10px;
		min-height: 165px;
	}
	
	&:not(:last-of-type) {
		margin-bottom: 16px;
	}
`;