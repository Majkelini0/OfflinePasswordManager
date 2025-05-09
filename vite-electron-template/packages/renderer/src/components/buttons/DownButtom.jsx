import PropTypes from "prop-types";

function DownButton({type, onClick, message}) {
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
                            d="M6.41403 9H17.586C17.7838 9.00004 17.9771 9.05871 18.1415 9.1686C18.3059 9.27848 18.434 9.43465 18.5097 9.61734C18.5854 9.80004 18.6052 10.0011 18.5666 10.195C18.528 10.389 18.4328 10.5671 18.293 10.707L12.707 16.293C12.5195 16.4805 12.2652 16.5858 12 16.5858C11.7349 16.5858 11.4806 16.4805 11.293 16.293L5.70703 10.707C5.56722 10.5671 5.47202 10.389 5.43345 10.195C5.39488 10.0011 5.41468 9.80004 5.49035 9.61734C5.56602 9.43465 5.69416 9.27848 5.85857 9.1686C6.02298 9.05871 6.21628 9.00004 6.41403 9Z"
                            fill="#17153B"/>
                    </svg>
                </div>
            </button>
        </>
    )
}

export default DownButton;

DownButton.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func
}
