import React from 'react';

const ScheduleButton = () => {
    return (
        <div className="relative flex items-center justify-center  h-60 bg-white border-8 border-transparent rounded-full p-5">
            {/* Styled animation */}
            <style>
                {`
                    @keyframes rotate-and-fade {
                        0% {
                            transform: rotate(0deg);
                            opacity: 0.3;
                        }
                        50% {
                            opacity: 1;
                        }
                        100% {
                            transform: rotate(360deg);
                            opacity: 0.3;
                        }
                    }
                    
                    .animated-border {
                        position: absolute;
                        top: -8px;
                        left: -8px;
                        right: -8px;
                        bottom: -8px;
                        border-radius: 50%;
                        border: 8px solid transparent;
                        border-top: 8px solid #F7A51E;
                        border-right: 8px solid #F7A51E;
                        animation: rotate-and-fade 4s linear infinite;
                        pointer-events: none;
                    }
                `}
            </style>

            {/* Static yellow border */}
            <div className="absolute inset-0 rounded-full border-8 border-[#ffffff]"></div>
            
            {/* Animated border overlay */}
            <div className="animated-border"></div>

            {/* Button Content */}
            <div className="flex items-center gap-6 z-10">
                <span className="text-black text-lg font-semibold">
                    Schedule A Call
                </span>
                <svg
                    className="w-6 h-6 text-[#026f72]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </div>
        </div>
    );
};

export default ScheduleButton;  