import React from 'react';
import {NavLink} from "react-router-dom";
import '../Styles/ProductItem.css';

type CardProps = {
    title: string,
    price: number,
    img: string,
    id: string,
    slider: boolean
}

export const ProductItem = ({ title, img, price, id, slider }: CardProps) =>
    <div className={!slider ? "product-item" : "product-item slide"}>
        <NavLink to={"/shop/" + id}>
            <div className="product-item-img">
                <img src={img} alt={title}/>
            </div>
        </NavLink>
        <div className="product-item-content-wrapper">
            <h2 className="product-item-title">{title}</h2>
            <div className="product-item-price">${price}</div>
        </div>
    </div>