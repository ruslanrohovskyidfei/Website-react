import React from "react";
// @ts-ignore
import Slider from "react-slick";
import {SliderItem} from "../Elements/SliderItem";
import ProductsData from "../Data/ProductsData";
import {ProductItem} from "../Elements/ProductItem";
import '../Styles/Product/ProductItem.css';

function ProductsSlider(){
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
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