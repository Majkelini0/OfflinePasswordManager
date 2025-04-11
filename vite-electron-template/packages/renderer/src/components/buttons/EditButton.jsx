import PropTypes from "prop-types";

function EditButton({type, onClick, message}) {
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
                        <g clip-path="url(#clip0_31_116)">
                            <path
                                d="M22.8242 1.17603C22.0598 0.445681 21.0433 0.0381165 19.9862 0.0381165C18.929 0.0381165 17.9125 0.445681 17.1482 1.17603L1.61117 16.713C1.09908 17.2223 0.693033 17.8281 0.416512 18.4952C0.139991 19.1624 -0.00151799 19.8778 0.000167468 20.6V22.5C0.000167468 22.8979 0.158203 23.2794 0.439507 23.5607C0.720812 23.842 1.10234 24 1.50017 24H3.40017C4.12272 24.002 4.83849 23.8606 5.50603 23.5841C6.17358 23.3075 6.77965 22.9014 7.28917 22.389L22.8242 6.85203C23.5758 6.09877 23.9979 5.07812 23.9979 4.01403C23.9979 2.94993 23.5758 1.92929 22.8242 1.17603ZM5.16617 20.268C4.69655 20.7346 4.06215 20.9976 3.40017 21H3.00017V20.6C3.00222 19.9374 3.2652 19.3022 3.73217 18.832L15.3002 7.26703L16.7332 8.70003L5.16617 20.268ZM20.7002 4.73103L18.8542 6.58003L17.4202 5.14603L19.2702 3.30003C19.4631 3.11561 19.7198 3.01269 19.9867 3.01269C20.2536 3.01269 20.5102 3.11561 20.7032 3.30003C20.8918 3.49059 20.9973 3.74804 20.9967 4.01615C20.9962 4.28426 20.8896 4.54126 20.7002 4.73103Z"
                                fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_31_116">
                                <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>

                </div>
            </button>
        </>
    )
}

export default EditButton;

EditButton.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func
}
