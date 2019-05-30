import React from 'react';
import './BottomMenu.scss'
import BottomNavDashboard from "../BottomNavDashboard/BottomNavDashboard";

const BottomMenu = () => {
    return (
        <div className={'bottom-menu-container'}>
            <BottomNavDashboard/>
        </div>

    )
};

export default BottomMenu;