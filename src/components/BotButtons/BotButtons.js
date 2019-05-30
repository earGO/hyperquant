import React from 'react';
import './BotButtons.scss';
import BotButton from "../BotButton/BotButton";
import MegaBotButton from "../MegaBotButton/MegaBotButton";
import { megaBotPicker,botColorShortName } from '../../common/functions/botsFunctions';


/**
 * To mock MegaBot button from JSON-data provided, I'll go through the array and pick most expensive one.
 * Though it can be anything, including the special field in data.
 * The point is to pick the bot-button algorithmically
 *
 * I also decided to set bot colors algorithmically
 *
 * */


const BotButtons = ({bots,timePeriod,...other}) => {
    if(bots){
        let margin=0;
        let color='';
        let megaBotName = megaBotPicker(bots);
        return (
            <div className={'bot-buttons-container'}>
                {
                    bots.map((bot,key)=>{
                        margin=bot[timePeriod];
                        color=botColorShortName(bot);
                        const botToPass={
                            name:bot.name,
                            margin:margin,
                            color:color
                        };
                        if(bot.name===megaBotName){
                            return(
                                <MegaBotButton
                                    key={key}
                                    bot={botToPass}
                                    {...other}
                                />
                            )
                        } else {
                            return(
                                <BotButton
                                    key={key}
                                    bot={botToPass}
                                    {...other}
                                />
                            )
                        }
                    })
                }
            </div>

        )
    } else {
        return(
            <div>
                <p>Fetching bots data</p>
            </div>
        )
    }

};

export default BotButtons;