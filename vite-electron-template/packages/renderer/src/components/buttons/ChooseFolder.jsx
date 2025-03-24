﻿import PropTypes from "prop-types";

function ChooseFolder({type, onClick}) {
    return (
        <>
            <button
                onClick={onClick}
                type={type || 'button'}
                className="w-10 h-10 p-2 bg-[#17153B] hover:bg-[#7B68A1] active:bg-[#C8ACD6] transition-colors duration-100 ease-linear hover:scale-110 rounded-[5px] shadow-[4px_4px_8px_0px_rgba(0,0,0,0.50)] flex justify-start items-center">
                <div className="w-6 h-6 relative overflow-hidden">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_153_153)">
                            <path
                                d="M16.5 14.0003C16.5 14.3981 16.342 14.7797 16.0607 15.061C15.7794 15.3423 15.3978 15.5003 15 15.5003H13.5V17.0003C13.5 17.3981 13.342 17.7797 13.0607 18.061C12.7794 18.3423 12.3978 18.5003 12 18.5003C11.6022 18.5003 11.2206 18.3423 10.9393 18.061C10.658 17.7797 10.5 17.3981 10.5 17.0003V15.5003H9C8.60218 15.5003 8.22064 15.3423 7.93934 15.061C7.65804 14.7797 7.5 14.3981 7.5 14.0003C7.5 13.6025 7.65804 13.2209 7.93934 12.9396C8.22064 12.6583 8.60218 12.5003 9 12.5003H10.5V11.0003C10.5 10.6025 10.658 10.2209 10.9393 9.93964C11.2206 9.65834 11.6022 9.50031 12 9.50031C12.3978 9.50031 12.7794 9.65834 13.0607 9.93964C13.342 10.2209 13.5 10.6025 13.5 11.0003V12.5003H15C15.3978 12.5003 15.7794 12.6583 16.0607 12.9396C16.342 13.2209 16.5 13.6025 16.5 14.0003V14.0003ZM24 8.50031V17.5003C23.9984 18.9585 23.4184 20.3565 22.3873 21.3876C21.3562 22.4187 19.9582 22.9987 18.5 23.0003H5.5C4.0418 22.9987 2.64377 22.4187 1.61267 21.3876C0.581561 20.3565 0.00158817 18.9585 0 17.5003L0 6.50031C0.00158817 5.0421 0.581561 3.64408 1.61267 2.61297C2.64377 1.58187 4.0418 1.00189 5.5 1.00031H8C8.2329 1.00017 8.46263 1.05426 8.671 1.15831L12.354 3.00031H18.5C19.9582 3.00189 21.3562 3.58187 22.3873 4.61297C23.4184 5.64408 23.9984 7.0421 24 8.50031ZM21 8.50031C20.9998 8.33235 20.9828 8.16484 20.949 8.00031H3V17.5003C3 18.1633 3.26339 18.7992 3.73223 19.2681C4.20107 19.7369 4.83696 20.0003 5.5 20.0003H18.5C19.163 20.0003 19.7989 19.7369 20.2678 19.2681C20.7366 18.7992 21 18.1633 21 17.5003V8.50031Z"
                                fill="#C8ACD6"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_153_153">
                                <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </button>
        </>
    );
}

export default ChooseFolder;

ChooseFolder.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func
}
