"use client";
import React, {useState} from "react";
import ClearButton from "../buttons/ClearButton.jsx";

const InputField = ({label, name, onChange}) => {

    const [inputData, setInputData] = useState("");

    const handleInputChange = (e) => {
        setInputData(e.target.value);
        if (onChange) {
            onChange(e.target.value);
        }
    }

    const handleClear = () => {
        setInputData("");
        if (onChange) {
            onChange("");
        }
    }

    return (
        <div className="flex flex-col gap-2 items-start w-full">
            <label
                className="text-sm font-[Handjet] text-green-bright tracking-[6px] max-sm:text-xs max-sm:tracking-[4px]">
                {label}
            </label>
            <div className="flex gap-2.5 justify-between items-center w-full max-sm:flex-col max-sm:gap-2.5">
                <input
                    type={label.toLowerCase().includes("haslo") ? "password" : "text"}
                    // name={name}
                    value={inputData}
                    onChange={handleInputChange}

                    className=" pl-5 text-green-bright text-xs font-['PressStart2P'] bg-dark hover:scale-102
                focus:bg-mud-beige focus:outline-none focus:scale-104 transition duration-100 ease-linear w-96 h-11
                rounded-[10px] shadow-[5px_5px_5px_0px_rgba(0,0,0,0.50)]"

                    // aria-label={label}
                />
                <ClearButton onClick={handleClear} message={"Clear input"}></ClearButton>
            </div>
        </div>
    );
};

export default InputField;
