import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        list-style: none;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
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
        --backEnd: #00C86F;
    }

    html,
    body {
        margin: 0;
        padding: 0;
    }

    a {
        color: inherit;
    } 

    body {
        --bodyPaddingTop: 94px;
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
`