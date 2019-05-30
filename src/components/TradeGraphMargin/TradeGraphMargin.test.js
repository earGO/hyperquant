import React from 'react';
import ReactDOM from 'react-dom';
import TradeGraphMargin from "./TradeGraphMargin";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TradeGraphMargin />, div);
    ReactDOM.unmountComponentAtNode(div);
});