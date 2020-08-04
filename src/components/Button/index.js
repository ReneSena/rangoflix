import styled from 'styled-components';

export const Button = styled.button`
    color: var(--white);
    border: 0;
    box-sizing: border-box;
    cursor: pointer;
    padding: 10px 20px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    background: var(--red);
    transition: all .3s;

    &:hover,
    &:focus {
        opacity: .8;
    }

    @media (max-width: 800px) {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--red);
        border-radius: 0;
        border: 0;
        text-align: center;
    }
`;

export const ButtonSuccess = styled(Button)`
    background-color: #03a04c;
`;

export const ButtonDanger = styled(Button)`
    background-color: transparent;
    
    &:hover {
        background-color: var(--primary);
        opacity: 1;
    }
`;

export const ButtonIcon = styled(Button)`
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:hover {
        opacity: .8;
    }
`