import {Link} from "react-router";
import netflixlogo from "./images/netflix-logo.png"
import footer from "./images/termsofusefooter.png"
import { useState } from "react";

const LegalNotices=()=>{
    const [notice,setnotice]=useState(false);
    return(
        <div>
            <div className="h-17 bg-black">
                <div className="flex">
                    <img className="w-29 pl-1.5 pt-4.5" src={netflixlogo} alt="logo"/>
                    <p className="text-white font-thin text-3xl pt-3 pl-1">|</p>
                    <Link to="/helpcenter" className="text-white pl-3.5 pt-5 font-sans text-lg font-extralight hover:underline">Help Center</Link>
                    <Link className="text-white border border-[#514c4c] ml-206 mt-4 rounded-sm mr-4 px-4 py-1.5 text-sm font-semibold hover:border-white hover:cursor-pointer"><button className="hover:cursor-pointer" >Join Netflix</button></Link>
                    <Link to="/signin" className="text-white bg-red-600 border border-red-600 mt-4 rounded-sm px-4 py-1.5 text-sm font-semibold hover:cursor-pointer hover:bg-red-700"><button className="hover:cursor-pointer" >Sign in</button></Link>
                </div>
            </div>

            <div className="mt-10 flex justify-between">
                <div className="ml-4">
                    <span className="text-sm font-sans font-medium pr-1">{"← "}</span>
                    <Link className="text-sm font-sans font-normal hover:underline hover:text-[#514c4c]" to="/helpcenter">Back to Help Home</Link>
                </div>
                <div className="mr-4">
                    <button className="flex bg-[#e5e1e1] font-semibold pr-5 py-2 pl-5 hover:cursor-pointer hover:bg-[#a4a2a2] border-[#e5e1e1] rounded-sm"><img className="w-6 mr-3 h-5" src="https://cdn-icons-png.flaticon.com/128/446/446991.png" alt="printer"/>Print</button>
                </div>
            </div>

            <div>
                <h1 className="ml-4.5 mt-8 text-4xl font-bold font-sans">Legal Notices</h1>
                <p className="ml-4 mt-8 text-black/90 font-sans">The Netflix service, including all content provided on the Netflix service, is protected by copyright, trademark, trade secret or other intellectual property laws and treaties.</p>
                <h1 className="ml-4 mt-18.5 font-semibold text-black/80 text-lg font-sans">Copyrights</h1>
                <p className="ml-4 mt-2 text-black/90 font-sans">The copyrights in the content on our service are owned by many great producers and production companies, including Netflix. If you believe your or someone else’s copyrights are being infringed upon through the Netflix service, let us know by completing the Copyright Infringement Claims form <Link>(www.netflix.com/copyrights).</Link></p>
                <h1 className="ml-4 mt-18.5 font-semibold text-black/80 text-lg font-sans">Trademarks</h1>
                <p className="ml-4 mt-2 text-black/90 font-sans">Netflix, the N Logo and its sonic Tudum ident are trademarks of Netflix, Inc.</p>
                <p className="ml-4 mt-3 text-black/90 font-sans">Unless you have our permission, do not use the Netflix marks as your own or in any manner that implies sponsorship or endorsement by Netflix.</p>
                <p className="ml-4 mt-3 text-black/90 font-sans">A product branded with the Netflix name or logo is a reflection of Netflix. Unless you are one of our licensees, we don’t allow others to make, sell, or give away anything with our name or logo on it.</p>
                <h1 className="ml-4 mt-19 font-semibold text-black/80 text-lg font-sans">Patents</h1>
                <p className="ml-4 mt-2 text-black/90 font-sans">Netflix applications and services are covered by patents. For information on patents related to our services please visit <Link>www.netflix.com/patents.</Link></p>
                <h1 className="ml-4 mt-18 font-semibold text-black/80 text-lg font-sans">Third Party Notices</h1>
                <p className="ml-4 mt-2 text-black/90 font-sans">Netflix applications, software development kits (SDKs) and other Netflix products may contain software available under open source or free software licenses (“Open Source Software”). The Netflix Terms of Use do not alter any rights or obligations you may have under those Open Source Software licenses. Additional information about Open Source Software, including required acknowledgements, license terms and notices, can be found below.</p>
            </div>

            <div className="placeholder:text-black/70 font-semibold border border-[#f6eeee] rounded-sm w-310 px-2 text-sm py-2 ml-4 mt-3 " >
                <button onClick={()=>setnotice(!notice)} className="hover:cursor-pointer text-black/70 text-md font-bold inline-block scale-y-110 scale-x-110"><span className="mr-3 ml-1 font-light">▶</span>Notices</button>
                {notice && (<ul className=" font-light text-lg list-disc marker:text-black pl-15 pt-7.5">
                    <li className="text-red-600 pl-2.5 "><Link>Netflix Ready Device Platform</Link></li>
                    <li className="text-red-600 pt-6 pl-2.5"><Link>Android TV</Link></li>
                    <li className="text-red-600 pt-6 pl-2.5"><Link>Android App</Link></li>
                    <li className="text-red-600 pt-6 pl-2.5"><Link>Apple TV</Link></li>
                    <li className="text-red-600 pt-6 pl-2.5"><Link>iOS App</Link></li>
                    <li className="text-red-600 pt-6 pl-2.5"><Link>Games</Link></li>
                </ul>)}
            </div>

            <div>
                <p className="ml-4 font-medium mt-7">Last Updated: <span className="font-light"> February 9 , 2026</span></p>
            </div>

            <div className="mt-16 relative">
                <img  src={footer} alt="footer"/>
                <Link className="absolute text-[#bab3b3] top-0 left-0 ml-4 mt-29.5 text-sm" to="/termsofuse">Terms of Use</Link>                                <Link className="absolute text-[#bab3b3] top-0 left-0 ml-4 mt-39 text-sm" to="/privacy">Privacy</Link>
                <Link className="absolute text-[#bab3b3] top-0 left-0 ml-4 mt-48 text-sm" to="/">Cookie Preferences</Link>
                <Link className="absolute text-[#bab3b3] top-0 left-0 ml-4 mt-57.5 text-sm" to="/corporateinfo">Corporate information</Link>
             </div>

        </div>
    )
} 

export default LegalNotices;