import React from 'react';
import {useParams, useNavigate} from "react-router-dom"
import ProductsData from "../Data/ProductsData";
import '../Styles/Product/ProductPage.css';


function ProductSpecs() {
    const productId = useParams().title
    const product = ProductsData.find(prod => prod.id === productId)
    return (
        <div className="product-specs">
            <h2>Description</h2>
            <div className="product-description">{product?.description}</div>
        </div>
    )
}

export default ProductSpecs;
