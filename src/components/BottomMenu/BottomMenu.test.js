import React from 'react';
import ReactDOM from 'react-dom';
import BottomMenu from "./BottomMenu";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BottomMenu/>, div);
    ReactDOM.unmountComponentAtNode(div);
});