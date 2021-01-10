import React from 'react';
import './style.scss';
import Logo from '../header/parts/Logo.js';

const footerList = [
    ['destinations', 'Africa', 'Antarctica', 'Asia', 'Europe', 'America'],
    ['shop', 'Destination Guides', 'Pictoral & Gifts', 'Specail Offers', 'Delivery Times', 'FAQs'],
    ['interest', 'Advanture Travel', 'Art and Culture', 'Wildlife and Nature', 'Family Holidays', 'Food and Drink'] 
]
const social = ['images/icons/ic01.png', 'images/icons/ic02.png', 'images/icons/ic03.png', 'images/icons/ic04.png', 'images/icons/ic05.png']

function Footer() {

    return (
        <footer className='Footer'>
            <div className='footer__wrapper'>
                <div className='info__footer'>
                    <div className='logo__footer'>
                        <Logo />
                    </div>
                    <p className='info__text'>
                        Plan and book your perfect trip with expert advice, travel tips destination information from us
                    </p>
                    <p className='info__text copy'>
                        ©2020 Thousand Sunny. All rights reserved
                    </p>
                </div>

                {footerList.map((item, i) => {
                    return (
                        <div key={i} className='list'>
                            {item.map((el, idx) => idx !== 0 ? <p key={((i + 1) * 10 + idx)}>{el}</p> : <h6 key={Math.random()}>{el}</h6>)}
                        </div>
                    )
                })}

            </div>
            <hr />
            <ul>
                {social.map((item, i) => <li key={i}><a href='/'><img src={process.env.PUBLIC_URL + item} className='social__icons' alt='social' /></a></li>)}
            </ul>
        </footer>
    )
}

export default Footer;