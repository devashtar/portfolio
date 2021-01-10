import React from 'react';
import './style.scss';

function Section01() {

    return (
        <div className='Section'>
            <div className='wrapper__info__block'>
            <img className='section__image' src={process.env.PUBLIC_URL + 'images/img/thousand-02.png'} alt='travel' />
                <aside className='info__block'>
                    <h2 className='info__block__tilte'>A new way to explore the world</h2>
                    <p className='info__block__text'>
                        For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect trip, but now, they can also let Lonely Planet Experiences lead the way.
                    </p>
                    <img className='info__block__circle' src={process.env.PUBLIC_URL + 'images/icons/circle.png'} alt='circle' />
                    <button className='section__button'>Learn more</button>
                </aside>
            </div>
        </div>
    )
}

export default Section01;