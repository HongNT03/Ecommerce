import React from 'react';

import Item from '../Item/Item';

import './Popular.css'

import data_product from '../Assets/data';

const Popular = () => {
    return (
        <div className='popular'>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {data_product.map((data, i) => {
                    return <Item key={i}
                        id={data.id} name={data.name}
                        image={data.image}
                        new_price={data.new_price}
                        old_price={data.old_price}
                    />
                })}
            </div>
        </div>
    );
};

export default Popular;