import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { name, img, price, description, id } = service;
    return (
        <div className="service p-5 m-3">

            <img className="w-100 rounded-2" src={img} alt="..." />
            <h5 >{name}</h5>
            <p >{description}</p>
            <p ><small class="text-muted">{price}</small></p>
            <Link to={`/booking/${id}`}>
                <button className="btn-more">SERVICE</button>
            </Link>
        </div>
    );
};

export default Service;