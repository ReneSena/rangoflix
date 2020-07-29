import React from "react";
import Slider from "react-slick";

import { Container, ArrowLeft, ArrowRight } from './styled';

const SliderWrapper = ({ children }) => {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        centerMode: false,
        variableWidth: true,
        nextArrow: <ArrowRight />,
        prevArrow: <ArrowLeft />
    };

    return (
        <Container>
            <Slider {...settings}>
                {children}
            </Slider>
        </Container>
    )
}

export default SliderWrapper;

