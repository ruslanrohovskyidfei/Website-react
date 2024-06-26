import React, {useState} from 'react';
import '../Styles/Cart/Cart.css';
import Newsletter from "../Sections/Newsletter";
import SimpleSlider from "../Sections/SimpleSlider";
import ProductsSlider from "../Sections/ProductsSlider";
import {useParams} from "react-router-dom";
import ProductsData from "../Data/ProductsData";
import {ProductItem} from "../Elements/ProductItem";

function Search({refreshComponent}: any) {
    const slides = ["../Images/small-slide1.jpg",
        "../Images/small-slide2.jpg",
        "../Images/small-slide3.jpg",
        "../Images/small-slide4.jpg",
        "../Images/small-slide5.jpg"];
    const productTitle: any = useParams().name;
    const products =
    ProductsData.filter(product => product.name.toLowerCase().includes(productTitle) || product.name.includes(productTitle) ? product : null
    ).map((product) => {
        return (
            <ProductItem title={product.name} img={product.img} price={product.price} id={product.id} slider={false}
                         key={product.id} searchTitle={productTitle} />
        );
    });

    console.log(products.length, products);
    return (
        <section className="Cart">
            <div className="container">
                <h1>Search results {productTitle ? '- ' + productTitle : ""}</h1>
                <div className="cart-list">
                    {products.length > 0 ? products : <div className="empty-search">No Results</div>}
                </div>
            </div>
            <Newsletter/>
            <ProductsSlider/>
            <div className="Main-slider">
                <SimpleSlider images={slides} alt={"Search"}/>
            </div>
        </section>
    );
}

export default Search;
