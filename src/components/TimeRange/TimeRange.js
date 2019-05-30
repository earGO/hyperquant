import React from 'react';
import './TimeRange.scss';
import TimeRangeButton from "../TimeRangeButton/TimeRangeButton";

/*
* 1. I had to do things fast, and wanted to map through an array, and not use same component 4 times
* 2. Markup provided had only 4 types of timerange, so i dropped the rest of them*/
const timeRanges=[
    {
        title:'24h',
        value:'24h'
    },
    {
        title:'7 days',
        value:'7d'
    },
    {
        title:'30 days',
        value:'30d'
    },
    {
        title:'All time',
        value:'all_time'
    },
];

const TimeRange = ({onTimePeriodChange,timePeriod}) => {
    console.log(timePeriod);
    return (
        <div className={'time-range-container'}>
            <p>Time range:</p>
            <div className={'time-range-buttons-container'}>
                {timeRanges.map((timerange,key)=>{
                    let active=false;
                    if(timerange.value===timePeriod){active=true}
                    return(
                        <TimeRangeButton
                            key={key}
                            timerange={timerange}
                            active={active}
                            onTimePeriodChange={onTimePeriodChange}
                        />
                    )
                })}
            </div>
        </div>

    )
};

export default TimeRange;