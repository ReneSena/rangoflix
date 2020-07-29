import styled from 'styled-components';
import { KeyboardArrowLeft } from '@styled-icons/material-twotone/KeyboardArrowLeft';
import { KeyboardArrowRight } from '@styled-icons/material-twotone/KeyboardArrowRight';

export const Container = styled.div`
    padding: 0;
    margin: 0;

    .slick-prev,
    .slick-next {
        z-index: 50;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 60px;
        height: 60px;
        transform: initial;

        &:before {
            font-size: 60px;
        }
    }

    .slick-prev {
        left: 0;
        top: -5px;
        height: 165px;
        background: rgba(0,0,0,0.5);
    }

    .slick-next {
        top: -5px;
        right: 0;
        height: 165px;
        background: rgba(0,0,0,0.5);
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

export const ArrowLeft = styled(KeyboardArrowLeft)`
    color: var(--white);

    &:hover {
        color: var(--white);
    }
`

export const ArrowRight = styled(KeyboardArrowRight)`
    color: var(--white);

    &:hover {
        color: var(--white);
    }
`