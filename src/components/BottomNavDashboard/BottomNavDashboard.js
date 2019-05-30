import React from 'react';
import './BottomNavDashboard.scss';

const BottomNavDashboard = () => {
    return (
        <div className={'dashboard-container active'}>
            <div className={'dashboard-icon-container'}>
                <div className={'dashboard-icon-part-container'}>
                    <svg viewBox={'0 0 100 100 '}>
                        <path
                            d="M8 5C8 6.65685 6.65685 8 5 8C3.34315 8 2 6.65685 2 5C2 3.34315 3.34315 2 5 2C6.65685 2 8 3.34315 8 5ZM10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5ZM15 6H44V4H15V6Z"
                            fillRule="evenOdd"/>
                    </svg>
                </div>
                <div className={'dashboard-icon-part-container'}>
                    <svg viewBox={'0 0 100 100 '}>
                        <path
                            d="M8 5C8 6.65685 6.65685 8 5 8C3.34315 8 2 6.65685 2 5C2 3.34315 3.34315 2 5 2C6.65685 2 8 3.34315 8 5ZM10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5ZM15 6H44V4H15V6Z"
                            fillRule="evenOdd"/>
                    </svg>
                </div>
                <div className={'dashboard-icon-part-container'}>
                    <svg viewBox={'0 0 100 100 '}>
                        <path
                            d="M8 5C8 6.65685 6.65685 8 5 8C3.34315 8 2 6.65685 2 5C2 3.34315 3.34315 2 5 2C6.65685 2 8 3.34315 8 5ZM10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5ZM15 6H44V4H15V6Z"
                            fillRule="evenOdd"/>
                    </svg>
                </div>
            </div>
            <h6>Dashboard</h6>
        </div>


    )
};

export default BottomNavDashboard;