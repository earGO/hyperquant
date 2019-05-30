import React from 'react';
import './TimeRange.scss';
import TimeRangeButton from "../TimeRangeButton/TimeRangeButton";

const timeRanges=[
    '24h',
    '7 days',
    '30 days',
    'All time'
];

const TimeRange = () => {
    return (
        <div className={'time-range-container'}>
            <p>Time range:</p>
            <div className={'time-range-buttons-container'}>
                {timeRanges.map((timerange,key)=>{
                    let active=false;
                    if(timerange==='All time'){active=true}
                    return(
                        <TimeRangeButton
                            key={key}
                            timerange={timerange}
                            active={active}
                        />
                    )
                })}
            </div>
        </div>

    )
};

export default TimeRange;