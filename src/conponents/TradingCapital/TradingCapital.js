import React from 'react';
import HButton from "../HButton/HButton";
import './TradingCapital.scss'

const TradingCapital = () => {
    return (
        <div className={'border-debug trading-capital-container'}>
            <h4 className={'trading-capital-title'}>trading capital</h4>
            <h1 className={'capital-amount'}>1.000865 ETH</h1>
            <h6>Balance: <span className={'balance-value'}>10850</span></h6>
            <h6>OnHold: <span className={'balance-value'}>24000</span></h6>
            <HButton/>
            <HButton/>
        </div>

    )
};

export default TradingCapital;