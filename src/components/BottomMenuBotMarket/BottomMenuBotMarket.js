import React from 'react';
import './BottomMenuBotMarket.scss';

const BottomMenuBotMarket = () => {
    return (
        <div className={'bottom-menu-item-container'}>
            <div className={'botmarket-icon-container'}>
                <svg viewBox={'0 0 100 100'}>
                    <path
                        d="M7.08197 6.42618L0 1.99995L1.06 0.303955L9.06 5.30396L8.84699 5.64476L8.96401 5.62226L9.42126 7.99995H45V9.99995L41 27L13.0751 27L13.652 30H40V32H12L7.08197 6.42618ZM12.6905 25H39.416L42.9454 9.99995H9.80588L12.6905 25ZM35 16H18V14H35V16ZM34 21H19V19H34V21ZM19 40C20.1046 40 21 39.1045 21 38C21 36.8954 20.1046 36 19 36C17.8954 36 17 36.8954 17 38C17 39.1045 17.8954 40 19 40ZM19 42C21.2091 42 23 40.2091 23 38C23 35.7908 21.2091 34 19 34C16.7909 34 15 35.7908 15 38C15 40.2091 16.7909 42 19 42ZM35 38C35 39.1045 34.1046 40 33 40C31.8954 40 31 39.1045 31 38C31 36.8954 31.8954 36 33 36C34.1046 36 35 36.8954 35 38ZM37 38C37 40.2091 35.2091 42 33 42C30.7909 42 29 40.2091 29 38C29 35.7908 30.7909 34 33 34C35.2091 34 37 35.7908 37 38Z"
                        fillRule="evenOdd"/>
                </svg>
            </div>
            <h6>Bot market</h6>
        </div>

    )
};

export default BottomMenuBotMarket;