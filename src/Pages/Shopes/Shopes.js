import React from 'react';
import Banner from '../Home/Banner/Banner';
import Footer from '../Home/Footer/Footer';
import Shop from '../Shop/Shop';
const shopes = [
    {
        img: 'http://webdesign-finder.com/pet-space-school/wp-content/uploads/2017/08/01.png', name: 'Collar',
        price: '$20.00 $18.00'
    },
    {
        img: 'http://webdesign-finder.com/pet-space-school/wp-content/uploads/2017/08/02.png', name: 'Comb for Dogs',
        price: '$12.00 $10.00'
    },
    {
        img: 'http://webdesign-finder.com/pet-space-school/wp-content/uploads/2017/08/03.png', name: 'Dog Food Tins',
        price: '$65.00 $55.00'
    },


    {
        img: 'http://webdesign-finder.com/pet-space-school/wp-content/uploads/2017/08/05.png', name: 'Pets Hide Out',
        price: '$65.00 $55.00'
    },
    {
        img: 'http://webdesign-finder.com/pet-space-school/wp-content/uploads/2017/08/06.png', name: 'ScoopFree Trays',
        price: '$65.00 $55.00'
    },
    {
        img: 'http://webdesign-finder.com/pet-space-school/wp-content/uploads/2017/08/04.png', name: 'BURGDOGGEN PICANHA',
        price: '$65.00 $55.00'
    },

]
const Shopes = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="row">
                {
                    shopes.map(shop => <Shop
                        shop={shop}
                    >

                    </Shop>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Shopes;