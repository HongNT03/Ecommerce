import React, { useContext } from 'react';
import './CartItem.css'
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItem = () => {

    const { all_product, cartItem, addToCart, removeFromCart,getTotalCartAmount } = useContext(ShopContext)

    return (
        <div className='cartitem'>
            <div className="ci-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItem[e.id] > 0) {
                    return <div>
                        <div className="ci-format ci-format-main">
                            <img src={e.image} alt="" className='cart-icon-product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='ci-quantity'>{cartItem[e.id]}</button>
                            <p>${e.new_price * cartItem[e.id]}</p>
                            <img className='cart-icon-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className="ci-down">
                <div className="ci-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="ci-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="ci-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="ci-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECK OUT</button>
                </div>
                <div className="ci-promocode">
                    <p>If you have promo code, Enter it here</p>
                    <div className="ci-promobox">
                        <input type="text" name="" id="" placeholder='promo code'/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CartItem;