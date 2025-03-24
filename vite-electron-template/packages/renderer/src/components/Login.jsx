"use client";
import React, {useState} from "react";
import InputField from "./InputField";
import SaveButton from "./buttons/SaveButton.jsx";
import SwitchButton from "./buttons/SwitchButton.jsx";
import ChooseFolder from "./buttons/ChooseFolder.jsx";

const Login = ({onLogin, onSwitchToRegister, onSelectFile}) => {

    const [loginData, setLoginData] = useState({
        login: "", password: ""
    });

    const handleChange = (name, value) => {
        setLoginData({...loginData, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(loginData);
    }

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Handjet:wght@300;400&display=swap"
                rel="stylesheet"
            />
            <section
                className="flex justify-center items-center p-2.5 bg-beige rounded-xl h-[400px] w-[620px] max-md:p-5 max-md:w-full max-md:h-auto max-md:max-w-[620px] max-sm:p-2.5">
                <article
                    className="relative rounded-xl bg-medium h-[380px] w-[600px] max-md:p-5 max-md:w-full max-md:h-auto max-sm:p-4">
                    <div
                        className="flex relative flex-col gap-7 items-center mx-auto my-5 w-[460px] max-md:w-full max-md:max-w-[460px]">
                        <h1
                            className="p-2.5 text-6xl font-light text-beige leading-[60px] tracking-[25.6px] max-sm:text-4xl max-sm:tracking-[15px]"
                            style={{fontFamily: "Handjet"}}
                        >
                            LOGIN
                        </h1>
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-5 items-start w-full"
                        >
                            <InputField label="LOGIN"
                                        onChange={(login) => handleChange("login", login)}/>

                            <InputField label="HASLO"
                                        onChange={(password) => handleChange("password", password)}/>

                            <div className="flex justify-between items-center w-full max-sm:mt-5">
                                <SwitchButton onClick={onSwitchToRegister}></SwitchButton>
                                <ChooseFolder onClick={onSelectFile}></ChooseFolder>
                                <SaveButton type={"submit"}></SaveButton>
                            </div>
                        </form>
                    </div>
                </article>
            </section>
        </>
    );
};

export default Login;
