import React from "react";
// @ts-ignore
import Slider from "react-slick";
import {SliderItem} from "../Elements/SliderItem";
import ProductsData from "../Data/ProductsData";
import {ProductItem} from "../Elements/ProductItem";

function ProductsSlider(){
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
    };
    const products = ProductsData.map(product => {
        return (
            <ProductItem title={product.name} img={product.img} price={product.price} id={product.id} slider={true} key={product.id} searchTitle={""}/>
        );
    });
    return (
        <section className="products-slider">
            <h2>Our products</h2>
            <Slider {...settings}>
                {products}
            </Slider>
        </section>
    );
}

export default ProductsSlider;