import React from 'react';
import './TradeCapitalOnHold.scss';
import HButton from "../HButton/HButton";

const TradingCapitalOnHold = () => {
    return (
        <div className={'trading-capital-on-hold-container'}>
            <div className={'on-hold-num-container'}>
                <p className={'on-hold-title'}>Oh hold: </p>
                <p className={'on-hold-value'}>24000</p>
            </div>
            <HButton/>
        </div>

    )
};

export default TradingCapitalOnHold;