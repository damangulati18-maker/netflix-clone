import {Link} from "react-router";
import netflixlogo from "./images/netflix-logo.png"
import footer from "./images/corporateinfofooter.png"
import { useRef } from "react";
import client from "./opanai";


const GPTSearch=()=>{

    const searchtxt=useRef(null); 

    const handlesearch=async()=>{
        //we will make an ai call to ope ai to get result acc to text in input box

        const query="act as a movie recommendation system and suggest some movies for the query" + searchtxt.current.value + ".Only give me name of 5 movies names with comma seperation.Like the exmple result given ahead :Gadar,Sholay,Don,Dhol,Golmaal";
        const result = await client.chat.completions.create({
            messages: [{ role: "user", content:query }],
            model: 'gpt-5.2',
        });   
        console.log(result); 
    }
    //from here we will get movie suggestions(result.choices) name from ai and we will take these names and serch in tmdb using search api of tmdb
    

    return(
        <div>
            <div className="h-17 bg-black">
                <div className="flex">
                    <img className="w-29 pl-1.5 pt-4.5" src={netflixlogo} alt="logo"/>
                    <p className="text-white font-thin text-3xl pt-3 pl-1">|</p>
                    <p className="text-white pl-3.5 pt-5 font-sans text-lg font-extralight hover:underline">AI Powered Search</p>
                    <Link className="text-white border border-[#514c4c] ml-192 mt-4 rounded-sm mr-4 px-4 py-1.5 text-sm font-semibold hover:border-white hover:cursor-pointer"><button className="hover:cursor-pointer" >Join Netflix</button></Link>
                    <Link to="/signin" className="text-white bg-red-600 border border-red-600 mt-4 rounded-sm px-4 py-1.5 text-sm font-semibold hover:cursor-pointer hover:bg-red-700"><button className="hover:cursor-pointer" >Sign in</button></Link>
                </div>
            </div>

            <div>
                <h1 className="text-4xl font-sans font-bold mt-35 text-center mb-6">What’s your movie mood right now?</h1>
                <form onSubmit={(e)=>e.preventDefault()}>
                    <div className="flex items-center justify-center">
                        <input ref={searchtxt} className="text-black bg-gray-100/40 w-95 py-2 px-2 border-2 border-red-600 rounded-md placeholder-black/80" placeholder="Search your favourite genre"/>
                        <button type="submit" className="text-white bg-red-600 hover:cursor-pointer hover:bg-red-700 text-md font-bold border border-red-600 rounded-md px-2.5 py-2 ml-2" onClick={handlesearch}>Search →</button>
                    </div>
                </form>

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

export default GPTSearch;