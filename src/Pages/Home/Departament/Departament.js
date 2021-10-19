import React from 'react';
import './Departament.css'
const Departament = () => {
    return (
        <div>
            <div className="row departament">

                <div className="col-md-4">
                    <i class="fas fa-syringe font"></i>
                    <h1>12345</h1>
                    <p>Vaccinations we done</p>
                </div>
                <div className="col-md-4">
                    <i class="fas fa-user-md font"></i>
                    <h1>3589</h1>
                    <p>Happy Clients</p>
                </div>
                <div className="col-md-4">
                    <i class="fas fa-trophy font"></i>
                    <h1>40</h1>
                    <p>Awards We Have</p>
                </div>


            </div>
        </div>
    );
};

export default Departament;