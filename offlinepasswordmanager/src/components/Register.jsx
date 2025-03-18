"use client";
import React from "react";
import InputField from "./InputField";
import PowerOffButton from "./buttons/PowerOffButton.jsx";
import SaveButton from "./buttons/SaveButton.jsx";
import ClearButton from "./buttons/ClearButton.jsx";

const RegisterForm = () => {
    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Handjet:wght@300;400&display=swap"
                rel="stylesheet"
            />
            <section className="flex justify-center items-center p-2.5 bg-[#C8ACD6] rounded-xl h-[500px] w-[620px] max-md:p-5 max-md:w-full max-md:h-auto max-md:max-w-[620px] max-sm:p-2.5">
                <article className="relative rounded-xl bg-[#2E236C] h-[480px] w-[600px] max-md:p-5 max-md:w-full max-md:h-auto max-sm:p-4">
                    <div className="flex relative flex-col gap-7 items-center mx-auto my-5 w-[460px] max-md:w-full max-md:max-w-[460px]">
                        <h1
                            className="p-2.5 text-6xl font-light text-[#C8ACD6] leading-[60px] tracking-[25.6px] max-sm:text-4xl max-sm:tracking-[15px]"
                            style={{ fontFamily: "Handjet" }}
                        >
                            REGISTER
                        </h1>
                        <form
                            className="flex flex-col gap-5 items-start w-full"
                        >
                            <InputField label="LOGIN" />
                            <InputField label="HASLO" />
                            <InputField label="POWTORZ HASLO" />

                            <div className="flex justify-between items-center w-full max-sm:mt-5">
                                <ClearButton></ClearButton>
                                <SaveButton></SaveButton>
                            </div>
                        </form>
                    </div>
                </article>
            </section>
        </>
    );
};

export default RegisterForm;
