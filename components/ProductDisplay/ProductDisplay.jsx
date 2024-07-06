import React, { useContext } from 'react';
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);


    const starGen = (rating) => {
        const totalStars = 5;
        const stars = [];
        for (let i = 0; i < totalStars; i++) {
            if (i < rating) {
                stars.push(<img key={i} src={star_icon} alt="star" />);
            } else {
                stars.push(<img key={i} src={star_dull_icon} alt="star" />);
            }
        }
        return stars;
    }


    console.log(product.image);
    return (
        <div className='productdisplay'>
            <div className="pd-left">
                <div className="pd-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="pd-img">
                    <img className='pd-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="pd-right">
                <h1>{product.name}</h1>
                <div className="pd-right-star">
                    {starGen(product.rating)}
                    <p>(122)</p>
                </div>
                <div className="pd-right-price">
                    <div className="pd-right-price-old">${product.old_price}</div>
                    <div className="pd-right-price-new">${product.new_price}</div>
                </div>
                <div className="pd-right-description">
                    {product.description}
                </div>
                <div className="pd-right-size">
                    <h1>Select Size</h1>
                    <div className="pd-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
                <p className='pd-right-category'><span>Category: </span>Women, T-shirt, Croptop </p>
                <p className='pd-right-category'><span>Tags: </span>Modern, Latest</p>
            </div>
        </div>
    );
};

export default ProductDisplay;