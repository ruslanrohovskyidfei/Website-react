import React, {useState} from 'react';
import {ProductItem} from "../Elements/ProductItem";
import ProductsData from "../Data/ProductsData";
import Newsletter from "../Sections/Newsletter";
import SimpleSlider from "../Sections/SimpleSlider";

const Shop = () => {
    const slides = ["../Images/small-slide1.jpg",
                            "../Images/small-slide2.jpg",
                            "../Images/small-slide3.jpg",
                            "../Images/small-slide4.jpg",
                            "../Images/small-slide5.jpg"];
    const products = ProductsData.map(product => {
        return (
            <ProductItem title={product.name} img={product.img} price={product.price} id={product.id} slider={false} key={product.id} searchTitle={""}/>
        );
    });

    return (
        <section className="Shop">
            <div className="container">
                <h1>Shop</h1>
                <div className="products-list">
                    {products}
                </div>
            </div>
            <Newsletter/>
            <div className="Main-slider">
                <SimpleSlider images={slides} alt={"products"}/>
            </div>
        </section>
    );
};
export default Shop;
