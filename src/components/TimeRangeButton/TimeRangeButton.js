import React from 'react';
import './TimeRangeButton.scss'

const TimeRangeButton = (props) => {
    const { timerange, active, onTimePeriodChange } = props;
    const {title,value} = timerange;
    if(!active){
        return (
            <div className={'time-range-button'}
                onClick={()=>onTimePeriodChange(value)}
            >
                <h5>{title}</h5>
            </div>
        )
    } else {
        return (
            <div className={'time-range-button active'}>
                <h5>{title}</h5>
            </div>
        )
    }

};

export default TimeRangeButton;