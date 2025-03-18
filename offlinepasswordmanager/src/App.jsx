import './App.css'
import './index.css'
import DefaultInput from "./components/DefaultInput.jsx";
import ClearButton from "./components/buttons/ClearButton.jsx";
import EditButton from "./components/buttons/EditButton.jsx";
import RedClearButton from "./components/buttons/RedClearButton.jsx";
import CancellButton from "./components/buttons/CancellButton.jsx";
import SaveButton from "./components/buttons/SaveButton.jsx";
import PreviewButton from "./components/buttons/PreviewButton.jsx";
import DeleteButton from "./components/buttons/DeleteButton.jsx";
import UpButton from "./components/buttons/UpButton.jsx";
import DownButton from "./components/buttons/DownButtom.jsx";
import PowerOffButton from "./components/buttons/PowerOffButton.jsx";
import AddPasswordButton from "./components/buttons/AddPasswordButton.jsx";
import SyncButton from "./components/buttons/SyncButton.jsx";
import React from "react";

function App() {

    return (
        <>
            {/*<div className="w-[1440px] h-[900px] relative bg-[#17153B] overflow-hidden">*/}
            <div className="w-full min-h-screen bg-[#17153B] overflow-hidden">
                {/*<div className="left-[30px] top-[30px] absolute inline-flex justify-start items-center gap-7">*/}
                <div className="p-4 md:p-8 flex flex-col md:flex-row gap-4 md:gap-7">

                    {/*LEFT PANEL*/}
                    <div
                        className="w-24 h-[840px] p-5 bg-[#2E236C] rounded-[10px] shadow-[10px_10px_10px_0px_rgba(0,0,0,0.50)] border-l-2 border-t-2 border-[#C8ACD6] inline-flex flex-col justify-start items-center gap-[560px]">
                        {/*PROFILE PIC + SYNC GROUP*/}
                        <div className="w-14 h-30 relative">
                            <SyncButton></SyncButton>
                            {/*PROFILE PIC*/}
                            <div className="w-14 h-14 left-0 top-0 absolute bg-zinc-300 rounded-full"/>
                        </div>

                        {/*ADD PASSWORD + POWER OFF BUTTONS GROUP*/}
                        <div className="w-10 h-28 relative">
                            <PowerOffButton></PowerOffButton>
                            <AddPasswordButton></AddPasswordButton>
                        </div>
                    </div>

                    {/* CENTER PANEL */}
                    <div
                        className="w-[720px] h-[840px] px-3 py-5 bg-[#2E236C] rounded-[10px] shadow-[10px_10px_10px_0px_rgba(0,0,0,0.50)] border-l-2 border-t-2 border-[#C8ACD6] inline-flex flex-col justify-start items-start gap-2.5">
                        <div className="w-[688.18px] flex flex-col justify-start items-start gap-2.5">


                            {/*PASSWORD X*/}
                            <div className="self-stretch relative inline-flex justify-start items-center gap-3">
                                <div
                                    className="w-[582.18px] h-14 bg-[#17153B] rounded-[10px] shadow-[5px_5px_5px_0px_rgba(0,0,0,0.50)]"/>
                                {/*PREVIEW + DELETE BUTTONS GROUP*/}
                                <div className="flex justify-start items-center gap-3">
                                    <PreviewButton></PreviewButton>
                                    <DeleteButton></DeleteButton>
                                </div>
                                <div className="left-[10px] top-[4px] absolute flex justify-start items-center gap-5">
                                    {/*NAZWA + KOMENTARZ GROUP*/}
                                    <div
                                        className="w-[525px] inline-flex flex-col justify-start items-start gap-1">
                                        <div
                                            className="self-stretch justify-start text-[#22FF00] text-base font-normal font-['PressStart2P'] tracking-[3.20px]">Hasło
                                            do konta gakko
                                        </div>
                                        <div
                                            className="self-stretch justify-start text-[#C8ACD6] text-sm font-medium font-['Outfit']">Opis
                                            hasła, xxx yyy zzz qqq www
                                        </div>
                                    </div>
                                    {/*UP / DOWN BUTTONS GROUP*/}
                                    <div className="w-5 inline-flex flex-col justify-start items-start gap-1.5">
                                        <UpButton></UpButton>
                                        <DownButton></DownButton>
                                    </div>
                                </div>
                            </div>

                            {/*PASSWORD X*/}
                            <div className="self-stretch relative inline-flex justify-start items-center gap-3">
                                <div
                                    className="w-[582.18px] h-14 bg-[#17153B] rounded-[10px] shadow-[5px_5px_5px_0px_rgba(0,0,0,0.50)]"/>
                                {/*PREVIEW + DELETE BUTTONS GROUP*/}
                                <div className="flex justify-start items-center gap-3">
                                    <PreviewButton></PreviewButton>
                                    <DeleteButton></DeleteButton>
                                </div>
                                <div className="left-[10px] top-[4px] absolute flex justify-start items-center gap-5">
                                    {/*NAZWA + KOMENTARZ GROUP*/}
                                    <div
                                        className="w-[525px] inline-flex flex-col justify-start items-start gap-1">
                                        <div
                                            className="self-stretch justify-start text-[#22FF00] text-base font-normal font-['PressStart2P'] tracking-[3.20px]">Hasło
                                            do konta gakko
                                        </div>
                                        <div
                                            className="self-stretch justify-start text-[#C8ACD6] text-sm font-medium font-['Outfit']">Opis
                                            hasła, xxx yyy zzz qqq www
                                        </div>
                                    </div>
                                    {/*UP / DOWN BUTTONS GROUP*/}
                                    <div className="w-5 inline-flex flex-col justify-start items-start gap-1.5">
                                        <UpButton></UpButton>
                                        <DownButton></DownButton>
                                    </div>
                                </div>
                            </div>

                            {/*    END END END END END END END END */}
                        </div>
                    </div>


                    {/*RIGHT PANEL*/}
                    <div
                        className="w-[500px] h-[840px] p-5 bg-[#2E236C] rounded-[10px] shadow-[10px_10px_10px_0px_rgba(0,0,0,0.50)] border-l-2 border-t-2 border-[#C8ACD6] inline-flex flex-col justify-start items-start gap-8">
                        <div className="px-5 inline-flex justify-center items-center gap-2.5">
                            <div
                                className="justify-start text-[#C8ACD6] text-6xl font-light font-['Handjet'] leading-[60px] tracking-[25.60px]">P@SSWORD<br/>MANAGER
                            </div>
                        </div>

                        {/*INPUTS GROUP*/}
                        <div className="w-[460px] flex flex-col justify-start items-start gap-5">

                            {/*NAZWA GROUP*/}
                            <div className="w-[460px] flex flex-col justify-start items-start gap-2">
                                <div
                                    className="self-stretch justify-start text-[#22FF00] text-xs font-normal font-['PressStart2P'] tracking-[6px]">NAZWA
                                </div>
                                <div className="self-stretch inline-flex justify-between items-center">
                                    {/*NAZWA INPUT*/}
                                    <DefaultInput></DefaultInput>
                                    {/*CLEAR BUTTON*/}
                                    <ClearButton></ClearButton>
                                </div>
                            </div>

                            {/*URL GROUP*/}
                            <div className="w-[460px] flex flex-col justify-start items-start gap-2">
                                <div
                                    className="self-stretch justify-start text-[#22FF00] text-xs font-normal font-['PressStart2P'] tracking-[6px]">URL
                                </div>
                                <div className="self-stretch inline-flex justify-between items-center">
                                    {/*URL INPUT*/}
                                    <DefaultInput></DefaultInput>
                                    {/*CLEAR BUTTON*/}
                                    <ClearButton></ClearButton>
                                </div>
                            </div>

                            {/*LOGIN GROUP*/}
                            <div className="w-[460px] flex flex-col justify-start items-start gap-2">
                                <div
                                    className="self-stretch justify-start text-[#22FF00] text-xs font-normal font-['PressStart2P'] tracking-[6px]">LOGIN
                                    / EMAIL
                                </div>
                                <div className="self-stretch inline-flex justify-between items-center">
                                    {/*LOGIN INPUT*/}
                                    <DefaultInput></DefaultInput>
                                    {/*CLEAR BUTTON*/}
                                    <ClearButton></ClearButton>
                                </div>
                            </div>

                            {/*HASLO GROUP*/}
                            <div className="w-[460px] flex flex-col justify-start items-start gap-2">
                                <div
                                    className="self-stretch justify-start text-[#22FF00] text-xs font-normal font-['PressStart2P'] tracking-[6px]">HASLO
                                </div>
                                <div className="self-stretch inline-flex justify-between items-center">
                                    {/*HASLO INPUT*/}
                                    <DefaultInput></DefaultInput>
                                    {/*CLEAR BUTTON*/}
                                    <ClearButton></ClearButton>
                                </div>
                            </div>

                            {/*POWTORZ HASLO GROUP*/}
                            <div className="w-[460px] flex flex-col justify-start items-start gap-2">
                                <div
                                    className="self-stretch justify-start text-[#22FF00] text-xs font-normal font-['PressStart2P'] tracking-[6px]">KOMENTARZ
                                </div>
                                <div className="self-stretch inline-flex justify-between items-center">
                                    {/*KOMENTARZ INPUT*/}
                                    <DefaultInput></DefaultInput>
                                    {/*CLEAR BUTTON*/}
                                    <ClearButton></ClearButton>
                                </div>
                            </div>
                        </div>

                        {/*MESSAGES GROUP*/}
                        <div className="w-96 flex flex-col justify-start items-start gap-8">
                            {/*ERRORS MESSAGES*/}
                            <div className="self-stretch h-14 justify-start"><span
                                className="text-violet-300 text-xs font-normal font-['PressStart2P'] leading-tight tracking-[6px]">ERRORS:</span><span
                                className="text-white text-xs font-normal font-['PressStart2P'] leading-tight tracking-[6px]"> </span><span
                                className="text-red-600 text-xs font-normal font-['PressStart2P'] leading-tight tracking-[6px]">PUSTA NAZWA; HASLO ZAWIERA NIEDOZWOLONE ZNAKI</span>
                            </div>
                            {/*MODE MESSAGE*/}
                            <div
                                className="self-stretch justify-start text-violet-300 text-base font-normal font-['PressStart2P'] tracking-[8px]">MODE:
                                EDIT
                            </div>
                        </div>

                        {/*BOTTOM ACTION BUTTONS*/}
                        <div className="inline-flex justify-start items-center gap-24 pt-2">
                            <SaveButton></SaveButton>
                            <EditButton></EditButton>
                            <RedClearButton></RedClearButton>
                            <CancellButton></CancellButton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
