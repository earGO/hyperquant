import React from 'react';
import './BotButton.scss';
import SimpleBot from "../SimpleBot/SimpleBot";

const BotButton = () => {
    return (
        <div className={'button-container'}>
            <div className={"bot-icon-container"}>
                <SimpleBot/>
            </div>
            <div className={'bot-name'}>
                <h5>attack</h5>
            </div>
            <div className={'bot-margin'}>
                <h5>-8.2%</h5>
            </div>
        </div>

    )
};

export default BotButton;