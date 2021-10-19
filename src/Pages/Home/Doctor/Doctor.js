import React from 'react';
import './Doctor.css'
const Doctor = ({ doctor }) => {
    const { name, img, expertize } = doctor
    return (



        <div className="card-group col-md-4">
            <div className="card">
                <img src={img} className="card-img-top img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{expertize}</p>
                </div>
            </div>
        </div>


    );
};

export default Doctor;

/*
<div className="card-group">
  <div className="card">
    <img src="..." className="card-img-top" alt="...">
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div>
</div>
*/