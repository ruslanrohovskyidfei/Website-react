import React from "react";
// @ts-ignore
import Slider from "react-slick";
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
            <div>
                <img src="./Images/music-lover_4460x4460.jpg" alt="Music lover"/>
            </div>
            <div>
                <img src="./Images/man-wearing-over-ear-headphones_4460x4460.jpg" alt="Music lover"/>
            </div>
            <div>
                <img src="./Images/looking-out-window-wearing-headphones_4460x4460.jpg" alt="Music lover"/>
            </div>
            <div>
                <img src="./Images/over-ear-headphones_4460x4460.jpg" alt="Music lover"/>
            </div>
        </Slider>
    );
}

export default SimpleSlider;