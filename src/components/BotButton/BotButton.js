import React from 'react';
import './BotButton.scss';
import SimpleBot from "../SimpleBot/SimpleBot";

const BotButton = ({bot}) => {
    if(bot.margin>0){
        return (
            <div className={'button-container'}>
                <div className={"bot-icon-container"}>
                    <SimpleBot/>
                </div>
                <div className={'bot-name'}>
                    <h5>{bot.name}</h5>
                </div>
                <div className={'bot-margin bot-profit'}>
                    <h5>+{bot.margin}%</h5>
                </div>
            </div>
        )
    } else {
        return (
            <div className={'button-container'}>
                <div className={"bot-icon-container"}>
                    <SimpleBot/>
                </div>
                <div className={'bot-name'}>
                    <h5>{bot.name}</h5>
                </div>
                <div className={'bot-margin bot-loss'}>
                    <h5>{bot.margin}%</h5>
                </div>
            </div>

        )
    }

};

export default BotButton;