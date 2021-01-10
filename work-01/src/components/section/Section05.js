import React from 'react';
import './style.scss';

function Section05() {

    return (
        <div className='Section'>
            <div className='wrap__top__section'>
                <h3 className='info__block__tilte'>Featured destinations</h3>
                <div className='info__view'>view all</div>
            </div>

            <div className='card__wrapper trending'>

                <div className='card__item'>
                    <img className='card__img' src={process.env.PUBLIC_URL + 'images/img/image01.png'} alt='card' />
                    <div className='card__content'>
                        <h5 className='card__title'>The many benefits of taking a healing holiday</h5>
                        <p className='card__subtitle'>‘Helaing holidays’ are on the rise tohelp maximise your health and happines...</p>
                        <div className='more'>Read more</div>
                    </div>
                </div>
                <div className='card__item'>
                    <img className='card__img' src={process.env.PUBLIC_URL + 'images/img/image02.png'} alt='card' />
                    <div className='card__content'>
                        <h5 className='card__title'>The best Kyoto restaurant to try Japanese food</h5>
                        <p className='card__subtitle'>From tofu to teahouses, here’s our guide to Kyoto’s best restaurants to visit...</p>
                        <div className='more'>Read more</div>
                    </div>
                </div>
                <div className='card__item'>
                    <img className='card__img' src={process.env.PUBLIC_URL + 'images/img/image03.png'} alt='card' />
                    <div className='card__content'>
                        <h5 className='card__title'>Skip Chichen Itza and head to this remote Yucatan</h5>
                        <p className='card__subtitle'>It’s remote and challenging to get, but braving the jungle and exploring these ruins without the...</p>
                        <div className='more'>Read more</div>
                    </div>
                </div>
                <div className='card__item'>
                    <img className='card__img' src={process.env.PUBLIC_URL + 'images/img/image04.png'} alt='card' />
                    <div className='card__content'>
                        <h5 className='card__title'>Surf’s up at these beginner spots around the world</h5>
                        <p className='card__subtitle'>If learning to surf has in on your to-do list for a while, the good news is: it’s never too late...</p>
                        <div className='more'>Read more</div>
                    </div>
                </div>

                <img className='dest__plus' src={process.env.PUBLIC_URL + 'images/icons/plus.png'} alt='plus' />
                <img className='dest__circle' src={process.env.PUBLIC_URL + 'images/icons/circle.png'} alt='circle' />
            </div>
        </div>
    )
}

export default Section05;