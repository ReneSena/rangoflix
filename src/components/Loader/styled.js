import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const LoaderWrapper = styled.div`
    &.loading{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 5px solid #e0ebeb;
    }
    /*add animation*/
    &.loading-animation{
        border-left: 5px solid #009933;
        animation: load 1s infinite linear;
        animation-timing-function: ease-in-out;
    }
    @keyframes load{
        0%{
            transform: rotate(0);
        }
        50%{
            border-left: 5px solid #33ff77;
            box-shadow: 0px 0px .1em #000;
        }
        100%{
            transform: rotate(360deg);
        }
    }
`;
