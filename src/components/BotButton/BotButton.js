import React from 'react';
import './BotButton.scss';
import SimpleBot from "../SimpleBot/SimpleBot";
import { createActiveStyle } from '../../common/functions/botsFunctions';


const BotButton = ({bot,onBotSelection,selectedBotName}) => {
    const containerStyle=createActiveStyle(bot.color===selectedBotName)
    if(bot.margin>0){
        return (
                 <div className={containerStyle}
                      onClick={()=>{onBotSelection(bot.color)}}
                 >
                    <div className={"bot-icon-container"}>
                        <SimpleBot color={bot.color}/>
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
            <div className={containerStyle}
                 onClick={()=>{onBotSelection(bot.color)}}
            >
                <div className={"bot-icon-container"}>
                    <SimpleBot color={bot.color}/>
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