import React from 'react';
import ReactDOM from 'react-dom';
import HButton from "./HButton";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HButton />, div);
    ReactDOM.unmountComponentAtNode(div);
});
