import netflixlogo from "./images/netflix-logo.png"
import {Link} from "react-router";
import footer from "./images/corporateinfofooter.png"

const WaysToWatch=()=>{
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

            <div className="ml-4 mt-8">
                <span className="text-sm font-sans font-medium pr-1">{"← "}</span>
                <Link className="text-sm font-sans font-normal hover:underline hover:text-[#514c4c]" to="/helpcenter">Back to Help Home</Link>
            </div>

            <div>
                <h1 className="text-4xl font-extrabold scale-x-110 ml-19 mt-9 scale-y-110 font-sans">Netflix Supported Devices | Watch Netflix on
                    <br></br>
                    your TV, phone, or computer
                </h1>
            </div>

            <div>
                <p className="ml-4 mt-11">You can watch Netflix on any supported smart TV, phone, tablet, streaming player, or game console that connects to<br></br> the internet and offers the Netflix app, or at <Link className="text-red-600" to="/">netflix.com </Link>using a computer.</p>
            </div>

            <div className="absolute top-62 right-1">
                 <div className=" mr-4 h-80 w-79 border border-[#d0d0d0] rounded-sm ml-14 mt-15 border-t-6 border-t-red-600">
                    <h1 className="font-semibold text-lg ml-5 mt-4">Related Articles</h1>
                    <div className="flex">
                        <img className="w-6 ml-5.5 mt-4" src="https://cdn-icons-png.flaticon.com/128/7688/7688466.png" alt="list"/><Link className="underline text-black/80 mt-4 ml-3">Billing and Payments</Link>
                    </div>
                    <div className="flex">
                        <img className="w-6 ml-5.5 mt-6 h-6" src="https://cdn-icons-png.flaticon.com/128/7688/7688466.png" alt="list"/><Link className="underline text-black/80 mt-4 ml-3">How to download titles to watch offline</Link>
                    </div>                        <div className="flex">
                      <img className="w-6 ml-5.5 mt-6 h-6" src="https://cdn-icons-png.flaticon.com/128/7688/7688466.png" alt="list"/><Link className="underline text-black/80 mt-4 ml-3 mr-2">How to edit,create or delete profiles</Link>
                    </div>
                    <div className="flex">
                        <img className="w-6 ml-5.5 mt-4" src="https://cdn-icons-png.flaticon.com/128/7688/7688466.png" alt="list"/><Link className="underline text-black/80 mt-4 ml-3">Netflix isn't working</Link>
                    </div>
                    <div className="flex">
                        <img className="w-6 ml-5.5 mt-4" src="https://cdn-icons-png.flaticon.com/128/7688/7688466.png" alt="list"/><Link className="underline text-black/80 mt-4 ml-3">How to search and browse Netflix</Link>
                    </div>
                </div>   
            </div>

            <div>
                <h1 className="text-2xl font-semibold ml-4 mt-11">TVs and TV streaming devices</h1>
                <p className="ml-4 mt-2 text-black/80">Many TVs, TV streaming devices, and media players come with the Netflix app included. To get started, use the links<br></br> below to learn how to get Netflix on your device.</p>
                <ul className="text-red-600 hover:cursor-pointer ml-10 mt-5 list-disc marker:text-black">
                    <li className="pb-3">Amazon Fire T/V Stick</li>
                    <li className="pb-3">Apple TV</li>
                    <li className="pb-3">Chromecast</li>
                    <li className="pb-3">Hisense</li>
                    <li className="pb-3">LG</li>
                    <li className="pb-3">Panasonic</li>
                    <li className="pb-3">Philips</li>
                    <li className="pb-3">Roku T/V Stick</li>
                    <li className="pb-3">Samsung</li>
                    <li className="pb-3">Sharp</li>
                    <li className="pb-3">Sony</li>
                    <li className="pb-3">TCL</li>
                    <li className="pb-3">Vestel</li>
                    <li className="pb-3">Vizio</li>
                </ul>
                <span className="text-black/20 font-extrabold text-2xl ml-3.5 mr-3">|</span><span className="text-sm text-black/90"><span className="text-sm font-bold pr-1">NOTE:</span>Netflix may no longer be available on some TVs and TV streaming devices made before 2015.</span>
                <p className="text-black/80 ml-4 mt-5">Not seeing your device?<span className="text-red-600"> Search for your device's name or manufacturer</span> in our Help Center for more information. To<br></br> learn more about device support,<span className="text-red-600"> contact us</span> or the company that made your device.</p>
                <h1 className="text-2xl font-semibold ml-4 mt-10">Mobile phones and tablets</h1>
                <p className="ml-4 mt-2 text-black/80">You can watch Netflix on any supported mobile phone or tablet. To get started, use the links below to see specific <br></br>requirements and learn how to get the Netflix app on your device.</p>
                <ul className="text-red-600 hover:cursor-pointer ml-10 mt-5 list-disc marker:text-black">
                    <li className="pb-3">Android phone or tablet</li>
                    <li className="pb-3">iPhone or iPad</li>
                    <li className="pb-3">Amazon Fire tablet</li>
                    <li className="pb-3">Windows tablet</li>
                </ul>
                <h1 className="text-2xl font-semibold ml-4 mt-10">Computers</h1>
                <p className="ml-4 mt-2 text-black/80">You can watch Netflix on Mac, Windows, or Chromebook computers. To get started, go to netflix.com using a<br></br> supported web browser, or get the Netflix app for Windows.</p>
                <span className="text-black/20 font-extrabold text-2xl ml-3.5 mr-3 mt-5">|</span><span className="text-sm text-black/90"><span className="text-sm font-bold pr-1">NOTE:</span>For issues getting started, make sure your computer and browser meet<span className="text-red-600">these system requirements.</span> </span>
                <h1 className="text-2xl font-semibold ml-4 mt-10">Cable boxes</h1>
                <p className="ml-4 mt-2 text-black/80">Many internet, cable, and pay TV providers include the Netflix app on their devices. To get started, search the name<br></br> of your provider in our Help Center to check if Netflix is available on your device. To learn more about device support,<br></br> contact us or the company that provided your device.</p>
                <h1 className="text-2xl font-semibold ml-4 mt-10">Video game consoles and AR/VR devices</h1>
                <p className="ml-4 mt-2 text-black/80">You can watch Netflix on these popular video game consoles and AR/VR devices. To get started, use the links below<br></br> to learn how to get Netflix on your game console.</p>
                <ul className="text-red-600 hover:cursor-pointer ml-10 mt-5 list-disc marker:text-black">
                    <li className="pb-3">Sony PlayStation consoles</li>
                    <li className="pb-3">Microsoft Xbox consoles</li>
                    <li className="pb-3">Apple Vision Pro</li>
                    <li className="pb-3">Meta Quest headsets</li>
                </ul>
            </div>

            <div>
                <hr className="mx-4 font-extralight text-xs text-[#d0d0d0] mt-3"></hr>
                <div className="mt-6 ml-4 flex">
                    <h1 className="font-semibold text-black/80">Was this article helpful?</h1>
                    <button className="underline ml-3">Yes</button>
                    <button className="underline ml-3">No</button>
                </div>
            </div>

             <div className="mt-19 relative bg-black">
                <img src={footer} alt="footer"/>
                <Link to="/contactus" className="absolute top-0 left-0"><button className="bg-white text-black font-semibold px-9.5 py-2 mt-6 ml-51.5 rounded-sm hover:cursor-pointer hover:bg-[#a49c9c]">Contact Us</button></Link><button></button>
                <Link className="absolute text-[#bab3b3] top-0 left-0 ml-4 mt-52.5 text-sm" to="/termsofuse">Terms of Use</Link>
                <Link className="absolute text-[#bab3b3] top-0 left-0 ml-4 mt-61.5 text-sm" to="/privacy">Privacy</Link>
                <Link className="absolute text-[#bab3b3] top-0 left-0 ml-4 mt-71 text-sm" to="/">Cookie Preferences</Link>
                <Link className="absolute text-[#bab3b3] top-0 left-0 ml-4 mt-80 text-sm" to="/corporateinfo">Corporate information</Link>
            </div>
        </div>
    )
}

export default WaysToWatch;