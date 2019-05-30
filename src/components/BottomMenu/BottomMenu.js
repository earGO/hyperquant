import React from 'react';
import './BottomMenu.scss'
import BottomNavDashboard from "../BottomNavDashboard/BottomNavDashboard";
import BottomMenuMegabot from "../BottomMenuMegabot/BottomMenuMegabot";
import BottomMenuBotMarket from "../BottomMenuBotMarket/BottomMenuBotMarket";
import BottomMenuCoinPrices from "../BottomMenuCoinPrices/BottomMenuCoinPrices";
import BottomMenuProfile from "../BottomMenuProfile/BottomMenuProfile";

const BottomMenu = () => {
    return (
        <div className={'bottom-menu-container'}>
            <BottomNavDashboard/>
            <BottomMenuMegabot/>
            <BottomMenuBotMarket/>
            <BottomMenuCoinPrices/>
            <BottomMenuProfile/>
        </div>

    )
};

export default BottomMenu;