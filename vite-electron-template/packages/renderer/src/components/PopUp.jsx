"use client";
import React from "react";
import SaveButton from "./buttons/SaveButton.jsx";
import CancellButton from "./buttons/CancellButton.jsx";

const PopUp = ({notification}) => {
    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Handjet:wght@300;400&display=swap"
                rel="stylesheet"
            />
            <section
                className="flex justify-center items-center p-2.5 bg-[#820000] rounded-xl h-[300px] w-[620px] max-md:p-5 max-md:w-full max-md:h-auto max-md:max-w-[620px] max-sm:p-2.5">
                <article
                    className="relative rounded-xl bg-[#2E236C] h-[280px] w-[600px] max-md:p-5 max-md:w-full max-md:h-auto max-sm:p-4">
                    <div
                        className="flex relative flex-col gap-7 items-center mx-auto my-5 w-[460px] max-md:w-full max-md:max-w-[460px]">
                        <h1
                            className="p-2.5 text-6xl font-light text-[#C8ACD6] leading-[60px] tracking-[25.6px] max-sm:text-4xl max-sm:tracking-[15px]"
                            style={{fontFamily: "Handjet"}}
                        >
                            {notification}
                        </h1>

                        {/*<div className={`flex flex-col gap-2 items-start w-full ${className}`}>*/}

                        <form
                            className="flex flex-col gap-5 items-start w-full"
                        >
                            <div className="flex justify-between items-center w-full max-sm:mt-5">
                                <SaveButton></SaveButton>
                                <CancellButton></CancellButton>
                            </div>
                        </form>
                    </div>
                </article>
            </section>
        </>
    );
};

export default PopUp;
