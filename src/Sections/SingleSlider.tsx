import React from "react";
// @ts-ignore
import Slider from "react-slick";
import {SliderItem} from "../Elements/SliderItem";
import ProductsData from "../Data/ProductsData";
import {ProductItem} from "../Elements/ProductItem";

type SliderProps = {
    mainSlider: any,
    images: any,
    alt: any
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function SingleSlider({mainSlider, images, alt} : SliderProps) {
    let currentSlideIndex = 0;
    const imageList: string[] = images;
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: mainSlider === true ? false : true,
        height: 100,
        beforeChange: (index: number) => {
            currentSlideIndex = index;
            if (mainSlider === true) {
                if (currentSlideIndex === 1) {
                    (document.querySelector(".Home .General-slider .welcome-text") as HTMLInputElement).style.left = "50%";
                } else {
                    (document.querySelector(".Home .General-slider .welcome-text") as HTMLInputElement).style.left = "2%";
                }
            }
        }
    };
    const slides = imageList.map(image => {
        return <SliderItem img={image} alt={alt}/>
    })
    return (
        <Slider {...settings}>
            { slides }
        </Slider>
    );
};
export default SingleSlider;