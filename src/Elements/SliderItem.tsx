import React from 'react';
type SliderItemProps = {
    img: string,
    alt: string
}

export const SliderItem = ({ img, alt }: SliderItemProps) =>
    <div className="slider-item">
            <img src={img} alt={alt} />
    </div>
