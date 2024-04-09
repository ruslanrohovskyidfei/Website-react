import React, {useState, useCallback} from 'react';
import {NavLink, useParams} from "react-router-dom";
import '../Styles/Product/ProductItem.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRemove} from "@fortawesome/free-solid-svg-icons";

type CardProps = {
    title: string,
    price: number,
    img: string,
    id: string,
    quantity: number,
    refreshComponent: any
}
export const CartItem = ({ title, img, price, id, quantity, refreshComponent }: CardProps) => {
    const removeItem = (removeId: any) => {
        const cartLocalStorage = JSON.parse(localStorage.getItem("cartItems") || "[]");
        console.log('cartLocalStorage', cartLocalStorage);
        let newCartList = cartLocalStorage.filter((cartItem: { id: string }) => removeId !== cartItem.id);
        localStorage.setItem('cartItems', JSON.stringify([...newCartList]));
        refreshComponent();
    }
    return (
        <div className="cart-item" key={id}>
            <NavLink to={"/shop/" + id}>
                <div className="cart-item-img">
                    <img src={img} alt={title}/>
                </div>
            </NavLink>
            <div className="cart-item-content-wrapper">
                <h2 className="cart-item-title">{title}</h2>
                <div className="cart-item-price">${price}</div>
            </div>
            <div className="cart-item-quantity">Quantity: {quantity}</div>
            <button onClick={() => removeItem(id)} className="button-cart-remove">
                <FontAwesomeIcon icon={faRemove}/>
                <p className="text">Remove</p>
            </button>
        </div>
    )
}
