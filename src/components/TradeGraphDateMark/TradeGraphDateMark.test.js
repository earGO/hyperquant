import React from 'react';
import ReactDOM from 'react-dom';
import TradeGraphDateMark from "./TradeGraphDateMark";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TradeGraphDateMark />, div);
    ReactDOM.unmountComponentAtNode(div);
});