"use client";
import React, {useState} from "react";
import InputField from "./InputField";
import SaveButton from "./buttons/SaveButton.jsx";
import ClearButton from "./buttons/ClearButton.jsx";
import SwitchButton from "./buttons/SwitchButton.jsx";

const Register = ({onRegister, onSwitchToLogin}) => {

    const [registerData, setRegisterData] = useState({
        username: "", password: "", passwordRepeat: ""
    });

    const handleChange = (name, value) => {
        setRegisterData({...registerData, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister(registerData);
    }

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Handjet:wght@300;400&display=swap"
                rel="stylesheet"
            />
            <section
                className="flex justify-center items-center p-2.5 bg-[#C8ACD6] rounded-xl h-[490px] w-[620px] max-md:p-5 max-md:w-full max-md:h-auto max-md:max-w-[620px] max-sm:p-2.5">
                <article
                    className="relative rounded-xl bg-[#2E236C] h-[470px] w-[600px] max-md:p-5 max-md:w-full max-md:h-auto max-sm:p-4">
                    <div
                        className="flex relative flex-col gap-7 items-center mx-auto my-5 w-[460px] max-md:w-full max-md:max-w-[460px]">
                        <h1
                            className="p-2.5 text-6xl font-light text-[#C8ACD6] leading-[60px] tracking-[25.6px] max-sm:text-4xl max-sm:tracking-[15px]"
                            style={{fontFamily: "Handjet"}}
                        >
                            REGISTER
                        </h1>
                        <form
                            onSubmit={{handleSubmit}}
                            className="flex flex-col gap-5 items-start w-full"
                        >
                            <InputField label="LOGIN" name={"username"} onChange={(value) => handleChange("username", value)}/>
                            <InputField label="HASLO" name={"password"} onChange={(value) => handleChange("username", value)}/>
                            <InputField label="POWTORZ HASLO" name={""} onChange={(value) => handleChange("username", value)}/>

                            <div className="flex justify-between items-center w-full max-sm:mt-5">
                                <SwitchButton switchAction={onSwitchToLogin}></SwitchButton>
                                <SaveButton type={'submit'}></SaveButton>
                            </div>
                        </form>
                    </div>
                </article>
            </section>
        </>
    );
};

export default Register;
