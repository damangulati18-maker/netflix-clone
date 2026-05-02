import netflixlogo from "./images/netflix-logo.png"
import { useDispatch } from "react-redux";
import { changeStatus } from "./StoreSlices";
import { useState } from "react";


const Data = [
  {
    title: "General Description",
    content:"This cookie tool will help you understand the use of cookies on the Netflix service, and how you can control the use of these cookies. Privacy settings in most browsers allow you to prevent your browser from accepting some or all cookies, notify you when it receives a new cookie, or disable cookies altogether. If your browser disables all cookies, then information will not be collected or stored via the cookies listed in this tool. This means that your use of the Netflix service may be impaired.Please note that when you use this cookie tool to opt out of certain cookies, your opt out preferences are recorded by placing a cookie on your device. Therefore, your browser must be configured to accept cookies in order for your preferences to take effect. Also, if you delete or clear your cookies, or change your web browser, you will need to reset your cookie preferences."
  },
  {
    title: "Essential Cookies",
    content:"These cookies are strictly necessary to provide the Netflix service. For example, we and our Service Providers may use these cookies to authenticate and identify users when they use our websites so we can provide our service to them. They also help us to administer and operate our business; for safety, security and fraud prevention; and to comply with law and enforce our Terms of Use. As these cookies are strictly necessary to provide our service, you cannot opt out of them."
  },
  {
    title: "First Party Performance and Functionality Cookies",
    content:"These cookies help us to customize and enhance your online experience with the Netflix service. For example, they help us to remember your preferences and prevent you from needing to re-enter information you previously provided (for example, during member sign up). We also use these cookies to collect information (such as popular pages, conversion rates, viewing patterns, click-through and other information) about our visitors' use of the Netflix service so that we can provide our service and also to research, analyze and improve our services. Deletion of these types of cookies may result in limited functionality of our service."
  },
  {
    title: "Third Party Performance and Functionality Cookies",
    content:"These cookies, set by third parties, help us to customize and enhance your online experience with Netflix. The cookies in this category are only set on Tudum (our official fandom site). We use these cookies to provide you experiences hosted by third parties, like displaying social media content. For further information on how these third parties use such cookies, please see the privacy information provided by the third party on their website. Deletion of these types of cookies may result in limited functionality."
  },
  {
    title:"Advertising Cookies",
    content:"These cookies collect information via the Netflix service in connection with “Advertisements” (as defined in our Terms of Use). “Advertising Companies” (as defined in our Privacy Statement) may also collect information via these cookies in connection with Advertisements. If you opt out of advertising cookies, you may still see Advertisements on the Netflix service but they will not be based on information collected from advertising cookies.Finally, Netflix supports the self-regulatory Principles for Online Behavioral Advertising programs of the Digital Advertising Alliance (DAA), the Digital Advertising Alliance of Canada (DAAC), and the European Interactive Digital Advertising Alliance (EDAA)."
  }
]


const CookiePref = ()=>{

    const dispatch=useDispatch();

    const [activeItem, setActiveItem] = useState(Data[0])
    
    return(
        <div className="absolute bottom-12 left-68 border border-white rounded-sm">
            <div className="w-183 h-154 bg-white">
                <div className="flex">
                    <img src={netflixlogo} className="w-25 ml-14 pt-5" alt="logo"/>
                    <h1 className="font-bold text-2xl pt-4 ml-11.5">Privacy Preference Center</h1>
                    <button className="text-4xl text-black/70 pl-51 hover:cursor-pointer" onClick={()=>dispatch(changeStatus(false))}>⨯</button>
                </div>

                <hr className="mt-7 text-black/10"></hr>

                <div className="flex">
                    <div className="w-57 h-107">
                        <ul>
                            {Data.map((item) => (
                            <li key={item.title} className="bg-[#f1f1f1]">
                            <button onClick={() => setActiveItem(item)}className={`w-full py-3.5 text-left pl-5  text-sm font-bold transition-all duration-200
                               ${ activeItem.title === item.title ? "bg-white  border border-black border-l-10 font-bold border-l-red-600": "hover: cursor-pointer"}`}>{item.title}
                            </button>
                            <hr className="text-black/10"></hr>
                           </li>
                           ))}
                       </ul>
                   </div>

                    <div className=" w-110 h-100">
                        <h1 className="font-bold text-sm pl-7.5 pt-5 font-sans">{activeItem.title}</h1>
                        <p className="pl-7.5 text-xs pt-6">{activeItem.content}</p>
                    </div>
                </div>

                <hr className="text-black/10"></hr>

                <div>
                    <button className="bg-red-600 text-white p-auto text-sm font-bold h-10 w-40 ml-4.5 mt-4.5 rounded-xs hover:cursor-pointer" onClick={()=>dispatch(changeStatus(false))}>Save Settings</button>
                </div>

                <div className="bg-gray-100 h-7 mt-6">
                    <img className="pt-1 ml-142" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/static/powered_by_logo.svg" alt="footerimg"/>
                </div>
            </div>
        </div>
    )
}

export default CookiePref;