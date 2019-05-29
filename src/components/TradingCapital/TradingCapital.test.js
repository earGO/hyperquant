import React from 'react';
import ReactDOM from 'react-dom';
import TradingCapital from "./TradingCapital";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TradingCapital />, div);
    ReactDOM.unmountComponentAtNode(div);
});
