import React, { useContext } from 'react';
import './CSS/ShopCategory.css'
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Item/Item';

const ShopCategory = (props) => {

    const { all_product } = useContext(ShopContext)

    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {all_product.map((data, i) => {
                    if (props.category === data.category) {
                        return <Item key={i}
                            id={data.id} name={data.name}
                            image={data.image}
                            new_price={data.new_price}
                            old_price={data.old_price}
                        />
                    }
                    else {
                        return null;
                    }
                })}
            </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>
    );
};

export default ShopCategory;