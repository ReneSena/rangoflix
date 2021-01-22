import styled from "styled-components";

export const FooterBase = styled.footer`
	background: #121212;
	padding-left: 16px;
	padding-right: 16px;
	padding-top: 20px;
	padding-bottom: 20px;
	color: var(--white);
	text-align: center;

	p {
		margin-top: 10px;
		font-size: 12px;
	}

	@media (max-width: 800px) {
		margin-bottom: 50px;
	}
`;
