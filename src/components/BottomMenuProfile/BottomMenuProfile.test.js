import React from 'react';
import ReactDOM from 'react-dom';
import BottomMenuProfile from "./BottomMenuProfile";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BottomMenuProfile />,
    div
)
    ;
    ReactDOM.unmountComponentAtNode(div);
});