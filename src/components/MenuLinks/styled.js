import styled from "styled-components";
import { Link } from "react-router-dom";

export const ListWrapper = styled.ul`
	display: flex;
	align-items: center;
`;
export const ListItem = styled.li`
	margin: 0 20px;
`;

export const ListLink = styled(Link)`
	color: var(--white);
	font-size: 16px;
	font-weight: 400;
	text-decoration: none;

	&.active {
		font-weight: 600;
	}
`;
