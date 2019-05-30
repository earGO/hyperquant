import React from 'react';
import ReactDOM from 'react-dom';
import TimeRange from "./TimeRange";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TimeRange/>, div);
    ReactDOM.unmountComponentAtNode(div);
});