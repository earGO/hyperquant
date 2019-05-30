import React from 'react';
import './MegaBot.scss';
import BotColors from '../../common/styles/BotColors.scss';
import { createBotStyle } from '../../common/functions/botsFunctions';

const MegaBot = ({color}) => {
    const svgStyle = createBotStyle(color,BotColors);
    return (
        <div className={'megabot-container'}>
            <svg viewBox={'0 0 100 100'}>
                    <path style={svgStyle[1]}
                        d="M45 70V20H40V10H30V0H20V10H30V20H20V30H10V40H0V70H10V50H20V70H30V80H20V90H40V70H45ZM40 30H30V40H40V30Z"
                        fillRule="evenOdd"/>
                    <path style={svgStyle[0]}
                        d="M45 70V20H50V10H60V0H70V10H60V20H70V30H80V40H90V70H80V50H70V70H60V80H70V90H50V70H45ZM50 30H60V40H50V30Z"
                        fillRule="evenOdd"/>

            </svg>
        </div>

    )
};

export default MegaBot;