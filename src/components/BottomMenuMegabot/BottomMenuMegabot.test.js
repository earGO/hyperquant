import React from 'react';
import ReactDOM from 'react-dom';
import BottomMenuMegabot from "./BottomMenuMegabot";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BottomMenuMegabot />,
    div
)
    ;
    ReactDOM.unmountComponentAtNode(div);
});