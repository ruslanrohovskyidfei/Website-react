import React from "react";
// @ts-ignore
import Slider from "react-slick";
import {SliderItem} from "../Elements/SliderItem";

type SliderProps = {
    mainSlider: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function SingleSlider(mainSlider: SliderProps) {
    let currentSlideIndex = 0;
    const settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (index: number) => {
            currentSlideIndex = index;
            if(currentSlideIndex == 1) {
                (document.querySelector(".Home .General-slider .welcome-text") as HTMLInputElement).style.left = "60%";
            } else {
                (document.querySelector(".Home .General-slider .welcome-text") as HTMLInputElement).style.left = "5%";
            }
        }
    };
    return (
        <Slider {...settings}>
            <SliderItem img="../Images/general-slide1.jpg" alt="Music lover"/>
            <SliderItem img="../Images/general-slide2.jpg" alt="Music lover"/>
        </Slider>
    );
}
export default SingleSlider;