import React from 'react';
import links from './content';

import { ListWrapper, ListItem, ListLink } from './styled';

const MenuLinks = () => (
  <ListWrapper>
    {links.map((link) => (
      <ListItem key={link.name}>
        <ListLink to={link.url}>{link.name}</ListLink>
      </ListItem>
    ))}
  </ListWrapper>
);

export default MenuLinks;
