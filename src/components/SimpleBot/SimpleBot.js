import React from 'react';
import './SimpleBot.scss';
import BotColors from '../../common/styles/BotColors.scss';
import { createBotStyle } from '../../common/functions/botsFunctions';

const SimpleBot = ({color}) => {
    const svgStyle = createBotStyle(color,BotColors);
    return (
            <div className={'simple-bot-container'}>
                <svg viewBox={'0 0 100 100'}>
                    <path style={svgStyle[0]}
                        d="M50 10H45V70H50V60H60V70H70V60H80V70H90V30H80V20H70V10H60V0H50V10ZM70 40V30H50V40H70Z"
                        fillRule="evenOdd" />
                    <path style={svgStyle[1]}
                        d="M40 10H45V70H40V60H30V70H20V60H10V70H0V30H10V20H20V10H30V0H40V10ZM20 40V30H40V40H20Z"
                        fillRule="evenOdd"/>
                </svg>
            </div>
        )

};

export default SimpleBot;