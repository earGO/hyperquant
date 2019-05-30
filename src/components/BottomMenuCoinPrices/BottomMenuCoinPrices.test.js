import React from 'react';
import ReactDOM from 'react-dom';
import BottomMenuCoinPrices from "./BottomMenuCoinPrices";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BottomMenuCoinPrices />,
    div
)
    ;
    ReactDOM.unmountComponentAtNode(div);
});