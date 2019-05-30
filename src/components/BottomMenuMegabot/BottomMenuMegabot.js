import React from 'react';
import './BottomMenuMegabot.scss';

const BottomMenuMegabot = () => {
    return (
        <div className={'bottom-menu-item-container'}>
            <div className={'megabot-icon-svg-container'}>
                <svg viewBox={'0 0 100 100'}>
                    <path
                        d="M7.62037 23.6746L13.6204 16.6746M21.6 20.3L18.6 16.3M26.6326 20.6609L38.6326 7.66086M1 44H45M41 44L41 17M24 45L24 30M16 44L16 25M5 45L5 32M9 26C9 28.2091 7.20914 30 5 30C2.79086 30 1 28.2091 1 26C1 23.7909 2.79086 22 5 22C7.20914 22 9 23.7909 9 26ZM20 14C20 16.2091 18.2091 18 16 18C13.7909 18 12 16.2091 12 14C12 11.7909 13.7909 10 16 10C18.2091 10 20 11.7909 20 14ZM28 23C28 25.2091 26.2091 27 24 27C21.7909 27 20 25.2091 20 23C20 20.7909 21.7909 19 24 19C26.2091 19 28 20.7909 28 23ZM45 5C45 7.20914 43.2091 9 41 9C38.7909 9 37 7.20914 37 5C37 2.79086 38.7909 1 41 1C43.2091 1 45 2.79086 45 5Z"
                        />
                </svg>
            </div>
            <h6>Megabot</h6>
        </div>

    )
};

export default BottomMenuMegabot;