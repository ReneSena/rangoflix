import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/Img/Logo.png';
import Button from '../Button';

import { AvatarWrapper, MenuWrapper } from './styled';

const Menu = () => (
    <MenuWrapper>
        <Link to="/">
            <AvatarWrapper 
                className="Logo" 
                src={Logo} 
                alt="SenaFlix logo" />
        </Link>

        <Button as={Link} to="/cadastro/video">
            Novo vídeo
        </Button>
    </MenuWrapper>
);

export default Menu;