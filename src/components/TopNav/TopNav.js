import React from 'react';
import NavbarSideToggleButton from "../NavbarToggleButton/NavbarSideToggleButton";
import RefreshButton from "../RefreshButton/RefreshButton";

import './TopNav.scss'

const TopNav = () => {

    return (
        <div className={'top-nav-container'} id={'top-nav-container'}>
            <NavbarSideToggleButton/>
            <h3 className={'screen-name'}>Dashboard</h3>
            <RefreshButton/>
        </div>

    )
};

export default TopNav;