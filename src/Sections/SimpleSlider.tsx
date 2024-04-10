import React from "react";
// @ts-ignore
import Slider from "react-slick";
import {SliderItem} from "../Elements/SliderItem";
import '../Styles/Pages/Home.css';

type SliderProps = {
    images: any,
    alt: any
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function SimpleSlider({images, alt} : SliderProps){
    const imageList: string[] = images;
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const slides = imageList.map(image => {
        return <SliderItem img={image} alt={alt}/>
    })
    return (
        <Slider {...settings}>
            {slides}
        </Slider>
    );
}

export default SimpleSlider;