import styled from 'styled-components';

export const Container = styled.div`
    padding: 0;
    margin: 0;

    .slick-prev,
    .slick-next {
        z-index: 50;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 30px;
        height: 30px;
        transform: initial;
        
        &:before {
            font-size: 30px;
        }
    }

    .slick-prev {
        left: 0;
    }
    .slick-next {
        right: 16px;
    }
`;

export const SliderItem = styled.div`
    margin-right: 16px;

    img {
        margin: 16px;
        width: 298px;
        height: 197px;
        object-fit: cover;
    }
`;