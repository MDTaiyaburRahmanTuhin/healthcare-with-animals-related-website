import React from 'react';
import './Food.css'
const Food = ({ food }) => {
    const { name, img, expertize } = food
    return (

        <div className="card-group col-md-4">
            <div className="card mb-5">
                <img src={img} className="h-50 w-50 card-img-top img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{expertize}</p>
                </div>
            </div>

        </div>
    );
};

export default Food;