import PropTypes from "prop-types";

function PreviewButton({type, onClick, message}) {
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
                        <g clip-path="url(#clip0_30_46)">
                            <path
                                d="M23.5612 21.4454L18.9161 16.7983C22.3918 12.1535 21.4441 5.57052 16.7993 2.0948C12.1545 -1.38092 5.57153 -0.433205 2.09581 4.21157C-1.37991 8.85634 -0.432198 15.4393 4.21258 18.9151C7.94364 21.7071 13.0682 21.7071 16.7993 18.9151L21.4464 23.5622C22.0304 24.1462 22.9772 24.1462 23.5612 23.5622C24.1452 22.9782 24.1452 22.0314 23.5612 21.4474L23.5612 21.4454ZM10.5447 18.0181C6.41661 18.0181 3.0702 14.6717 3.0702 10.5437C3.0702 6.4156 6.41661 3.06919 10.5447 3.06919C14.6727 3.06919 18.0191 6.4156 18.0191 10.5437C18.0147 14.6698 14.6709 18.0137 10.5447 18.0181Z"
                                fill="#C8ACD6"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_30_46">
                                <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </button>
        </>
    )
}

export default PreviewButton;

PreviewButton.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func
}
