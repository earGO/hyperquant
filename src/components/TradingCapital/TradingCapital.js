import React from 'react';
import './TradingCapital.scss'
import TradingCapitalBalance from "../TradingCapitalBalance/TradingCapitalBalance";
import TradingCapitalOnHold from "../TradeCapitalOnHold/TradeCapitalOnHold";

const TradingCapital = ({ on_hold,trading_capital,trading_capital_currency,balance }) => {
    return (
        <div className={'trading-capital-container'}>
            <h4 className={'trading-capital-title'}>trading capital</h4>
            <h1 className={'capital-amount'}>{trading_capital} {trading_capital_currency}</h1>
            <TradingCapitalBalance balance={balance}/>
            <TradingCapitalOnHold on_hold={on_hold}/>
        </div>

    )
};

export default TradingCapital;