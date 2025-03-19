import PropTypes from "prop-types";

function SaveButton({type, onClick}) {
    return (
        <>
            <button
                onClick={onClick}
                type={type || "button"}
                className="w-10 h-10 p-2 bg-[#17153B] hover:bg-[#7B68A1] active:bg-[#C8ACD6] transition-colors duration-100 ease-linear hover:scale-110 rounded-[5px] shadow-[4px_4px_8px_0px_rgba(0,0,0,0.50)] flex justify-start items-center">
                <div className="w-6 h-6 relative overflow-hidden">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_31_79)">
                            <path
                                d="M7.74919 20.6626C7.06793 20.6629 6.41457 20.3921 5.93325 19.91L0.443061 14.4218C-0.147687 13.8309 -0.147687 12.873 0.443061 12.282C1.034 11.6913 1.99191 11.6913 2.58284 12.282L7.74919 17.4484L21.4172 3.7804C22.0081 3.18965 22.966 3.18965 23.5569 3.7804C24.1477 4.37134 24.1477 5.32925 23.5569 5.92018L9.56513 19.91C9.08381 20.3921 8.43045 20.6629 7.74919 20.6626Z"
                                fill="#19B900"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_31_79">
                                <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>

                </div>
            </button>
        </>
    )
}

export default SaveButton;

SaveButton.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func
}