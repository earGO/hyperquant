import React from 'react';
import './BotButton.scss';

const BotButton = () => {
    return (
        <div className={'button-container'}>
            <div className={"bot-icon-container"}>
                <div className={'light-bot light-bot-area-1'}></div>
                <div className={'dark-bot dark-bot-area-1'}></div>
                <div className={'light-bot light-bot-area-2'}></div>
                <div className={'dark-bot dark-bot-area-2'}></div>
                <div className={'light-bot light-bot-area-3'}></div>
                <div className={'dark-bot dark-bot-area-3'}></div>
                <div className={'light-bot light-bot-area-4'}></div>
                <div className={'dark-bot dark-bot-area-4'}></div>
                <div className={'light-bot light-bot-area-5'}></div>
                <div className={'dark-bot dark-bot-area-5'}></div>
                <div className={'light-bot light-bot-area-6'}></div>
                <div className={'dark-bot dark-bot-area-6'}></div>
                <div className={'light-bot light-bot-area-7'}></div>
                <div className={'dark-bot dark-bot-area-7'}></div>
                <div className={'light-bot light-bot-area-8'}></div>
                <div className={'dark-bot dark-bot-area-8'}></div>
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