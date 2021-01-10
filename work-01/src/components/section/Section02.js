import React from 'react';
import './style.scss';

function Section02() {

    return (
        <div className='Section'>
            <div className='wrap__top__section'>
                <h3 className='info__block__tilte'>Featured destinations</h3>
                <div className='info__view'>view all</div>
            </div>

            <div className='card__wrapper'>

                <div className='card__item'>
                    <img className='card__img' src={process.env.PUBLIC_URL + 'images/img/raja-amrat.png'} alt='card' />
                    <div className='card__text'><div>Raja Ampat</div> Indonesia</div>
                </div>
                <div className='card__item'>
                    <img className='card__img' src={process.env.PUBLIC_URL + 'images/img/fanjingshan.png'} alt='card' />
                    <div className='card__text'><div>Fanjingshan</div> China</div>
                </div>
                <div className='card__item'>
                    <img className='card__img' src={process.env.PUBLIC_URL + 'images/img/mask-group.png'} alt='card' />
                    <div className='card__text'><div>Vevey</div> Switzerland</div>
                </div>
                <div className='card__item'>
                    <img className='card__img' src={process.env.PUBLIC_URL + 'images/img/mask-group-2.png'} alt='card' />
                    <div className='card__text'><div>Skadar</div> Montenegro</div>
                </div>

                <img className='dest__plus' src={process.env.PUBLIC_URL + 'images/icons/plus.png'} alt='plus' />
                <img className='dest__circle' src={process.env.PUBLIC_URL + 'images/icons/circle.png'} alt='circle' />
            </div>
        </div>
    )
}

export default Section02;