import React from 'react';
import ReactDOM from 'react-dom';
import TradeGraphDates from "./TradeGraphDates";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TradeGraphDates />, div);
    ReactDOM.unmountComponentAtNode(div);
});