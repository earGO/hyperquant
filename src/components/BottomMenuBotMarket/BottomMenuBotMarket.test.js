import React from 'react';
import ReactDOM from 'react-dom';
import BottomMenuBotMarket from "./BottomMenuBotMarket";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BottomMenuBotMarket />,
    div
)
    ;
    ReactDOM.unmountComponentAtNode(div);
});