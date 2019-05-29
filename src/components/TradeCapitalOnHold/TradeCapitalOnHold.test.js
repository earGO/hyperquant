import React from 'react';
import ReactDOM from 'react-dom';
import TradingCapitalOnHold from "./TradeCapitalOnHold";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TradingCapitalOnHold />, div);
    ReactDOM.unmountComponentAtNode(div);
});