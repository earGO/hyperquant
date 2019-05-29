import React from 'react';
import './TradeGraphDateMark.scss';

const TradeGraphDateMark = () => {
    return (
        <div className={'trade-graph-date-mark-container'}>
            <svg viewBox={'0 0 100 100'}>
                <circle className={'mark-circle'} cx="50" cy="50" r="30" />
            </svg>
        </div>

    )
};

export default TradeGraphDateMark;