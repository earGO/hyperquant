import React from 'react';
import ReactDOM from 'react-dom';
import NavbarSideToggleButton from "./NavbarSideToggleButton";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavbarSideToggleButton />, div);
    ReactDOM.unmountComponentAtNode(div);
});
