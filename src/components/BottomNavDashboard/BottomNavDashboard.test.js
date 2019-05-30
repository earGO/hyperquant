import React from 'react';
import ReactDOM from 'react-dom';
import BottomNavDashboard from "./BottomNavDashboard";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BottomNavDashboard />,
    div
)
    ;
    ReactDOM.unmountComponentAtNode(div);
});