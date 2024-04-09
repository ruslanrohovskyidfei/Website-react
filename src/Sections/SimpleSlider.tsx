import React from "react";
// @ts-ignore
import Slider from "react-slick";
import {SliderItem} from "../Elements/SliderItem";
import '../Styles/Pages/Home.css';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function SimpleSlider(){
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
    };

    return (
        <Slider {...settings}>
            <SliderItem img="../Images/small-slide1.jpg" alt="Music lover" />
            <SliderItem img="../Images/small-slide2.jpg" alt="Looking out windows"/>
            <SliderItem img="../Images/small-slide3.jpg" alt="Over ear headphones"/>
            <SliderItem img="../Images/small-slide4.jpg" alt="Music lover" />
            <SliderItem img="../Images/small-slide5.jpg" alt="Looking out windows"/>
        </Slider>
    );
}

export default SimpleSlider;