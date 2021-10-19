import React from 'react';
import Food from '../Food/Food';
import Banner from '../Home/Banner/Banner';
import Footer from '../Home/Footer/Footer';
const foods = [
    {
        img: '	http://webdesign-finder.com/pet-space-school/wp-content/uploads/2019/05/collar.png', name: 'Workshops',
        expertize: 'Drumstick flank pork chop pastrami tenderloin. Turkey bacon cow beef ribs salami pork loin kevin. Pam sausage cow fatback ball. Hamburger'
    },
    {
        img: '	http://webdesign-finder.com/pet-space-school/wp-content/uploads/2019/05/walking-the-dog.png', name: 'Custom Training',
        expertize: 'Drumstick flank pork chop pastrami tenderloin. Turkey bacon cow beef ribs salami pork loin kevin. Pam sausage cow fatback ball. Hamburger'
    },
    {
        img: 'http://webdesign-finder.com/pet-space-school/wp-content/uploads/2019/05/dog-food.png', name: 'Seminar Weekend',
        expertize: 'Drumstick flank pork chop pastrami tenderloin. Turkey bacon cow beef ribs salami pork loin kevin. Pam sausage cow fatback ball. Hamburger'
    },

]
const Foods = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="row">
                {
                    foods.map(food => <Food
                        food={food}
                    ></Food>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Foods;