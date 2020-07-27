import React from 'react';

import Logo from '../../assets/Img/Logo.png';
import Button from '../Button';

import { AvatarWrapper, MenuWrapper } from './styled';

const Menu = () => (
    <MenuWrapper>
        <a href="/">
            <AvatarWrapper 
                className="Logo" 
                src={Logo} 
                alt="SenaFlix logo" />
        </a>

        <Button as="a" href="/">
            Novo vídeo
        </Button>
    </MenuWrapper>
);

export default Menu;