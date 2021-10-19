import React from 'react';
import Doctor from '../Doctor/Doctor';

const doctors = [
    {
        img: 'https://i.ibb.co/QfrYNNm/brian-mercado-rm7r-ZYdl3r-Y-unsplash.jpg', name: 'Andrew Smith',
        expertize: ''
    },
    {
        img: 'https://i.ibb.co/gTt3mNZ/austin-distel-7b-Mdi-Iqz-J4-unsplash.jpg', name: 'Andrew Smith',
        expertize: ''
    },
    {
        img: 'https://i.ibb.co/PWd8y4Z/ashkan-forouzani-DPEPYPBZp-B8-unsplash.jpg', name: 'Andrew Smith',
        expertize: ''
    },

]
const Doctors = () => {
    return (
        <div className="container">
            <h2>Our Doctors</h2>
            <div className="row">
                {
                    doctors.map(doctor => <Doctor
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;