import React from 'react';
import './DescriptionBox.css'


const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="db-navigator">
                <div className="db-nav-box">Description</div>
                <div className="db-nav-box fde">Reviews (122)</div>
            </div>
            <div className="db-description">
                <p>Introducing our Boys Orange Colourblocked Hooded Sweatshirt,
                    a perfect blend of style and comfort for your little one.
                    This trendy sweatshirt features a vibrant orange hue combined
                    with stylish colourblocking, making it a standout piece in any wardrobe.
                    Crafted from high-quality materials, it ensures a soft and cozy feel,
                    perfect for keeping your child warm during cooler days. The attached
                    hood adds an extra layer of protection against the elements, while the
                    ribbed cuffs and hem provide a snug fit that retains warmth.
                </p>
                <p>Designed with an active lifestyle in mind, this sweatshirt
                    offers excellent durability and flexibility, allowing your
                    child to move freely whether they are playing outside or
                    attending a casual event. The front kangaroo pocket adds a
                    practical touch, providing a convenient space for small essentials
                    or keeping hands warm.
                </p>
            </div>
        </div>
    );
};

export default DescriptionBox;