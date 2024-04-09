import React, {useState} from 'react';
import '../Styles/App.css';
import '../Styles/Cart/CartItem.css';
import Newsletter from "../Sections/Newsletter";
import SimpleSlider from "../Sections/SimpleSlider";
import ProductsSlider from "../Sections/ProductsSlider";
import {CartItem} from "../Elements/CartItem";

function Cart({refreshComponent}: any) {
    const cartLocalStorage: [] = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const cartProducts = cartLocalStorage.map((product, index) => {
        return (
            <CartItem title={product['name']} img={product['img']} price={product['price']} quantity={product['quantity']} id={product['id']} refreshComponent={refreshComponent} key={index}/>
        );
    });
    return (
      <section className="Cart">
          <div className="container">
              <h1>Cart</h1>
              <div className="cart-list">
                  {cartProducts.length != 0 ? cartProducts : <div className="empty-cart">Empty cart</div>}
              </div>
          </div>
          <ProductsSlider/>
          <Newsletter/>
          <div className="Main-slider">
              <SimpleSlider/>
          </div>
      </section>
    );
}

export default Cart;
