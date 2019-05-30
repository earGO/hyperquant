import React from 'react';
import './TimeRangeButton.scss'

const TimeRangeButton = (props) => {
    const { timerange, active } = props;
    if(!active){
        return (
            <div className={'time-range-button'}>
                <h5>{props.timerange}</h5>
            </div>
        )
    } else {
        return (
            <div className={'time-range-button active'}>
                <h5>{props.timerange}</h5>
            </div>
        )
    }

};

export default TimeRangeButton;