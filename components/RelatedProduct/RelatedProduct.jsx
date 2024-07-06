import React from 'react';
import './RelatedProduct.css'
import data_product from '../Assets/data'
import Item from '../Item/Item';


const RelatedProduct = () => {
    return (
        <div className='relatedproducts'>
            <h1>Related Products</h1>
            <hr />
            <div className="rp-item">
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

export default RelatedProduct;