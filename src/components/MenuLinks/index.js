import React from "react";
import links from "./content";
import { useLocation } from "react-router-dom";

import { ListWrapper, ListItem, ListLink } from "./styled";

const MenuLinks = () => {
	const { pathname } = useLocation();

	return (
		<ListWrapper>
			{links.map((link) => (
				<ListItem key={link.name}>
					<ListLink
						className={pathname === link.url && "active"}
						to={link.url}
					>
						{link.name}
					</ListLink>
				</ListItem>
			))}
		</ListWrapper>
	);
};

export default MenuLinks;
