import React from 'react';
import ReactDOM from 'react-dom';
import TradeGraph from "./TradeGraph";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TradeGraph />, div);
    ReactDOM.unmountComponentAtNode(div);
});