import React from 'react';
import './style.scss';

function Section03() {

    return (
        <div className='Section'>
            <div className='wrapper__info__block'>
                <aside className='info__block'>
                    <h2 className='info__block__tilte'>Guides by Thousand Sunny</h2>
                    <p className='info__block__text'>
                    Packed with tips and advice from our on-the-ground experts, our city guides app (iOS and Android) is the ultimate resource before and during a trip.
                    </p>
                    <button className='section__button'>Download</button>

                    <img className='guides__plus' src={process.env.PUBLIC_URL + 'images/icons/plus.png'} alt='circle' />
                    <img className='guides__circle' src={process.env.PUBLIC_URL + 'images/icons/circle.png'} alt='circle' />
                </aside>
                <img className='guides__image' src={process.env.PUBLIC_URL + 'images/img/thousand-03.png'} alt='travel' />
            </div>
        </div>
    )
}

export default Section03;