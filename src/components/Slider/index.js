import React, { Component } from "react";
import Slider from "react-slick";

import { Container } from './styled';

const SliderWrapper = ({ children }) => {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        centerMode: false,
        variableWidth: true
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

