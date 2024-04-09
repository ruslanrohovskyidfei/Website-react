import React from "react";
// @ts-ignore
import Slider from "react-slick";
import {SliderItem} from "../Elements/SliderItem";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function SimpleSlider(){
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            <SliderItem img="./Images/music-lover_4460x4460.jpg" alt="Music lover" />
            <SliderItem img="./Images/man-wearing-over-ear-headphones_4460x4460.jpg" alt="Music lover"/>
            <SliderItem img="./Images/looking-out-window-wearing-headphones_4460x4460.jpg" alt="Music lover"/>
            <SliderItem img="./Images/over-ear-headphones_4460x4460.jpg" alt="Music lover"/>
        </Slider>
    );
}

export default SimpleSlider;