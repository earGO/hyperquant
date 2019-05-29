import React from 'react';
import ReactDOM from 'react-dom';
import TradeGraphHorizontalLines from "./TradeGraphHorizontalLines";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TradeGraphHorizontalLines />, div);
    ReactDOM.unmountComponentAtNode(div);
});
