import React from 'react';
import ReactDOM from 'react-dom';
import TradingCapitalBalance from "./TradingCapitalBalance";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TradingCapitalBalance />, div);
    ReactDOM.unmountComponentAtNode(div);
});