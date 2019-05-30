import React from 'react';
import './MegaBot.scss';


const MegaBot = () => {
    return (
        <div className={'megabot-container'}>
            <svg viewBox={'0 0 100 100'}>
                <path
                    d="M70 0V10H60V0H70ZM30 10H40V20H50V10H60V20H70V30H80V40H90V70H80V50H70V70H60V80H70V90H50V70H40V90H20V80H30V70H20V50H10V70H0V40H10V30H20V20H30V10ZM30 10V0H20V10H30ZM30 30H40V40H30V30ZM60 30H50V40H60V30Z"
                    fillRule="evenOdd" />
            </svg>
        </div>

    )
};

export default MegaBot;