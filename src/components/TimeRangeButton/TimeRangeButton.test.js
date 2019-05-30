import React from 'react';
import ReactDOM from 'react-dom';
import TimeRangeButton from "./TimeRangeButton";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TimeRangeButton/>, div);
    ReactDOM.unmountComponentAtNode(div);
});