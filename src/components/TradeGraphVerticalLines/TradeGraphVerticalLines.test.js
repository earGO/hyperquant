import React from 'react';
import ReactDOM from 'react-dom';
import TradeGraphVerticalLines from "./TradeGraphVerticalLines";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TradeGraphVerticalLines />, div);
    ReactDOM.unmountComponentAtNode(div);
});