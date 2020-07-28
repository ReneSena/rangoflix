import React from 'react';

import Menu from '../Menu';
import Footer from '../Footer';

import { Main } from './styled';

const Template = ({ children }) => {
    return(
        <>
            <Menu />
                <Main>
                    {children}
                </Main>
            <Footer />
        </>
    )
}

export default Template;