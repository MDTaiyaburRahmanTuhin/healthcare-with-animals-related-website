
import useServeces from '../../../Hooks/useServeces';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services] = useServeces()

    return (
        <>
            <div>
                <h1>Our Services & Procedures</h1>
                <small>COMPASSIONATE AND HIGH QUALITY CARE</small>
            </div>
            <div className="service-container">


                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </>
    );
};

export default Services;