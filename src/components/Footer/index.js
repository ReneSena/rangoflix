import React from 'react';
import { FooterBase } from './styled';

import Logo from '../../assets/Img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="#">
        <img src={Logo} width="150" alt="Logo do RangoFlix" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
