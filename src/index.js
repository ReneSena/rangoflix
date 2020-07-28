import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';

import { GlobalStyle } from './global';

ReactDOM.render(
    <>
        <GlobalStyle />
        <Routes />
    </>,
    document.getElementById('root')
);
