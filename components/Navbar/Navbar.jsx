import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../context/ShopContext';

const Navbar = () => {

    const [menu, setMenu] = useState('shop');
    const { getTotalItem } = useContext(ShopContext)

    return (
        <div className='nav-bar'>
            <div className='nav-logo'>
                <img src={logo} alt="logoImage" />
                <p>SHOPPE</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => { setMenu("shop") }}> <Link style={{ textDecoration: "none", color: "black" }} to='/'>Shop</Link>  {menu === 'shop' ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("men") }}>  <Link style={{ textDecoration: "none", color: "black" }} to='/men'>  Men</Link>  {menu === 'men' ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("women") }}> <Link style={{ textDecoration: "none", color: "black" }} to='/women'> Women</Link> {menu === 'women' ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("kid") }}>  <Link style={{ textDecoration: "none", color: "black" }} to='/kid'> Kid</Link> {menu === 'kid' ? <hr /> : <></>} </li>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'>
                    <img src={cart_icon} alt="cartImage" />
                </Link>
                <div className="nav-cart-count">{getTotalItem()}</div>
            </div>
        </div>
    );
};

export default Navbar;