import React from 'react';

const Shop = ({ shop }) => {
    const { name, price, img } = shop
    return (
        <div className="card-group col-md-4">
            <div className="card mb-5">
                <img src={img} className="h-50 w-50 card-img-top img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{price}</p>
                </div>
            </div>

        </div>
    );
};

export default Shop;