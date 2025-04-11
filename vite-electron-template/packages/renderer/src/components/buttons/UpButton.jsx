import PropTypes from "prop-types";

function UpButton({type, onClick, message}) {
    return (
        <>
            <button
                onClick={onClick}
                type={type || 'button'}
                title={message}
                className="self-stretch h-5 bg-violet-300 hover:bg-[#7B68A1] active:bg-[#C8ACD6] transition-colors duration-100 ease-linear hover:scale-110 rounded-[5px] inline-flex justify-center items-center">
                <div className="w-6 h-6 relative flex justify-center items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.41403 15.5861H17.586C17.7838 15.586 17.9771 15.5274 18.1415 15.4175C18.3059 15.3076 18.434 15.1514 18.5097 14.9687C18.5854 14.786 18.6052 14.585 18.5666 14.391C18.528 14.1971 18.4328 14.0189 18.293 13.8791L12.707 8.29309C12.5195 8.10562 12.2652 8.00031 12 8.00031C11.7349 8.00031 11.4806 8.10562 11.293 8.29309L5.70703 13.8791C5.56722 14.0189 5.47202 14.1971 5.43345 14.391C5.39488 14.585 5.41468 14.786 5.49035 14.9687C5.56602 15.1514 5.69416 15.3076 5.85857 15.4175C6.02298 15.5274 6.21628 15.586 6.41403 15.5861Z"
                            fill="#17153B"/>
                    </svg>
                </div>
            </button>
        </>
    )
}

export default UpButton;

UpButton.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func
}
