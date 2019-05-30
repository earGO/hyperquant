import React from 'react';
import './TradeCapitalOnHold.scss';
import HButton from "../HButton/HButton";

const TradingCapitalOnHold = ({ on_hold }) => {
    return (
        <div className={'trading-capital-on-hold-container'}>
            <div className={'on-hold-num-container'}>
                <p className={'on-hold-title'}>Oh hold: </p>
                <p className={'on-hold-value'}>{on_hold}</p>
            </div>
            <HButton/>
        </div>

    )
};

export default TradingCapitalOnHold;