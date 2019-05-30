import React from 'react';
import './BotButtons.scss';
import BotButton from "../BotButton/BotButton";
import MegaBotButton from "../MegaBotButton/MegaBotButton";


/**
 * To mock MegaBot button from JSON-data provided, I'll go through the array and pick most expensive one.
 * Though it can be anything, including the special field in data.
 * The point is to pick the bot-button algorithmically
 *
 * I also decided to set bot colors algorithmically
 *
 * */


const megaBotPicker = (arrayOfBots)=>{
    let maximumCost = 0;
    let botName = '';
    arrayOfBots.forEach(bot=>{
        if(bot.cost>maximumCost){
            maximumCost = bot.cost;
            botName = bot.name;
        }
    });
    return botName;
};



const BotButtons = ({bots,timePeriod}) => {
    if(bots){
        let margin=0;
        let megaBotName = megaBotPicker(bots);
        return (
            <div className={'bot-buttons-container'}>
                {
                    bots.map((bot,key)=>{
                        margin=bot[timePeriod]
                        const botToPass={
                            name:bot.name,
                            margin:margin
                        }
                        if(bot.name===megaBotName){
                            return(
                                <MegaBotButton
                                    key={key}
                                    bot={botToPass}
                                />
                            )
                        } else {
                            return(
                                <BotButton
                                    key={key}
                                    bot={botToPass}
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