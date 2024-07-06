import React, { useState } from 'react';
import { createContext } from 'react';
import all_product from '../components/Assets/all_product'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(cartItem);
    }

    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))

    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = all_product.find((p) => p.id === Number(item))
                totalAmount += itemInfo.new_price * cartItem[item];
            }
        }
        return totalAmount;
    }

    const getTotalItem = () => {
        let totalItem = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                totalItem += cartItem[item]
            }
        }
        return totalItem;
    }

    const contextValue = { getTotalItem, all_product, cartItem, addToCart, removeFromCart, getTotalCartAmount }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;

// In a React application,
// using context can be very beneficial for managing and sharing state across your components
// without having to pass props down through multiple levels of the component tree. 


