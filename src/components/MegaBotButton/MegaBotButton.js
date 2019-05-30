import React from 'react';
import MegaBot from "../MegaBot/MegaBot";
import './MegaBotButton.scss';

const MegaBotButton = ({bot}) => {
    if(bot.margin>0){
        return (
            <div className={'button-container'}>
                <div className={"bot-icon-container"}>
                    <MegaBot/>
                </div>
                <div className={'bot-name'}>
                    <h5>{bot.name}</h5>
                </div>
                <div className={'megabot-margin'}>
                    <h5>+{bot.margin}%</h5>
                </div>
            </div>
        )
    } else {
        return (
            <div className={'button-container'}>
                <div className={"bot-icon-container"}>
                    <MegaBot/>
                </div>
                <div className={'bot-name'}>
                    <h5>{bot.name}</h5>
                </div>
                <div className={'megabot-margin'}>
                    <h5>{bot.margin}%</h5>
                </div>
            </div>
        )
    }

};

export default MegaBotButton;