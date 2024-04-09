import React from 'react'; // we need this to make JSX compile

type SliderItemProps = {
    img: string,
    alt: string
}

export const SliderItem = ({ img, alt }: SliderItemProps) =>
    <div className="slider-item">
        <img src={img} alt={alt}/>
    </div>
