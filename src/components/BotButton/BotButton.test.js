import React from 'react';
import ReactDOM from 'react-dom';
import BotButton from "./BotButton";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BotButton />, div);
    ReactDOM.unmountComponentAtNode(div);
});
