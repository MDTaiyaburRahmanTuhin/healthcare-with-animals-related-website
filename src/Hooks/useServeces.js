import { useEffect, useState } from "react";


const useServeces = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return [
        services,
        setServices
    ]
};

export default useServeces;