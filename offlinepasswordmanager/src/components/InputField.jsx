"use client";
import React, {useState} from "react";
import ClearButton from "./buttons/ClearButton.jsx";

const InputField = ({ label, className = "", name, onChange }) => {

    const [value, setValue] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setValue(e.target.value);
    }

    const handleClear = () => {
        setValue("");
        if(onChange){
            onChange("");
        }
    }

    return (
        <div className={`flex flex-col gap-2 items-start w-full ${className}`}>
            <label className="text-sm font-[Handjet] text-[#22FF00] tracking-[6px] max-sm:text-xs max-sm:tracking-[4px]">
                {label}
            </label>
            <div className="flex gap-2.5 justify-between items-center w-full max-sm:flex-col max-sm:gap-2.5">
                <input
                    type={label.toLowerCase().includes("haslo") ? "password" : "text"}
                    onChange={handleChange}
                    name={name}
                    value={value}
                    // className="rounded-xl shadow-sm bg-[#17153B] h-[45px] w-[400px] max-md:w-[calc(100%_-_50px)] max-sm:w-full border-none focus:outline-none focus:ring-2 focus:ring-violet-400 px-4 text-violet-300"
                    className="pl-5 text-[#22FF00] text-xs font-['PressStart2P'] bg-[#17153B] hover:scale-102 focus:bg-[#7B68A1] focus:outline-none focus:scale-104 transition duration-100 ease-linear w-96 h-11 rounded-[10px] shadow-[5px_5px_5px_0px_rgba(0,0,0,0.50)]"

                aria-label={label}
                />
                <ClearButton clearInput={handleClear}></ClearButton>
            </div>
        </div>
    );
};

export default InputField;
