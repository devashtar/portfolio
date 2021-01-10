import React from 'react';
import './style.scss';
const starCount = Array(5).fill(null);

function Section04() {

    return (
        <div className='Section'>
            <h2 className='title__testi'>Testimonials</h2>
            <div className='testi__wrapper'>
                <aside className='testi__content'>
                    <div className='stars'>
                        {starCount.map((_, i) => <img key={i} className='star' src={process.env.PUBLIC_URL + 'images/icons/star.png'} alt='star' />)}
                    </div>
                    <p className='testi__description'>
                        “Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”
                    </p>
                    <div className='testi__author'>Edward Newgate</div>
                    <div className='testi__sub__author'>Founder Circle</div>
                </aside>
                <div className='testi__img'>
                    <img src={process.env.PUBLIC_URL + 'images/img/person.png'} alt='person'/>
                    <div className='testy__wrapper__buttons'>
                        <div className='but prev'></div>
                        <div className='but next'></div>
                    </div>
                    <img className='testy__plus' src={process.env.PUBLIC_URL + 'images/icons/plus.png'} alt='circle' />
                    <img className='testy__circle' src={process.env.PUBLIC_URL + 'images/icons/circle.png'} alt='circle' />
                </div>
            </div>
        </div>
    )
}

export default Section04;