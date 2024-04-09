import React from 'react';
import {NavLink} from "react-router-dom";
import '../Styles/Product/ProductItem.css';

type CardProps = {
    title: string,
    price: number,
    img: string,
    id: string,
    slider: boolean,
    searchTitle: string
}
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
export const ProductItem = ({ title, img, price, id, slider, searchTitle }: CardProps ) =>
    <div className={!slider ? "product-item" : "product-item slide"}>
        <NavLink onClick={scrollToTop} className="product-item-link" to={"/shop/" + id}>
            <div className="product-item-img">
                <img src={img} alt={title}/>
            </div>
        </NavLink>
        <div className="product-item-content-wrapper">
            <h2 className="product-item-title" data-search-title={searchTitle}>{title}</h2>
            <div className="product-item-price">${price}</div>
        </div>
    </div>