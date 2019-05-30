import React from 'react';
import ReactDOM from 'react-dom';
import BotButtons from "./BotButtons";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BotButtons />, div);
    ReactDOM.unmountComponentAtNode(div);
});
