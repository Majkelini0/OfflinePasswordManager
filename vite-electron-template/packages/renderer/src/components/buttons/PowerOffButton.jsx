import PropTypes from "prop-types";

function PowerOffButton({type, onClick, message}) {
    return (
        <>
            <button
                onClick={onClick}
                type={type || 'button'}
                title={message}
                className="w-10 h-10 p-2 bg-[#17153B] hover:bg-[#7B68A1] active:bg-[#C8ACD6] transition-colors duration-100 ease-linear hover:scale-110 rounded-[5px] shadow-[4px_4px_8px_0px_rgba(0,0,0,0.50)] flex justify-start items-center">
                <div className="w-6 h-6 relative overflow-hidden">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_30_37)">
                            <path
                                d="M11.9962 0C12.8241 0 13.4953 0.671195 13.4953 1.49915V6.49631C13.4953 7.32426 12.8241 7.99546 11.9962 7.99546C11.1682 7.99546 10.497 7.32426 10.497 6.49631V1.49915C10.497 0.671195 11.1682 0 11.9962 0Z"
                                fill="#820000"/>
                            <path
                                d="M15.494 4.93739C15.4867 5.44063 15.7404 5.91183 16.1646 6.18266C19.9327 8.48493 21.121 13.406 18.8187 17.174C16.5164 20.9421 11.5954 22.1304 7.82733 19.8281C4.05923 17.5259 2.87097 12.6048 5.17328 8.83671C5.83113 7.76005 6.73446 6.85433 7.80939 6.19363C8.24091 5.9228 8.50148 5.4478 8.49801 4.93833C8.50031 4.11038 7.83099 3.43735 7.00304 3.43506C6.71867 3.43426 6.43992 3.51437 6.19935 3.66607C1.04159 6.86974 -0.542489 13.6479 2.66114 18.8057C5.86476 23.9634 12.643 25.5475 17.8007 22.3438C22.9584 19.1402 24.5425 12.362 21.3388 7.20428C20.4471 5.76862 19.2363 4.55787 17.8007 3.66611C17.0981 3.22288 16.1692 3.43314 15.726 4.13572C15.5746 4.37568 15.4942 4.65363 15.494 4.93739Z"
                                fill="#820000"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_30_37">
                                <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>

                </div>
            </button>
        </>
    )
}

export default PowerOffButton;

PowerOffButton.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func
}
