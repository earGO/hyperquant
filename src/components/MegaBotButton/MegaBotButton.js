import React from 'react';
import MegaBot from "../MegaBot/MegaBot";
import './MegaBotButton.scss';
import { createActiveStyle } from '../../common/functions/botsFunctions';


const MegaBotButton = ({bot,onBotSelection,selectedBotName}) => {
    const containerStyle=createActiveStyle(bot.color===selectedBotName)
    console.log(containerStyle)
    if(bot.margin>0){
        return (
                <div className={containerStyle}
                    onClick={()=>{onBotSelection(bot.color)}}
                >
                    <div className={"bot-icon-container"}>
                        <MegaBot color={bot.color}/>
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
            <div className={containerStyle}
                 onClick={()=>{onBotSelection(bot.color)}}
            >
                <div className={"bot-icon-container"}>
                    <MegaBot  color={bot.color}/>
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