import { createGlobalStyle } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    
    * {
        list-style: none;
        box-sizing: border-box;
    }

    :root {
        --primary: #2A7AE4;
        --red: #ff5252;
        --black: #222;
        --blackLighter: #9E9E9E;
        --grayLight: #F5F5F5;
        --grayMedium: #e5e5e5; 
        --white: #FFFFFF;
        --frontEnd: #6BD1FF;
        --backEnd: #27ae60;
    }

    html,
    body {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
    }

    a {
        color: inherit;
    } 

    body {
        --bodyPaddingTop: 60px;
        padding-top: var(--bodyPaddingTop);

        @media (max-width: 800px) {
            --bodyPaddingTop: 40px;
            padding-top: var(--bodyPaddingTop);
        }
    }

    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    ::-webkit-scrollbar-track {
        box-shadow: 0 0 0 1px var(--blackLighter); 
        border-radius: 1.5px;
    }
    
    ::-webkit-scrollbar-thumb {
        background: var(--blackLighter); 
        border-radius: 1.5px;
    }

    #root {
        min-height: calc(100vh - var(--bodyPaddingTop)) ;
        display: flex;
        flex-direction: column;
    }
`;
