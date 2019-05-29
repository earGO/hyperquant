import React from 'react';
import './BotButtons.scss';
import BotButton from "../BotButton/BotButton";

const BotButtons = () => {
    return (
        <div className={'bot-buttons-container'}>
            <BotButton/>
            <BotButton/>
            <BotButton/>
            <BotButton/>
            <BotButton/>
            <BotButton/>
        </div>

    )
};

export default BotButtons;