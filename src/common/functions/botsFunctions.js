export const megaBotPicker = (arrayOfBots)=>{
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



export const botColorShortName=(bot)=>{
    let botColor=bot.name.split('_')[0]
    return botColor
};

export const createBotStyle=(color,styleObject)=>{
    let colorsArray=[];
    for (var property in styleObject) {
        if (styleObject.hasOwnProperty(property)) {
            const colorGroupName = property.split('_')[0];
            let style={};
            if(colorGroupName===color){
                style.fill=styleObject[property];
                style.stroke=styleObject[property];
                colorsArray.push(style)
            }
        }
    }

    return colorsArray
};

export const createActiveStyle = (isActive) =>{
    if(isActive){
        return 'button-container bot-active'
    } else {
        return 'button-container'
    }
};