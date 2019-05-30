import React from 'react';
import './TradingCapitalBalance.scss';
import HButton from "../HButton/HButton";

const TradingCapitalBalance = ({ balance }) => {
    return (
        <div className={'trading-capital-balance-container'}>
            <div className={'balance-num-container'}>
                <p className={'balance-title'}>Balance: </p>
                <p className={'balance-value'}>{balance}</p>
            </div>
            <HButton/>
        </div>

    )
};

export default TradingCapitalBalance;