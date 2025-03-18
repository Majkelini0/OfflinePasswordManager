function DeleteButton() {
    return (
        <>
            <button
                className="w-10 h-10 p-2 bg-[#17153B] hover:bg-[#7B68A1] active:bg-[#C8ACD6] transition-colors duration-100 ease-linear hover:scale-110 rounded-[5px] shadow-[4px_4px_8px_0px_rgba(0,0,0,0.50)] flex justify-start items-center">
                <div className="w-6 h-6 relative overflow-hidden">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M23 4.5C23 3.67158 22.3285 3 21.5 3H17.724C17.0921 1.20736 15.4007 0.00609375 13.5 0H10.5C8.59928 0.00609375 6.90789 1.20736 6.27602 3H2.5C1.67158 3 1 3.67158 1 4.5C1 5.32842 1.67158 6 2.5 6H3.00002V18.5C3.00002 21.5376 5.46245 24 8.5 24H15.5C18.5376 24 21 21.5376 21 18.5V6H21.5C22.3285 6 23 5.32842 23 4.5ZM18 18.5C18 19.8807 16.8807 21 15.5 21H8.5C7.1193 21 6.00002 19.8807 6.00002 18.5V6H18V18.5Z"
                            fill="#820000"/>
                        <path
                            d="M9.50006 18C10.3285 18 11.0001 17.3284 11.0001 16.5V10.5C11.0001 9.67158 10.3285 9 9.50006 9C8.67164 9 8.00006 9.67158 8.00006 10.5V16.5C8.00006 17.3284 8.67164 18 9.50006 18Z"
                            fill="#820000"/>
                        <path
                            d="M14.5 18C15.3284 18 16 17.3284 16 16.5V10.5C16 9.67158 15.3284 9 14.5 9C13.6716 9 13 9.67158 13 10.5V16.5C13 17.3284 13.6716 18 14.5 18Z"
                            fill="#820000"/>
                    </svg>
                </div>
            </button>
        </>
    )
}

export default DeleteButton;