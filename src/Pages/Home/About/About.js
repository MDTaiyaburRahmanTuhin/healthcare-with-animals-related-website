import React from 'react';
import './About.css'
const About = () => {
    return (
        <div>

            <div className="about row d-flex align-items-center justify-content-center">
                <div className="col-md-6">
                    <img src="http://webdesign-finder.com/fluffy-paw/wp-content/uploads/2016/11/dog-sleep.png" alt="" />

                </div>
                <div className="col-md-6">
                    <h1 className="title">
                        About <small className="title">Clinic</small>
                    </h1>
                    <small>PET'S BEST FRIEND</small>
                    <p>
                        Eiusmod qui pig veniam nostrud. Chicken mollit flank ground round est short loin ad do bacon velit bresaola excepteur eu. Doner turducken aute, ut lorem alcatra pork belly capicola short ribs meatball. Excepteur quis nostrud, et dolor laborum pig bresaola corned beef officia.
                    </p>
                    <button className="btn-more">READ MORE</button>

                </div>

            </div>
        </div>
    );
};

export default About;