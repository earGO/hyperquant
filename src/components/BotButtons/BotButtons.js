import React from 'react';
import './BotButtons.scss';
import BotButton from "../BotButton/BotButton";
import MegaBotButton from "../MegaBotButton/MegaBotButton";

const BotButtons = () => {
    return (
        <div className={'bot-buttons-container'}>
            <BotButton/>
            <BotButton/>
            <BotButton/>
            <BotButton/>
            <MegaBotButton/>
            <BotButton/>
        </div>

    )
};

export default BotButtons;