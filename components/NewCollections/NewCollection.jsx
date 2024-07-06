import React from 'react';
import './NewCollection.css'
import new_collection from "../Assets/new_collections"
import Item from '../Item/Item';

const NewCollection = () => {
    return (
        <div className='new-collection'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collection">
                {new_collection.map((data, i) => {
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

export default NewCollection;