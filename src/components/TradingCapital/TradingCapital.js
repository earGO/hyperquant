import React from 'react';
import './TradingCapital.scss'
import TradingCapitalBalance from "../TradingCapitalBalance/TradingCapitalBalance";
import TradingCapitalOnHold from "../TradeCapitalOnHold/TradeCapitalOnHold";

const TradingCapital = () => {
    return (
        <div className={'border-debug trading-capital-container'}>
            <h4 className={'trading-capital-title'}>trading capital</h4>
            <h1 className={'capital-amount'}>1.000865 ETH</h1>
            <TradingCapitalBalance/>
            <TradingCapitalOnHold/>
        </div>

    )
};

export default TradingCapital;