import PropTypes from "prop-types";

function AddPasswordButton({type, onClick, message}) {
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
                        <g clip-path="url(#clip0_31_119)">
                            <path
                                d="M22.5 10.5H13.5V1.5C13.5 0.671578 12.8284 0 12 0C11.1716 0 10.5 0.671578 10.5 1.5V10.5H1.5C0.671578 10.5 0 11.1716 0 12C0 12.8284 0.671578 13.5 1.5 13.5H10.5V22.5C10.5 23.3284 11.1716 24 12 24C12.8284 24 13.5 23.3284 13.5 22.5V13.5H22.5C23.3284 13.5 24 12.8284 24 12C24 11.1716 23.3284 10.5 22.5 10.5Z"
                                fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_31_119">
                                <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>

                </div>
            </button>
        </>
    )
}

export default AddPasswordButton;

AddPasswordButton.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func
}
