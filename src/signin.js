import netflixlogo from "./images/netflix-logo.png"
import { useState,useRef } from "react";



const Signin=()=>{
    const validatedata=()=>{
    const value=emaildata.current.value;
    const isEmailValid=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
    if(!isEmailValid){setemailvalid(false)}
    else{setemailvalid(true)}
    }
    const [validemail,setemailvalid]=useState(true);
    const [show, setshow]=useState("");
    const [isOpen,setisOpen]=useState(false);
    const emaildata=useRef(null);
    const text="The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).";
    return(
        
        <div>
            <div className="h-23 bg-[#3f1313]" id="logo-back">
                <img src={netflixlogo} alt="logo" className="h-17 ml-34 pt-4.5"/>
            </div>
            <hr className="text-[#4c4040] h-px"></hr>
            <div className="relative">
                <img className="" src="https://occ.a.nflxso.net/dnm/api/v6/iMyKkw5SVrkCXbCfSBEb_Pjar5Y/AAAAQBTxE26zgLJoqZnmxUCfZtVJ2HbJUsVonZ_9Uo-pn68zarPK.png" alt="background"/>
                <div className="absolute w-full top-0 left-0">
                    <h1 className="text-white text-4xl font-semibold px-105 pt-9 font-sans">Enter your info to sign in</h1>
                    <p className="px-105 pt-1 text-lg text-gray-300/90 fonr-sans font-extralight">Or get started with a new account.</p>
                    <input ref={emaildata} type="text" placeholder="Email or mobile number" className={`text-[#ffffff] bg-[#171515] ml-105 mt-6 h-14 w-111 p-4 border border-gray-500 rounded-md shadow-2xl font-sans ${!validemail ? "border-red-500" : ""}`}></input>
                    {!validemail && (<p className="text-red-500 text-sm font-extralight ml-105 mt-2">⊗Please enter valid email address</p>)}
                    <button  className="text-white bg-red-600 ml-105 mt-3 h-12 w-111 p-2 border border-red-600 rounded-md shadow-2xl font-semibold text-lg font-sans hover:cursor-pointer hover:bg-red-700" onClick={validatedata}>Continue</button>
                    <p className="text-white font-light px-105 pt-10">Get Help<button type="button" className={`hover:cursor-pointer px-2 inline-block scale-x-150 text-lg -translate-y-1 font-extralight pb-2 transition-transform duration-150 ${isOpen ? "rotate-180" : "rotate-0"}`}onClick={() => setisOpen(!isOpen)}>⌄</button></p>
                    {isOpen && (<div><p className="px-105 text-sm text-white font-sans pb-2 underline hover:cursor-pointer">Forgot email or mobile number?</p><p className="px-105 text-sm underline text-white font-sans hover:cursor-pointer">Learn more about sign-in</p></div>)}
                    <p className="px-105 text-[#7c7b7b] pt-8 text-xs font-sans">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                    <button  className="px-105 text-white text-xs hover:cursor-pointer" onClick={()=>setshow(text)}>Learn more</button>
                    {show && (<p className="px-105 text-xs text-[#7c7b7b] pt-1">{show}</p>)}
                </div>
            </div>
        </div>
        
    )
}

export default Signin;