import './App.css'
import './index.css'

function App() {

    const powerOff = () => {
        // e.target.blur();
        // window.open('', '_self', '');
        // window.close();
        // window.location.href = "about:blank";
    }

    return (
        <>
            <div className="w-[1440px] h-[900px] relative bg-[#17153B] overflow-hidden">
                <div className="w-[1440px] h-[900px] left-0 top-0 absolute bg-[#17153B]"/>
                <div
                    className="w-[1631.96px] h-[1507.45px] left-[-41px] top-[-315px] absolute border-4 border-violet-300 blur-[3px]"/>
                <div className="left-[30px] top-[30px] absolute inline-flex justify-start items-center gap-7">

                    {/*LEFT PANEL*/}
                    <div
                        className="w-24 h-[840px] p-5 bg-[#2E236C] rounded-[10px] shadow-[10px_10px_10px_0px_rgba(0,0,0,0.50)] border-l-2 border-t-2 border-[#C8ACD6] inline-flex flex-col justify-start items-center gap-[560px]">

                        {/*PROFILE PIC + SYNC GROUP*/}
                        <div className="w-14 h-30 relative">

                            {/*SYNC BUTTON*/}
                            <button
                                className="w-10 h-10 p-2 left-[10px] top-[80px] absolute bg-[#17153B] hover:bg-[#7B68A1] active:bg-[#C8ACD6] transition-colors duration-100 ease-linear hover:scale-110 rounded-[5px] shadow-[4px_4px_8px_0px_rgba(0,0,0,0.50)] inline-flex justify-start items-center gap-2.5">
                                <div className="w-6 h-6 relative overflow-hidden">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_31_83)">
                                            <path
                                                d="M11.6711 23.9999C11.212 24.0001 10.7575 23.9097 10.3334 23.7338C9.9094 23.5579 9.52427 23.3 9.2001 22.975L5.8101 19.556C5.53004 19.2734 5.3737 18.8911 5.37548 18.4932C5.37726 18.0954 5.53702 17.7145 5.8196 17.4345C6.10219 17.1544 6.48446 16.998 6.88232 16.9998C7.28018 17.0016 7.66104 17.1614 7.9411 17.444L11.3261 20.858C11.4196 20.9496 11.5452 21.0009 11.6761 21.0009C11.807 21.0009 11.9326 20.9496 12.0261 20.858L17.4401 15.443C17.7215 15.1616 18.1032 15.0035 18.5011 15.0035C18.8991 15.0035 19.2807 15.1616 19.5621 15.443C19.8435 15.7244 20.0016 16.106 20.0016 16.504C20.0016 16.9019 19.8435 17.2836 19.5621 17.565L14.1471 22.979C13.822 23.3039 13.4359 23.5613 13.011 23.7366C12.5861 23.9118 12.1307 24.0013 11.6711 23.9999ZM2.0851 18.9C2.46841 18.7783 2.78869 18.5111 2.97716 18.1558C3.16564 17.8006 3.20726 17.3856 3.0931 17C2.93665 16.3879 2.99463 15.7408 3.25738 15.1664C3.52013 14.5919 3.97179 14.1248 4.53711 13.843C5.1154 13.5315 5.54664 13.0034 5.73633 12.3746C5.92603 11.7457 5.8587 11.0673 5.5491 10.488C5.03356 9.46953 4.87307 8.30805 5.0931 7.18797C5.28217 6.15235 5.79002 5.20166 6.54572 4.46874C7.30141 3.73582 8.26719 3.25727 9.3081 3.09997C9.99254 2.99641 10.6908 3.03054 11.3618 3.20037C12.0329 3.3702 12.6633 3.6723 13.2161 4.08897C13.7603 4.49704 14.2175 5.00965 14.5609 5.59676C14.9044 6.18387 15.1271 6.83364 15.2161 7.50797C15.2598 7.83453 15.4098 8.13762 15.643 8.37041C15.8762 8.6032 16.1795 8.75275 16.5061 8.79597C17.8205 8.97011 19.0177 9.64279 19.8501 10.6749C20.6825 11.707 21.0863 13.0195 20.9781 14.341V14.394C20.9644 14.5882 20.9896 14.7831 21.052 14.9675C21.1145 15.1519 21.2131 15.322 21.342 15.4679C21.471 15.6137 21.6277 15.7325 21.803 15.8171C21.9783 15.9018 22.1687 15.9507 22.3631 15.961C22.7639 15.9822 23.1572 15.8457 23.4586 15.5807C23.7601 15.3157 23.9458 14.9432 23.9761 14.543C24.1225 12.6484 23.6033 10.7621 22.508 9.20937C21.4127 7.65661 19.81 6.53466 17.9761 6.03697C17.5022 4.30247 16.4643 2.77514 15.0261 1.69598C14.1578 1.0386 13.1671 0.561059 12.1119 0.291304C11.0567 0.0215493 9.95838 -0.0349963 8.8811 0.124978C7.22055 0.372054 5.67872 1.13186 4.47117 2.29818C3.26361 3.46449 2.45071 4.979 2.1461 6.62997C1.82956 8.25548 2.01835 9.93895 2.6871 11.454C1.65918 12.1044 0.863619 13.0637 0.414504 14.1942C-0.0346102 15.3247 -0.114215 16.5684 0.187105 17.747L0.234105 17.921C0.322213 18.2249 0.507519 18.4915 0.761641 18.6801C1.01576 18.8687 1.32469 18.9687 1.6411 18.965C1.79144 18.9645 1.94095 18.9426 2.0851 18.9Z"
                                                fill="#19B900"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_31_83">
                                                <rect width="24" height="24" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                            </button>

                            {/*PROFILE PIC*/}
                            <div className="w-14 h-14 left-0 top-0 absolute bg-zinc-300 rounded-full"/>
                        </div>

                        {/*ADD PASSWORD + POWER OFF BUTTONS GROUP*/}
                        <div className="w-10 h-28 relative">
                            {/*POWER OFF BUTTON*/}
                            <button onClick={powerOff}
                                className="w-10 h-10 p-2 left-0 top-[70px] absolute bg-[#17153B] hover:bg-[#7B68A1] active:bg-[#C8ACD6] transition-colors duration-100 ease-linear hover:scale-110 rounded-[5px] shadow-[4px_4px_8px_0px_rgba(0,0,0,0.50)] inline-flex justify-start items-center gap-2.5">
                                <div className="w-6 h-6 relative overflow-hidden">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_30_37)">
                                            <path
                                                d="M11.9962 0C12.8241 0 13.4953 0.671195 13.4953 1.49915V6.49631C13.4953 7.32426 12.8241 7.99546 11.9962 7.99546C11.1682 7.99546 10.497 7.32426 10.497 6.49631V1.49915C10.497 0.671195 11.1682 0 11.9962 0Z"
                                                fill="#820000"/>
                                            <path
                                                d="M15.494 4.93739C15.4867 5.44063 15.7404 5.91183 16.1646 6.18266C19.9327 8.48493 21.121 13.406 18.8187 17.174C16.5164 20.9421 11.5954 22.1304 7.82733 19.8281C4.05923 17.5259 2.87097 12.6048 5.17328 8.83671C5.83113 7.76005 6.73446 6.85433 7.80939 6.19363C8.24091 5.9228 8.50148 5.4478 8.49801 4.93833C8.50031 4.11038 7.83099 3.43735 7.00304 3.43506C6.71867 3.43426 6.43992 3.51437 6.19935 3.66607C1.04159 6.86974 -0.542489 13.6479 2.66114 18.8057C5.86476 23.9634 12.643 25.5475 17.8007 22.3438C22.9584 19.1402 24.5425 12.362 21.3388 7.20428C20.4471 5.76862 19.2363 4.55787 17.8007 3.66611C17.0981 3.22288 16.1692 3.43314 15.726 4.13572C15.5746 4.37568 15.4942 4.65363 15.494 4.93739Z"
                                                fill="#820000"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_30_37">
                                                <rect width="24" height="24" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                            </button>


                            {/*ADD PASSWORD BUTTON*/}
                            <button
                                className="w-10 h-10 p-2 left-0 top-0 absolute bg-[#17153B] hover:bg-[#7B68A1] active:bg-[#C8ACD6] transition-colors duration-100 ease-linear hover:scale-110 rounded-[5px] shadow-[4px_4px_8px_0px_rgba(0,0,0,0.50)] inline-flex justify-start items-center gap-2.5">
                                <div className="w-6 h-6 relative overflow-hidden">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_31_119)">
                                            <path
                                                d="M22.5 10.5H13.5V1.5C13.5 0.671578 12.8284 0 12 0C11.1716 0 10.5 0.671578 10.5 1.5V10.5H1.5C0.671578 10.5 0 11.1716 0 12C0 12.8284 0.671578 13.5 1.5 13.5H10.5V22.5C10.5 23.3284 11.1716 24 12 24C12.8284 24 13.5 23.3284 13.5 22.5V13.5H22.5C23.3284 13.5 24 12.8284 24 12C24 11.1716 23.3284 10.5 22.5 10.5Z"
                                                fill="white"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_31_119">
                                                <rect width="24" height="24" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                            </button>
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
                                    {/*PREVIEW BUTTON*/}
                                    <button
                                        className="w-10 h-10 p-2 bg-[#17153B] hover:bg-[#7B68A1] active:bg-[#C8ACD6] transition-colors duration-100 ease-linear hover:scale-110 rounded-[5px] shadow-[4px_4px_8px_0px_rgba(0,0,0,0.50)] flex justify-start items-center gap-2.5">
                                        <div className="w-6 h-6 relative overflow-hidden">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_30_46)">
                                                    <path
                                                        d="M23.5612 21.4454L18.9161 16.7983C22.3918 12.1535 21.4441 5.57052 16.7993 2.0948C12.1545 -1.38092 5.57153 -0.433205 2.09581 4.21157C-1.37991 8.85634 -0.432198 15.4393 4.21258 18.9151C7.94364 21.7071 13.0682 21.7071 16.7993 18.9151L21.4464 23.5622C22.0304 24.1462 22.9772 24.1462 23.5612 23.5622C24.1452 22.9782 24.1452 22.0314 23.5612 21.4474L23.5612 21.4454ZM10.5447 18.0181C6.41661 18.0181 3.0702 14.6717 3.0702 10.5437C3.0702 6.4156 6.41661 3.06919 10.5447 3.06919C14.6727 3.06919 18.0191 6.4156 18.0191 10.5437C18.0147 14.6698 14.6709 18.0137 10.5447 18.0181Z"
                                                        fill="#C8ACD6"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_30_46">
                                                        <rect width="24" height="24" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </button>
                                    {/*DELETE BUTTON*/}
                                    <button
                                        className="w-10 h-10 p-2 bg-[#17153B] hover:bg-[#7B68A1] active:bg-[#C8ACD6] transition-colors duration-100 ease-linear hover:scale-110 rounded-[5px] shadow-[4px_4px_8px_0px_rgba(0,0,0,0.50)] flex justify-start items-center gap-2.5">
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
                                            hasła, xxx yyy zzz qqq www</div>
                                    </div>
                                    {/*UP / DOWN BUTTONS GROUP*/}
                                    <div className="w-5 inline-flex flex-col justify-start items-start gap-1.5">
                                        <button
                                            className="self-stretch h-5 bg-violet-300 hover:bg-[#7B68A1] active:bg-[#C8ACD6] transition-colors duration-100 ease-linear hover:scale-110 rounded-[5px] inline-flex justify-center items-center">
                                            <div className="w-6 h-6 relative flex justify-center items-center">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.41403 15.5861H17.586C17.7838 15.586 17.9771 15.5274 18.1415 15.4175C18.3059 15.3076 18.434 15.1514 18.5097 14.9687C18.5854 14.786 18.6052 14.585 18.5666 14.391C18.528 14.1971 18.4328 14.0189 18.293 13.8791L12.707 8.29309C12.5195 8.10562 12.2652 8.00031 12 8.00031C11.7349 8.00031 11.4806 8.10562 11.293 8.29309L5.70703 13.8791C5.56722 14.0189 5.47202 14.1971 5.43345 14.391C5.39488 14.585 5.41468 14.786 5.49035 14.9687C5.56602 15.1514 5.69416 15.3076 5.85857 15.4175C6.02298 15.5274 6.21628 15.586 6.41403 15.5861Z"
                                                        fill="#17153B"/>
                                                </svg>
                                            </div>
                                        </button>
                                        <button
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
                                    </div>
                                </div>
                            </div>

                            {/*PASSWORD X*/}
                            <div className="self-stretch relative inline-flex justify-start items-center gap-3">
                                <div
                                    className="w-[582.18px] h-14 bg-[#17153B] rounded-[10px] shadow-[5px_5px_5px_0px_rgba(0,0,0,0.50)]"/>
                                {/*PREVIEW + DELETE BUTTONS GROUP*/}
                                <div className="flex justify-start items-center gap-3">
                                    {/*PREVIEW BUTTON*/}
                                    <button
                                        className="w-10 h-10 p-2 bg-[#17153B] hover:bg-[#7B68A1] active:bg-[#C8ACD6] transition-colors duration-100 ease-linear hover:scale-110 rounded-[5px] shadow-[4px_4px_8px_0px_rgba(0,0,0,0.50)] flex justify-start items-center gap-2.5">
                                        <div className="w-6 h-6 relative overflow-hidden">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_30_46)">
                                                    <path
                                                        d="M23.5612 21.4454L18.9161 16.7983C22.3918 12.1535 21.4441 5.57052 16.7993 2.0948C12.1545 -1.38092 5.57153 -0.433205 2.09581 4.21157C-1.37991 8.85634 -0.432198 15.4393 4.21258 18.9151C7.94364 21.7071 13.0682 21.7071 16.7993 18.9151L21.4464 23.5622C22.0304 24.1462 22.9772 24.1462 23.5612 23.5622C24.1452 22.9782 24.1452 22.0314 23.5612 21.4474L23.5612 21.4454ZM10.5447 18.0181C6.41661 18.0181 3.0702 14.6717 3.0702 10.5437C3.0702 6.4156 6.41661 3.06919 10.5447 3.06919C14.6727 3.06919 18.0191 6.4156 18.0191 10.5437C18.0147 14.6698 14.6709 18.0137 10.5447 18.0181Z"
                                                        fill="#C8ACD6"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_30_46">
                                                        <rect width="24" height="24" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </button>
                                    {/*DELETE BUTTON*/}
                                    <button
                                        className="w-10 h-10 p-2 bg-[#17153B] hover:bg-[#7B68A1] active:bg-[#C8ACD6] transition-colors duration-100 ease-linear hover:scale-110 rounded-[5px] shadow-[4px_4px_8px_0px_rgba(0,0,0,0.50)] flex justify-start items-center gap-2.5">
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
                                            hasła, xxx yyy zzz qqq www</div>
                                    </div>
                                    {/*UP / DOWN BUTTONS GROUP*/}
                                    <div className="w-5 inline-flex flex-col justify-start items-start gap-1.5">
                                        <button
                                            className="self-stretch h-5 bg-violet-300 hover:bg-[#7B68A1] active:bg-[#C8ACD6] transition-colors duration-100 ease-linear hover:scale-110 rounded-[5px] inline-flex justify-center items-center">
                                            <div className="w-6 h-6 relative flex justify-center items-center">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.41403 15.5861H17.586C17.7838 15.586 17.9771 15.5274 18.1415 15.4175C18.3059 15.3076 18.434 15.1514 18.5097 14.9687C18.5854 14.786 18.6052 14.585 18.5666 14.391C18.528 14.1971 18.4328 14.0189 18.293 13.8791L12.707 8.29309C12.5195 8.10562 12.2652 8.00031 12 8.00031C11.7349 8.00031 11.4806 8.10562 11.293 8.29309L5.70703 13.8791C5.56722 14.0189 5.47202 14.1971 5.43345 14.391C5.39488 14.585 5.41468 14.786 5.49035 14.9687C5.56602 15.1514 5.69416 15.3076 5.85857 15.4175C6.02298 15.5274 6.21628 15.586 6.41403 15.5861Z"
                                                        fill="#17153B"/>
                                                </svg>
                                            </div>
                                        </button>
                                        <button
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
                                    </div>
                                </div>
                            </div>

                            {/*PASSWORD X*/}
                            <div className="self-stretch relative inline-flex justify-start items-center gap-3">
                                <div
                                    className="w-[582.18px] h-14 bg-[#17153B] rounded-[10px] shadow-[5px_5px_5px_0px_rgba(0,0,0,0.50)]"/>
                                {/*PREVIEW + DELETE BUTTONS GROUP*/}
                                <div className="flex justify-start items-center gap-3">
                                    {/*PREVIEW BUTTON*/}
                                    <button
                                        className="w-10 h-10 p-2 bg-[#17153B] hover:bg-[#7B68A1] active:bg-[#C8ACD6] transition-colors duration-100 ease-linear hover:scale-110 rounded-[5px] shadow-[4px_4px_8px_0px_rgba(0,0,0,0.50)] flex justify-start items-center gap-2.5">
                                        <div className="w-6 h-6 relative overflow-hidden">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_30_46)">
                                                    <path
                                                        d="M23.5612 21.4454L18.9161 16.7983C22.3918 12.1535 21.4441 5.57052 16.7993 2.0948C12.1545 -1.38092 5.57153 -0.433205 2.09581 4.21157C-1.37991 8.85634 -0.432198 15.4393 4.21258 18.9151C7.94364 21.7071 13.0682 21.7071 16.7993 18.9151L21.4464 23.5622C22.0304 24.1462 22.9772 24.1462 23.5612 23.5622C24.1452 22.9782 24.1452 22.0314 23.5612 21.4474L23.5612 21.4454ZM10.5447 18.0181C6.41661 18.0181 3.0702 14.6717 3.0702 10.5437C3.0702 6.4156 6.41661 3.06919 10.5447 3.06919C14.6727 3.06919 18.0191 6.4156 18.0191 10.5437C18.0147 14.6698 14.6709 18.0137 10.5447 18.0181Z"
                                                        fill="#C8ACD6"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_30_46">
                                                        <rect width="24" height="24" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </button>
                                    {/*DELETE BUTTON*/}
                                    <button
                                        className="w-10 h-10 p-2 bg-[#17153B] hover:bg-[#7B68A1] active:bg-[#C8ACD6] transition-colors duration-100 ease-linear hover:scale-110 rounded-[5px] shadow-[4px_4px_8px_0px_rgba(0,0,0,0.50)] flex justify-start items-center gap-2.5">
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
                                            hasła, xxx yyy zzz qqq www</div>
                                    </div>
                                    {/*UP / DOWN BUTTONS GROUP*/}
                                    <div className="w-5 inline-flex flex-col justify-start items-start gap-1.5">
                                        <button
                                            className="self-stretch h-5 bg-violet-300 hover:bg-[#7B68A1] active:bg-[#C8ACD6] transition-colors duration-100 ease-linear hover:scale-110 rounded-[5px] inline-flex justify-center items-center">
                                            <div className="w-6 h-6 relative flex justify-center items-center">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.41403 15.5861H17.586C17.7838 15.586 17.9771 15.5274 18.1415 15.4175C18.3059 15.3076 18.434 15.1514 18.5097 14.9687C18.5854 14.786 18.6052 14.585 18.5666 14.391C18.528 14.1971 18.4328 14.0189 18.293 13.8791L12.707 8.29309C12.5195 8.10562 12.2652 8.00031 12 8.00031C11.7349 8.00031 11.4806 8.10562 11.293 8.29309L5.70703 13.8791C5.56722 14.0189 5.47202 14.1971 5.43345 14.391C5.39488 14.585 5.41468 14.786 5.49035 14.9687C5.56602 15.1514 5.69416 15.3076 5.85857 15.4175C6.02298 15.5274 6.21628 15.586 6.41403 15.5861Z"
                                                        fill="#17153B"/>
                                                </svg>
                                            </div>
                                        </button>
                                        <button
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
                                    </div>
                                </div>
                            </div>
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

                            {/*INPUT + NAZWA GROUP*/}
                            <div className="w-[460px] flex flex-col justify-start items-start gap-2">
                                <div
                                    className="self-stretch justify-start text-[#22FF00] text-xs font-normal font-['PressStart2P'] tracking-[6px]">NAZWA
                                </div>
                                <div className="self-stretch inline-flex justify-between items-center">
                                    {/*NAZWA INPUT*/}
                                    <input
                                        className="pl-5 text-[#22FF00] text-xs font-['PressStart2P'] focus:outline-none bg-[#17153B] focus:bg-[#7B68A1] hover:scale-104 w-96 h-11 rounded-[10px] shadow-[5px_5px_5px_0px_rgba(0,0,0,0.50)]"/>
                                    {/*CLEAR BUTTON*/}
                                    <button
                                        className="w-10 h-10 p-2 bg-[#17153B] hover:bg-[#7B68A1] active:bg-[#C8ACD6] transition-colors duration-100 ease-linear hover:scale-110 rounded-[5px] shadow-[4px_4px_8px_0px_rgba(0,0,0,0.50)] flex justify-start items-center gap-2.5">
                                        <div className="w-6 h-6 relative overflow-hidden">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_77_215)">
                                                    <path
                                                        d="M23.5603 1.1205C22.9748 0.535109 22.0255 0.535109 21.44 1.1205L16.6773 5.88314C14.7598 4.16013 11.9037 3.99771 9.80331 5.49226C8.56696 6.41248 7.19767 7.13893 5.74248 7.64663L3.95401 8.17049C1.03979 9.02417 -0.63059 12.0787 0.223132 14.9929C0.288036 15.2145 0.36681 15.4317 0.459033 15.6433C1.54697 18.3406 3.54168 20.5739 6.09942 21.9585C8.11606 22.9053 10.3254 23.3694 12.5526 23.3141H12.6156C13.3662 23.3144 14.0966 23.0709 14.697 22.6203C17.8462 20.3585 19.9991 16.9666 20.7052 13.154C21.0182 11.3574 20.4284 9.52165 19.1276 8.24346L18.8397 7.96355L23.5633 3.23893C24.1466 2.65273 24.1453 1.70501 23.5603 1.1205ZM12.8834 20.23C12.8011 20.2889 12.7016 20.3188 12.6005 20.315C11.5501 20.3147 10.5023 20.2078 9.4734 19.9961C10.8119 19.1588 11.9646 18.0561 12.8604 16.756L13.3543 16.0293C13.8338 15.354 13.675 14.4179 12.9997 13.9384C12.3245 13.4589 11.3884 13.6177 10.9089 14.293C10.8972 14.3093 10.8859 14.3259 10.875 14.3427L10.3811 15.0675C9.56249 16.2636 8.45393 17.2325 7.15905 17.8837L6.12135 18.4046C5.53868 17.9317 5.01688 17.3883 4.5678 16.7871C5.95462 16.2214 7.21908 15.3931 8.29174 14.3478C8.87479 13.7596 8.87062 12.8102 8.28246 12.2271C7.70612 11.6558 6.7799 11.6466 6.19235 12.2064C5.3129 13.0599 4.26147 13.716 3.10825 14.1309C2.72132 12.818 3.47199 11.44 4.78486 11.0531C4.78983 11.0516 4.7948 11.0502 4.79977 11.0487L6.58627 10.5239C8.12126 10.0123 9.57622 9.28631 10.908 8.3675L17.2342 14.5327C16.3694 16.8148 14.8573 18.7948 12.8834 20.23Z"
                                                        fill="#C8ACD6"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_77_215">
                                                        <rect width="24" height="24" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            {/*URL GROUP*/}
                            <div className="w-[460px] flex flex-col justify-start items-start gap-2">
                                <div
                                    className="self-stretch justify-start text-[#22FF00] text-xs font-normal font-['PressStart2P'] tracking-[6px]">URL
                                </div>
                                <div className="self-stretch inline-flex justify-between items-center">
                                    {/*URL INPUT*/}
                                    <input
                                        className="pl-5 text-[#22FF00] text-xs font-['PressStart2P'] focus:outline-none bg-[#17153B] focus:bg-[#7B68A1] hover:scale-104 w-96 h-11 bg-[#17153B] rounded-[10px] shadow-[5px_5px_5px_0px_rgba(0,0,0,0.50)]"/>
                                    {/*CLEAR BUTTON*/}
                                    <button
                                        className="w-10 h-10 p-2 bg-[#17153B] hover:bg-[#7B68A1] active:bg-[#C8ACD6] transition-colors duration-100 ease-linear hover:scale-110 rounded-[5px] shadow-[4px_4px_8px_0px_rgba(0,0,0,0.50)] flex justify-start items-center gap-2.5">
                                        <div className="w-6 h-6 relative overflow-hidden">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_77_215)">
                                                    <path
                                                        d="M23.5603 1.1205C22.9748 0.535109 22.0255 0.535109 21.44 1.1205L16.6773 5.88314C14.7598 4.16013 11.9037 3.99771 9.80331 5.49226C8.56696 6.41248 7.19767 7.13893 5.74248 7.64663L3.95401 8.17049C1.03979 9.02417 -0.63059 12.0787 0.223132 14.9929C0.288036 15.2145 0.36681 15.4317 0.459033 15.6433C1.54697 18.3406 3.54168 20.5739 6.09942 21.9585C8.11606 22.9053 10.3254 23.3694 12.5526 23.3141H12.6156C13.3662 23.3144 14.0966 23.0709 14.697 22.6203C17.8462 20.3585 19.9991 16.9666 20.7052 13.154C21.0182 11.3574 20.4284 9.52165 19.1276 8.24346L18.8397 7.96355L23.5633 3.23893C24.1466 2.65273 24.1453 1.70501 23.5603 1.1205ZM12.8834 20.23C12.8011 20.2889 12.7016 20.3188 12.6005 20.315C11.5501 20.3147 10.5023 20.2078 9.4734 19.9961C10.8119 19.1588 11.9646 18.0561 12.8604 16.756L13.3543 16.0293C13.8338 15.354 13.675 14.4179 12.9997 13.9384C12.3245 13.4589 11.3884 13.6177 10.9089 14.293C10.8972 14.3093 10.8859 14.3259 10.875 14.3427L10.3811 15.0675C9.56249 16.2636 8.45393 17.2325 7.15905 17.8837L6.12135 18.4046C5.53868 17.9317 5.01688 17.3883 4.5678 16.7871C5.95462 16.2214 7.21908 15.3931 8.29174 14.3478C8.87479 13.7596 8.87062 12.8102 8.28246 12.2271C7.70612 11.6558 6.7799 11.6466 6.19235 12.2064C5.3129 13.0599 4.26147 13.716 3.10825 14.1309C2.72132 12.818 3.47199 11.44 4.78486 11.0531C4.78983 11.0516 4.7948 11.0502 4.79977 11.0487L6.58627 10.5239C8.12126 10.0123 9.57622 9.28631 10.908 8.3675L17.2342 14.5327C16.3694 16.8148 14.8573 18.7948 12.8834 20.23Z"
                                                        fill="#C8ACD6"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_77_215">
                                                        <rect width="24" height="24" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                        </div>
                                    </button>
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
                                    <div
                                        className="w-96 h-11 bg-[#17153B] rounded-[10px] shadow-[5px_5px_5px_0px_rgba(0,0,0,0.50)]"/>
                                    {/*CLEAR BUTTON*/}
                                    <button
                                        className="w-10 h-10 p-2 bg-[#17153B] hover:bg-[#7B68A1] active:bg-[#C8ACD6] transition-colors duration-100 ease-linear hover:scale-110 rounded-[5px] shadow-[4px_4px_8px_0px_rgba(0,0,0,0.50)] flex justify-start items-center gap-2.5">
                                        <div className="w-6 h-6 relative overflow-hidden">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_77_215)">
                                                    <path
                                                        d="M23.5603 1.1205C22.9748 0.535109 22.0255 0.535109 21.44 1.1205L16.6773 5.88314C14.7598 4.16013 11.9037 3.99771 9.80331 5.49226C8.56696 6.41248 7.19767 7.13893 5.74248 7.64663L3.95401 8.17049C1.03979 9.02417 -0.63059 12.0787 0.223132 14.9929C0.288036 15.2145 0.36681 15.4317 0.459033 15.6433C1.54697 18.3406 3.54168 20.5739 6.09942 21.9585C8.11606 22.9053 10.3254 23.3694 12.5526 23.3141H12.6156C13.3662 23.3144 14.0966 23.0709 14.697 22.6203C17.8462 20.3585 19.9991 16.9666 20.7052 13.154C21.0182 11.3574 20.4284 9.52165 19.1276 8.24346L18.8397 7.96355L23.5633 3.23893C24.1466 2.65273 24.1453 1.70501 23.5603 1.1205ZM12.8834 20.23C12.8011 20.2889 12.7016 20.3188 12.6005 20.315C11.5501 20.3147 10.5023 20.2078 9.4734 19.9961C10.8119 19.1588 11.9646 18.0561 12.8604 16.756L13.3543 16.0293C13.8338 15.354 13.675 14.4179 12.9997 13.9384C12.3245 13.4589 11.3884 13.6177 10.9089 14.293C10.8972 14.3093 10.8859 14.3259 10.875 14.3427L10.3811 15.0675C9.56249 16.2636 8.45393 17.2325 7.15905 17.8837L6.12135 18.4046C5.53868 17.9317 5.01688 17.3883 4.5678 16.7871C5.95462 16.2214 7.21908 15.3931 8.29174 14.3478C8.87479 13.7596 8.87062 12.8102 8.28246 12.2271C7.70612 11.6558 6.7799 11.6466 6.19235 12.2064C5.3129 13.0599 4.26147 13.716 3.10825 14.1309C2.72132 12.818 3.47199 11.44 4.78486 11.0531C4.78983 11.0516 4.7948 11.0502 4.79977 11.0487L6.58627 10.5239C8.12126 10.0123 9.57622 9.28631 10.908 8.3675L17.2342 14.5327C16.3694 16.8148 14.8573 18.7948 12.8834 20.23Z"
                                                        fill="#C8ACD6"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_77_215">
                                                        <rect width="24" height="24" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                        </div>
                                    </button>
                                </div>
                            </div>

                            {/*HASLO GROUP*/}
                            <div className="w-[460px] flex flex-col justify-start items-start gap-2">
                                <div
                                    className="self-stretch justify-start text-[#22FF00] text-xs font-normal font-['PressStart2P'] tracking-[6px]">HASLO
                                </div>
                                <div className="self-stretch inline-flex justify-between items-center">
                                    {/*HASLO INPUT*/}
                                    <div
                                        className="w-96 h-11 bg-[#17153B] rounded-[10px] shadow-[5px_5px_5px_0px_rgba(0,0,0,0.50)]"/>
                                    {/*CLEAR BUTTON*/}
                                    <button
                                        className="w-10 h-10 p-2 bg-[#17153B] hover:bg-[#7B68A1] active:bg-[#C8ACD6] transition-colors duration-100 ease-linear hover:scale-110 rounded-[5px] shadow-[4px_4px_8px_0px_rgba(0,0,0,0.50)] flex justify-start items-center gap-2.5">
                                        <div className="w-6 h-6 relative overflow-hidden">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_77_215)">
                                                    <path
                                                        d="M23.5603 1.1205C22.9748 0.535109 22.0255 0.535109 21.44 1.1205L16.6773 5.88314C14.7598 4.16013 11.9037 3.99771 9.80331 5.49226C8.56696 6.41248 7.19767 7.13893 5.74248 7.64663L3.95401 8.17049C1.03979 9.02417 -0.63059 12.0787 0.223132 14.9929C0.288036 15.2145 0.36681 15.4317 0.459033 15.6433C1.54697 18.3406 3.54168 20.5739 6.09942 21.9585C8.11606 22.9053 10.3254 23.3694 12.5526 23.3141H12.6156C13.3662 23.3144 14.0966 23.0709 14.697 22.6203C17.8462 20.3585 19.9991 16.9666 20.7052 13.154C21.0182 11.3574 20.4284 9.52165 19.1276 8.24346L18.8397 7.96355L23.5633 3.23893C24.1466 2.65273 24.1453 1.70501 23.5603 1.1205ZM12.8834 20.23C12.8011 20.2889 12.7016 20.3188 12.6005 20.315C11.5501 20.3147 10.5023 20.2078 9.4734 19.9961C10.8119 19.1588 11.9646 18.0561 12.8604 16.756L13.3543 16.0293C13.8338 15.354 13.675 14.4179 12.9997 13.9384C12.3245 13.4589 11.3884 13.6177 10.9089 14.293C10.8972 14.3093 10.8859 14.3259 10.875 14.3427L10.3811 15.0675C9.56249 16.2636 8.45393 17.2325 7.15905 17.8837L6.12135 18.4046C5.53868 17.9317 5.01688 17.3883 4.5678 16.7871C5.95462 16.2214 7.21908 15.3931 8.29174 14.3478C8.87479 13.7596 8.87062 12.8102 8.28246 12.2271C7.70612 11.6558 6.7799 11.6466 6.19235 12.2064C5.3129 13.0599 4.26147 13.716 3.10825 14.1309C2.72132 12.818 3.47199 11.44 4.78486 11.0531C4.78983 11.0516 4.7948 11.0502 4.79977 11.0487L6.58627 10.5239C8.12126 10.0123 9.57622 9.28631 10.908 8.3675L17.2342 14.5327C16.3694 16.8148 14.8573 18.7948 12.8834 20.23Z"
                                                        fill="#C8ACD6"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_77_215">
                                                        <rect width="24" height="24" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            {/*POWTORZ HASLO GROUP*/}
                            <div className="w-[460px] flex flex-col justify-start items-start gap-2">
                                <div
                                    className="self-stretch justify-start text-[#22FF00] text-xs font-normal font-['PressStart2P'] tracking-[6px]">KOMENTARZ
                                </div>
                                <div className="self-stretch inline-flex justify-between items-center">
                                    {/*KOMENTARZ INPUT*/}
                                    <div
                                        className="w-96 h-11 bg-[#17153B] rounded-[10px] shadow-[5px_5px_5px_0px_rgba(0,0,0,0.50)]"/>
                                    {/*CLEAR BUTTON*/}
                                    <button
                                        className="w-10 h-10 p-2 bg-[#17153B] hover:bg-[#7B68A1] active:bg-[#C8ACD6] transition-colors duration-100 ease-linear hover:scale-110 rounded-[5px] shadow-[4px_4px_8px_0px_rgba(0,0,0,0.50)] flex justify-start items-center gap-2.5">
                                        <div className="w-6 h-6 relative overflow-hidden">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_77_215)">
                                                    <path
                                                        d="M23.5603 1.1205C22.9748 0.535109 22.0255 0.535109 21.44 1.1205L16.6773 5.88314C14.7598 4.16013 11.9037 3.99771 9.80331 5.49226C8.56696 6.41248 7.19767 7.13893 5.74248 7.64663L3.95401 8.17049C1.03979 9.02417 -0.63059 12.0787 0.223132 14.9929C0.288036 15.2145 0.36681 15.4317 0.459033 15.6433C1.54697 18.3406 3.54168 20.5739 6.09942 21.9585C8.11606 22.9053 10.3254 23.3694 12.5526 23.3141H12.6156C13.3662 23.3144 14.0966 23.0709 14.697 22.6203C17.8462 20.3585 19.9991 16.9666 20.7052 13.154C21.0182 11.3574 20.4284 9.52165 19.1276 8.24346L18.8397 7.96355L23.5633 3.23893C24.1466 2.65273 24.1453 1.70501 23.5603 1.1205ZM12.8834 20.23C12.8011 20.2889 12.7016 20.3188 12.6005 20.315C11.5501 20.3147 10.5023 20.2078 9.4734 19.9961C10.8119 19.1588 11.9646 18.0561 12.8604 16.756L13.3543 16.0293C13.8338 15.354 13.675 14.4179 12.9997 13.9384C12.3245 13.4589 11.3884 13.6177 10.9089 14.293C10.8972 14.3093 10.8859 14.3259 10.875 14.3427L10.3811 15.0675C9.56249 16.2636 8.45393 17.2325 7.15905 17.8837L6.12135 18.4046C5.53868 17.9317 5.01688 17.3883 4.5678 16.7871C5.95462 16.2214 7.21908 15.3931 8.29174 14.3478C8.87479 13.7596 8.87062 12.8102 8.28246 12.2271C7.70612 11.6558 6.7799 11.6466 6.19235 12.2064C5.3129 13.0599 4.26147 13.716 3.10825 14.1309C2.72132 12.818 3.47199 11.44 4.78486 11.0531C4.78983 11.0516 4.7948 11.0502 4.79977 11.0487L6.58627 10.5239C8.12126 10.0123 9.57622 9.28631 10.908 8.3675L17.2342 14.5327C16.3694 16.8148 14.8573 18.7948 12.8834 20.23Z"
                                                        fill="#C8ACD6"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_77_215">
                                                        <rect width="24" height="24" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                        </div>
                                    </button>
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
                            {/*SAVE BUTTON*/}
                            <button
                                className="w-10 h-10 p-2 bg-[#17153B] hover:bg-[#7B68A1] active:bg-[#C8ACD6] transition-colors duration-100 ease-linear hover:scale-110 rounded-[5px] shadow-[4px_4px_8px_0px_rgba(0,0,0,0.50)] flex justify-start items-center gap-2.5">
                                <div className="w-6 h-6 relative overflow-hidden">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_31_79)">
                                            <path
                                                d="M7.74919 20.6626C7.06793 20.6629 6.41457 20.3921 5.93325 19.91L0.443061 14.4218C-0.147687 13.8309 -0.147687 12.873 0.443061 12.282C1.034 11.6913 1.99191 11.6913 2.58284 12.282L7.74919 17.4484L21.4172 3.7804C22.0081 3.18965 22.966 3.18965 23.5569 3.7804C24.1477 4.37134 24.1477 5.32925 23.5569 5.92018L9.56513 19.91C9.08381 20.3921 8.43045 20.6629 7.74919 20.6626Z"
                                                fill="#19B900"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_31_79">
                                                <rect width="24" height="24" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                            </button>
                            {/*EDIT BUTTON*/}
                            <button
                                className="w-10 h-10 p-2 bg-[#17153B] hover:bg-[#7B68A1] active:bg-[#C8ACD6] transition-colors duration-100 ease-linear hover:scale-110 rounded-[5px] shadow-[4px_4px_8px_0px_rgba(0,0,0,0.50)] flex justify-start items-center gap-2.5">
                                <div className="w-6 h-6 relative overflow-hidden">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_31_116)">
                                            <path
                                                d="M22.8242 1.17603C22.0598 0.445681 21.0433 0.0381165 19.9862 0.0381165C18.929 0.0381165 17.9125 0.445681 17.1482 1.17603L1.61117 16.713C1.09908 17.2223 0.693033 17.8281 0.416512 18.4952C0.139991 19.1624 -0.00151799 19.8778 0.000167468 20.6V22.5C0.000167468 22.8979 0.158203 23.2794 0.439507 23.5607C0.720812 23.842 1.10234 24 1.50017 24H3.40017C4.12272 24.002 4.83849 23.8606 5.50603 23.5841C6.17358 23.3075 6.77965 22.9014 7.28917 22.389L22.8242 6.85203C23.5758 6.09877 23.9979 5.07812 23.9979 4.01403C23.9979 2.94993 23.5758 1.92929 22.8242 1.17603ZM5.16617 20.268C4.69655 20.7346 4.06215 20.9976 3.40017 21H3.00017V20.6C3.00222 19.9374 3.2652 19.3022 3.73217 18.832L15.3002 7.26703L16.7332 8.70003L5.16617 20.268ZM20.7002 4.73103L18.8542 6.58003L17.4202 5.14603L19.2702 3.30003C19.4631 3.11561 19.7198 3.01269 19.9867 3.01269C20.2536 3.01269 20.5102 3.11561 20.7032 3.30003C20.8918 3.49059 20.9973 3.74804 20.9967 4.01615C20.9962 4.28426 20.8896 4.54126 20.7002 4.73103Z"
                                                fill="white"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_31_116">
                                                <rect width="24" height="24" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                            </button>
                            {/*CLEAR INPUTS BUTTON*/}
                            <button
                                className="w-10 h-10 p-2 bg-[#17153B] hover:bg-[#7B68A1] active:bg-[#C8ACD6] transition-colors duration-100 ease-linear hover:scale-110 rounded-[5px] shadow-[4px_4px_8px_0px_rgba(0,0,0,0.50)] flex justify-start items-center gap-2.5">
                                <div className="w-6 h-6 relative overflow-hidden">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_44_222)">
                                            <path
                                                d="M23.5603 1.1205C22.9748 0.535109 22.0255 0.535109 21.44 1.1205L16.6773 5.88314C14.7598 4.16013 11.9037 3.99771 9.80331 5.49226C8.56696 6.41248 7.19767 7.13893 5.74248 7.64663L3.95401 8.17049C1.03979 9.02417 -0.63059 12.0787 0.223132 14.9929C0.288036 15.2145 0.36681 15.4317 0.459033 15.6433C1.54697 18.3406 3.54168 20.5739 6.09942 21.9585C8.11606 22.9053 10.3254 23.3694 12.5526 23.3141H12.6156C13.3662 23.3144 14.0966 23.0709 14.697 22.6203C17.8462 20.3585 19.9991 16.9666 20.7052 13.154C21.0182 11.3574 20.4284 9.52165 19.1276 8.24346L18.8397 7.96355L23.5633 3.23893C24.1466 2.65273 24.1453 1.70501 23.5603 1.1205ZM12.8834 20.23C12.8011 20.2889 12.7016 20.3188 12.6005 20.315C11.5501 20.3147 10.5023 20.2078 9.4734 19.9961C10.8119 19.1588 11.9646 18.0561 12.8604 16.756L13.3543 16.0293C13.8338 15.354 13.675 14.4179 12.9997 13.9384C12.3245 13.4589 11.3884 13.6177 10.9089 14.293C10.8972 14.3093 10.8859 14.3259 10.875 14.3427L10.3811 15.0675C9.56249 16.2636 8.45393 17.2325 7.15905 17.8837L6.12135 18.4046C5.53868 17.9317 5.01688 17.3883 4.5678 16.7871C5.95462 16.2214 7.21908 15.3931 8.29174 14.3478C8.87479 13.7596 8.87062 12.8102 8.28246 12.2271C7.70612 11.6558 6.7799 11.6466 6.19235 12.2064C5.3129 13.0599 4.26147 13.716 3.10825 14.1309C2.72132 12.818 3.47199 11.44 4.78486 11.0531C4.78983 11.0516 4.7948 11.0502 4.79977 11.0487L6.58627 10.5239C8.12126 10.0123 9.57622 9.28631 10.908 8.3675L17.2342 14.5327C16.3694 16.8148 14.8573 18.7948 12.8834 20.23Z"
                                                fill="#820000"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_44_222">
                                                <rect width="24" height="24" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                            </button>
                            {/*CANCEL BUTTON*/}
                            <button
                                className="w-10 h-10 p-2 bg-[#17153B] hover:bg-[#7B68A1] active:bg-[#C8ACD6] transition-colors duration-100 ease-linear hover:scale-110 rounded-[5px] shadow-[4px_4px_8px_0px_rgba(0,0,0,0.50)] flex justify-start items-center gap-2.5">
                                <div className="w-6 h-6 relative overflow-hidden">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_31_96)">
                                            <path
                                                d="M14.1211 12.0002L23.5608 2.56161C24.1467 1.97565 24.1467 1.02563 23.5608 0.439714C22.9748 -0.146246 22.0248 -0.146246 21.4389 0.439714L12.0002 9.8793L2.56161 0.439714C1.97565 -0.146246 1.02563 -0.146246 0.439714 0.439714C-0.146199 1.02567 -0.146246 1.9757 0.439714 2.56161L9.8793 12.0002L0.439714 21.4389C-0.146246 22.0248 -0.146246 22.9748 0.439714 23.5608C1.02567 24.1467 1.9757 24.1467 2.56161 23.5608L12.0002 14.1211L21.4388 23.5608C22.0248 24.1467 22.9748 24.1467 23.5607 23.5608C24.1467 22.9748 24.1467 22.0248 23.5607 21.4389L14.1211 12.0002Z"
                                                fill="#820000"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_31_96">
                                                <rect width="24" height="24" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
