import React from 'react';
import { Link } from 'react-router-dom';
import { FooterBase } from './styled';

import Logo from '../../assets/Img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <Link to="/">
        <img src={Logo} width="150" alt="Logo do RangoFlix" />
      </Link>
      <p>
        Site feito na
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
