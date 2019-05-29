import React from 'react';
import NavbarSideToggleButton from "../NavbarToggleButton/NavbarSideToggleButton";
import RefreshButton from "../RefreshButton/RefreshButton";

import './TopNav.scss'

const getScreenResolution = () => {
    var width = window.screen.width;
    var height = window.screen.height;
    return [width,height]
};



const TopNav = () => {

    return (
        <div className={'top-nav-container'} id={'top-nav-container'}>
            <NavbarSideToggleButton/>
            <h3 className={'screen-name'}>Dashboard</h3>
            <h4>scren Height is {getScreenResolution()[1]}, width is {getScreenResolution()[0]}</h4>
            <RefreshButton/>
        </div>

    )
};

export default TopNav;