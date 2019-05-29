import React from 'react';
import './TradingCapitalBalance.scss';
import HButton from "../HButton/HButton";

const TradingCapitalBalance = () => {
    return (
        <div className={'trading-capital-balance-container'}>
            <div className={'balance-num-container'}>
                <p className={'balance-title'}>Balance: </p>
                <p className={'balance-value'}>10850</p>
            </div>
            <HButton/>
        </div>

    )
};

export default TradingCapitalBalance;