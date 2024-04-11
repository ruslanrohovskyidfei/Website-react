import React, {useState} from 'react';
import {useParams, useNavigate} from "react-router-dom"
import ProductsData from "../Data/ProductsData";
import ProductsSlider from "../Sections/ProductsSlider";
import ProductsSpecs from "../Sections/ProductsSpecs";
import Newsletter from "../Sections/Newsletter";
import '../Styles/Product/ProductPage.css';
import {faArrowLeft, faCartShopping, faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SingleSlider from "../Sections/SingleSlider";

function Product({refreshComponent}:any) {
    const productId = useParams().title
    const product = ProductsData.find(prod => prod.id === productId)
    const navigate = useNavigate();
    const [ quantity, setQuantity ] = useState(1)
    let cartProduct = {};
    const addItem = (product: any) => {
        let quantityChange = false;
        const cartLocalStorage = JSON.parse(localStorage.getItem("cartItems") || "[]");
        let currentProduct: {} = ProductsData.filter(product => product.id === productId)[0];
        cartLocalStorage.map((item: any) => {
            if(productId === item.id) {
                item.quantity = quantity;
                quantityChange = true
            }
        });
        if(quantityChange) {
            localStorage.setItem('cartItems', JSON.stringify([...cartLocalStorage]));
        } else {
            const { name, img, price, id } : any = currentProduct;
            cartProduct = { id, name, img, price, quantity: quantity };
            localStorage.setItem('cartItems', JSON.stringify([cartProduct, ...cartLocalStorage]));
        }
        refreshComponent();
        navigate('/cart');
    }
    const quantityPlus = () => {
        setQuantity(quantity + 1)
    }
    const quantityMinus = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    const showBadges = () => {
        return (
            <>
                <div
                    className={`product-type-img overear${product?.img[0].includes("product2") ? " show" : ""}`}>
                    <img src="../Images/headphones-support-overear.jpg" alt="Overear"/>
                </div>
                <div
                    className={`product-type-img earbuds${product?.img[0].includes("product1") ? " show" : ""}`}>
                    <img src="../Images/headphones-support-earbuds.jpg" alt="Earbuds"/>
                </div>
            </>
        );
    }
    return (
        <div className="container full-width">
            <div className="container">
                <button className="route-back-button" onClick={() => navigate(-1)}>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                    <div>Back</div>
                </button>
                <div className="product">
                    <div className="product-img">
                        {/*{showBadges()}*/}
                        <SingleSlider mainSlider={false} images={product?.img} alt={product?.name} />
                    </div>
                    <div className="product-content-wrapper">

                        <h2 className="product-title">
                            <p>{product?.name}</p>
                        </h2>
                        <div className="product-description">{product?.description}</div>
                        <div className="product-quantity-minus"></div>
                        <div className="product-price">${product?.price}</div>
                        <div className="product-button-wrapper">
                            <button className="product-quantity-minus" onClick={quantityMinus}>
                                <FontAwesomeIcon icon={faMinus}/>
                            </button>
                            <button className="product-button" onClick={() => addItem(product)}>
                                <FontAwesomeIcon icon={faCartShopping}/>
                                <div className="text">Buy</div>
                                <span className="quantity-count">({quantity})</span>
                            </button>
                            <button className="product-quantity-plus" onClick={quantityPlus}>
                                <FontAwesomeIcon icon={faPlus}/>
                            </button>
                        </div>
                    </div>
                </div>
                <ProductsSpecs/>
            </div>
            <Newsletter/>
            <ProductsSlider/>
        </div>
    )
}

export default Product;
