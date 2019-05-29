import React from 'react';
import './RefreshButton.scss'

const RefreshButton = () => {
    return (
        <div className={'refresh-button'}>
            <svg className={''}>
                    <path
                        d="M8.01587 6.9406C13.1832 2.26642 20.9163 2.19495 26.1551 6.46175L22.0027 6.61898C21.4667 6.64043 21.0521 7.08354 21.0736 7.61957C21.095 8.14131 21.5238 8.54869 22.0384 8.54869C22.0527 8.54869 22.0599 8.54869 22.0742 8.54869L28.4494 8.31284C28.9711 8.2914 29.3785 7.86972 29.3785 7.34799V7.27651C29.3785 7.26222 29.3785 7.25507 29.3785 7.24078V7.23363L29.1426 0.929915C29.1212 0.393885 28.6709 -0.0206456 28.142 0.000795604C27.606 0.0222368 27.1915 0.465355 27.2129 1.00139L27.363 4.95372C24.7686 2.83104 21.5739 1.60174 18.1576 1.43021C13.9265 1.2158 9.85982 2.66665 6.72225 5.51119C2.40542 9.42064 0.57577 15.367 1.94801 21.0275C2.05521 21.4706 2.4483 21.7636 2.88427 21.7636C2.96289 21.7636 3.03436 21.7565 3.11298 21.735C3.62757 21.6064 3.94919 21.0847 3.82054 20.5701C2.61983 15.5957 4.22078 10.3712 8.01587 6.9406Z"
                        />
                    <path
                        d="M33.0521 13.9733C32.9234 13.4587 32.4017 13.1371 31.8871 13.2658C31.3725 13.3944 31.0509 13.9161 31.1796 14.4307C32.3874 19.4051 30.7793 24.6296 26.9842 28.0602C24.3184 30.4688 20.9735 31.6552 17.643 31.6552C14.4625 31.6552 11.2892 30.576 8.7306 28.4461L12.9331 28.0673C13.462 28.0173 13.855 27.5528 13.805 27.0167C13.755 26.4807 13.2904 26.0948 12.7544 26.1448L6.40065 26.7166C5.87177 26.7666 5.47868 27.2311 5.52871 27.7672L6.10047 34.1209C6.14336 34.6212 6.56503 35 7.05818 35C7.08677 35 7.11536 35 7.14395 34.9929C7.67283 34.9428 8.06592 34.4783 8.01589 33.9422L7.67283 30.0757C10.2672 32.1769 13.4477 33.3991 16.8425 33.5706C17.1141 33.5849 17.3857 33.592 17.6501 33.592C21.5882 33.592 25.3332 32.1483 28.2778 29.4896C32.5947 25.5802 34.4243 19.641 33.0521 13.9733Z"
                        />

            </svg>
        </div>

    )
};

export default RefreshButton;