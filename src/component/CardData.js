import React from 'react'
import './CardData.css'

const CardData = ({cardItem}) => {
    return (
        <div className='mainCard'>
            <div className='mainCard__data'>
            {/* title and logo */}
            <div className='mainCard__title'>
                <div className='mainCard__title__name'>{cardItem.name}</div>
                <div className='mainCard__title__logo'>
                <i class="fa-sharp fa-regular fa-rotate"></i>
                </div>
            </div>
            {/* budget */}
            <div
                className='mainCard__budget'
            >
                <span className='mainCard__budget__label'>Memberfive</span>
                <span className='mainCard__budget__label__dout'>.</span>
                <span className='mainCard__budget__label'>Budget</span>
            </div>
            {/* amount freq and expir */}
            <div className='mainCard__expiryDate__section'>
                <div className='mainCard__expiryDate__section__Amount'>
                    <div className='mainCard__expiryDate__section__Amount__label'>AMOUNT</div>
                    <div className='mainCard__expiryDate__section__Amount__price'>300000</div>
                </div>
                <div className='mainCard__expiryDate__section__frequency'>
                    <div className='mainCard__expiryDate__section__Amount__label'>FREQUENCY</div>
                    <div className='mainCard__expiryDate__section__Amount__price'>Monthly</div>
                </div>
                <div className='mainCard__expiryDate__section__expiry'>
                    <div className='mainCard__expiryDate__section__Amount__label'>EXPIRY</div>
                    <div className='mainCard__expiryDate__section__Amount__price'>{cardItem.expiry}</div>
                </div>
            </div>
            {/* range  */}
            <div className='mainCard__slider'>
                <div class="mainCard__slider__div">  </div>
            </div>
            {/* spent and balance */}
            <div className='mainCard__slider__spent'>

                <div className='d-flex'>
                    <span className='mainCard__slider__spent__dout__spent'></span>
                    <span className='mainCard__budget__label'>spent</span>
                </div>
                <div className='mainCard__slider__balance__style'>{`${cardItem.spent.value} ${cardItem.spent.currency}`}</div>
            </div>
            <div className='mainCard__slider__balance'>
                <div className='d-flex'>
                    <span className='mainCard__slider__spent__dout__balance'></span>
                    <span className='mainCard__budget__label'>Balance</span>
                </div>
                <div className='mainCard__slider__balance__style'>{`${cardItem.available_to_spend.value} ${cardItem.available_to_spend.currency}`}</div>
            </div>
        </div>
        </div>
    )
}

export default CardData
