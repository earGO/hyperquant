import React from 'react';
import MegaBot from "../MegaBot/MegaBot";
import './MegaBotButton.scss';

const MegaBotButton = () => {
    return (
        <div className={'button-container'}>
            <div className={"bot-icon-container"}>
               <MegaBot/>
            </div>
            <div className={'bot-name'}>
                <h5>megabot</h5>
            </div>
            <div className={'megabot-margin'}>
                <h5>+3.6%</h5>
            </div>
        </div>

    )
};

export default MegaBotButton;