import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useServeces from '../../../Hooks/useServeces';


const Booking = () => {
    const { id } = useParams()
    const [services] = useServeces([])
    const [book, setBook] = useState({})
    const intBooksId = parseInt(id);
    useEffect(() => {
        const detailse = services.find(service => service.key === intBooksId)
        setBook(detailse)
        console.log(detailse);
    }, [services, intBooksId])
    return (
        <div>
            <h2>this is booking {id}</h2>
            <h1>{book?.name}</h1>
            <img src={book?.img} alt="" />
        </div>
    );
};

export default Booking;