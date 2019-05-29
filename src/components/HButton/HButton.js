import React from 'react';
import './HButton.scss'

const HButton = () => {
    return (
        <div className={'h-button-svg'} >
            <svg  viewBox={'0 0 100 100'}>
                <path
                    d="M26 15C26 21.0751 21.0751 26 15 26C8.92487 26 4 21.0751 4 15C4 8.92487 8.92487 4 15 4C21.0751 4 26 8.92487 26 15ZM11 9.96875H13V14H17V10H19V20.5H17V16H13V20.5H11V9.96875Z"
                    fillRule="evenOdd"/>
                <path
                    d="M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15ZM28 15C28 22.1797 22.1797 28 15 28C7.8203 28 2 22.1797 2 15C2 7.8203 7.8203 2 15 2C22.1797 2 28 7.8203 28 15Z"
                    fillRule="evenOdd"/>
            </svg>
        </div>

    )
};

export default HButton;