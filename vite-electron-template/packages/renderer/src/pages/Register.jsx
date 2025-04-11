"use client";
import React, {useState} from "react";
import InputField from "../components/inputs/InputField.jsx";
import SaveButton from "../components/buttons/SaveButton.jsx";
import SwitchButton from "../components/buttons/SwitchButton.jsx";
import ChooseFolder from "../components/buttons/ChooseFolder.jsx";

const Register = ({onRegister, onSwitchToLogin, onSelectFolder}) => {

    const [registerData, setRegisterData] = useState({
        login: "", password: "", passwordRepeat: ""
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
                className="flex justify-center items-center p-2.5 bg-beige rounded-xl h-[490px] w-[620px] max-md:p-5 max-md:w-full max-md:h-auto max-md:max-w-[620px] max-sm:p-2.5">
                <article
                    className="relative rounded-xl bg-medium h-[470px] w-[600px] max-md:p-5 max-md:w-full max-md:h-auto max-sm:p-4">
                    <div
                        className="flex relative flex-col gap-7 items-center mx-auto my-5 w-[460px] max-md:w-full max-md:max-w-[460px]">
                        <h1
                            className="p-2.5 text-6xl font-light text-beige leading-[60px] tracking-[25.6px] max-sm:text-4xl max-sm:tracking-[15px]"
                            style={{fontFamily: "Handjet"}}
                        >
                            REGISTER
                        </h1>
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-5 items-start w-full"
                        >
                            <InputField label="LOGIN"
                                        onChange={(login) => handleChange("login", login)}/>

                            <InputField label="HASLO"
                                        onChange={(password) => handleChange("password", password)}/>

                            <InputField label="POWTORZ HASLO"
                                        onChange={(passwordRepeat) => handleChange("passwordRepeat", passwordRepeat)}/>

                            <div className="flex justify-between items-center w-full max-sm:mt-5">
                                <SwitchButton onClick={onSwitchToLogin} message={"Switch to Login"}></SwitchButton>
                                <ChooseFolder onClick={onSelectFolder} message={"Choose folder to save passwords file"}></ChooseFolder>
                                <SaveButton type={'submit'} message={"Register"}></SaveButton>
                            </div>
                        </form>
                    </div>
                </article>
            </section>
        </>
    );
};

export default Register;
