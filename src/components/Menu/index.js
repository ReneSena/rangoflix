import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/Img/Logo.png';
import MenuLinks from '../MenuLinks';

import { AvatarWrapper, MenuWrapper } from './styled';

const Menu = () => (
  <MenuWrapper>
    <Link to="/">
      <AvatarWrapper
        className="Logo"
        src={Logo}
        alt="RangoFlix logo"
      />
    </Link>

    <MenuLinks />
  </MenuWrapper>
);

export default Menu;
