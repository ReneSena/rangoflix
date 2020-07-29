import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Img from '../../../assets/Img/404.jpg';
import ImgMobile from '../../../assets/Img/404-mobile.jpg';

export const BackgroundWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-image: 
        linear-gradient(
            250deg, 
            rgba(7,7,7,.1), 
            rgba(07,07,07,.8)), 
            url(${Img}
        );
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 800px) {
        background-image: 
        linear-gradient(
            250deg, 
            rgba(7,7,7,.1), 
            rgba(07,07,07,.8)), 
            url(${ImgMobile}
        );
    }
`

export const ContainerMessage = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    width: 530px;
    overflow-x: hidden;
`

export const DescriptionError = styled.h1`
    color: var(--white);
    font-size: 150px;
    margin: 0;

    @media (max-width: 800px) {
        font-size: 100px;
    }
`

export const DescriptionMessage = styled.p`
    color: var(--white);
    font-size: 30px;
    margin-bottom: 40px;

    @media (max-width: 800px) {
        font-size: 24px;
    }
`

export const Button = styled(Link)`
    background: var(--primary);
    padding: 10px 20px;
    border-radius: 5px;
    border: 2px solid var(--white);
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
    color: var(--white);

    &:hover {
        opacity: .8;
    }
`