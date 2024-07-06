import React from 'react';
import './NewLetter.css'

const NewLetter = () => {
    return (
        <div className='new-letter'>
            <h1>Get Exclusive Offer On Your Email</h1>
            <p>Subcribe to our new letter and stay update</p>
            <div>
                <input type="email" placeholder='Your email'/>
                <button>Subcribe</button>
            </div>
        </div>
    );
};

export default NewLetter;