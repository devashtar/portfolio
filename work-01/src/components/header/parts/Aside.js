import React from 'react';

const blocks = ['Location', 'Activity', 'Grade', 'Date'];

function  Aside() {
    return (
        <div className='Aside'>
                <h1 className='title'>Explore and Travel</h1>

                <div className='finder__block'>
                    <h3 className='holiday__title'>Holiday finder</h3>
                    <div className='rectangle'>
                        <img className='rectangle__circle' src={process.env.PUBLIC_URL + 'images/icons/circle.png'} alt='circle' />
                    </div>
                    
                    
                    <div className='select__wrapper'>
                        {blocks.map((item, i) => {
                            return (
                                <div key={i} className='block__select'>
                                    <div className='title__select'>{item}</div>
                                    <span className='arrow'></span>
                                </div>
                            )
                        })}
                    </div>

                    <button className='button__finder'>Explore</button>

                </div>

                <img className='finder__plus' src={process.env.PUBLIC_URL + 'images/icons/plus.png'} alt='plus' />
                <img className='finder__circle' src={process.env.PUBLIC_URL + 'images/icons/circle.png'} alt='circle' />
            </div>
    )
}

export default Aside;