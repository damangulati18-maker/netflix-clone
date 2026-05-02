import {Link} from "react-router";
import netflixlogo from "./images/netflix-logo.png"
import footer from "./images/corporateinfofooter.png"

const CorporateInfo=()=>{
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

            <div>
                <div className="ml-4 mt-8.5">
                    <span className="text-sm font-sans font-medium pr-1">{"← "}</span>
                    <Link className="text-sm font-sans font-normal hover:underline hover:text-[#514c4c]" to="/helpcenter">Back to Help Home</Link>
                </div>
            </div>

            <div className="mt-7">
                <hr className="mx-4 font-extralight text-xs text-[#d0d0d0] mb-7"></hr>
                <div className="flex ">
                    <h1 className="ml-4 font-semibold mt-1">Currently viewing information for:</h1>
                    <input className="border border-[#bdbdbd] ml-3.5 font-semibold text-black px-2 py-1 visible rounded-sm" placeholder="India"></input>
                </div>
                <hr className="mx-4 font-extralight text-xs text-[#d0d0d0] mt-7"></hr>
            </div>

            <div>
                <h1 className="ml-4 mt-9.5 text-4xl font-bold">Corporate Information</h1>
                <div className="flex">
                    <div className="">
                        <p className="mt-9.5 ml-4">We're here to help if you need it -- for the fastest answer to your questions, we encourage you to reach out to our customer service. Visit the <Link to="/helpcenter" className="text-red-600 hover:underline">Help Center</Link> for more info or <Link to="/contactus" className="text-red-600 hover:underline">contact us</Link></p>
                        <p className="mt-5 ml-4">If you have a request for a TV show or movie, see<Link className="text-red-600 hover:underline"> Request TV shows or movies.</Link></p>
                        <h1 className="mt-9.5 ml-4 font-semibold text-black/80 mb-4.5">Contractual partner and point of contact for Netflix members:</h1>
                        <p className="ml-4 font-sans">Netflix Entertainment Services India LLP<br></br>Level 1 1, Godrej BKC, Plot C-68<br></br>G Block, BKC- Bandra (East)<br></br>Mumbai 400051, India</p>
                        <h1 className="mt-17.5 ml-4 font-semibold text-black/80 mb-4.5">Data Controller:</h1>
                        <p className="ml-4 font-sans">Netflix Entertainment Services India LLP<br></br>Level 11, Godrej BKC, Plot C-68<br></br>G Block, BKC- Bandra (East)<br></br>Mumbai 400051, India</p>
                    </div>
                    <div className=" mr-4 h-80 w-120 border border-[#d0d0d0] rounded-sm ml-14 mt-15 border-t-6 border-t-red-600">
                        <h1 className="font-semibold text-lg ml-5 mt-4">Related Articles</h1>
                        <div className="flex">
                            <img className="w-6 ml-5.5 mt-4" src="https://cdn-icons-png.flaticon.com/128/7688/7688466.png" alt="list"/><Link className="underline text-black/80 mt-4 ml-3">Billing and Payments</Link>
                        </div>
                        <div className="flex">
                            <img className="w-6 ml-5.5 mt-6 h-6" src="https://cdn-icons-png.flaticon.com/128/7688/7688466.png" alt="list"/><Link className="underline text-black/80 mt-4 ml-3">How to download titles to watch offline</Link>
                        </div>
                        <div className="flex">
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
            </div>

            <div>
                <hr className="mx-4 font-extralight text-xs text-[#d0d0d0] mt-19.5"></hr>
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

export default CorporateInfo;