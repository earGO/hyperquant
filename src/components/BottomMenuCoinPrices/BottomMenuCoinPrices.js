import React from 'react';
import './BottomMenuCoinPrices.scss';

const BottomMenuCoinPrices = () => {
    return (
        <div className={'bottom-menu-item-container'}>
            <div className={'coinprices-icon-container'}>
                <svg viewBox={'0 0 100 100'}>
                    <path
                        d="M25 30L25 29H25V30ZM44 23C44 34.598 34.598 44 23 44V46C35.7025 46 46 35.7025 46 23H44ZM23 44C11.402 44 2 34.598 2 23H0C0 35.7025 10.2975 46 23 46V44ZM2 23C2 11.402 11.402 2 23 2V0C10.2975 0 0 10.2975 0 23H2ZM23 2C34.598 2 44 11.402 44 23H46C46 10.2975 35.7025 0 23 0V2ZM28 15H22V17H28V15ZM26 22H22V24H26V22ZM25 29H18V31H25V29ZM22 30V35H24V30H22ZM22 11V16H24V11H22ZM22.5 15C20.8062 15 19.4883 15.4981 18.6125 16.3952C17.7393 17.2898 17.4233 18.4619 17.5025 19.5713C17.6551 21.7075 19.3482 24 22 24V22C20.6518 22 19.5949 20.7925 19.4975 19.4288C19.4517 18.7881 19.6357 18.2102 20.0437 17.7923C20.4492 17.3769 21.1938 17 22.5 17V15ZM25 31C26.691 31 28.0068 30.5015 28.8809 29.604C29.7523 28.7093 30.0672 27.5375 29.9882 26.4289C29.8361 24.2948 28.1478 22 25.4988 22L25.4988 24C26.8406 24 27.8959 25.2052 27.9933 26.5711C28.039 27.2125 27.8551 27.7907 27.4481 28.2085C27.044 28.6235 26.302 29 25 29L25 31Z"
                    />
                </svg>
            </div>
            <h6>Coin prices</h6>
        </div>


    )
};

export default BottomMenuCoinPrices;