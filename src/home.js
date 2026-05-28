import netflixlogo from "./images/netflix-logo.png"
import centerline from "./images/centerline.png"
import { useEffect, useState } from "react"
import { Link} from "react-router";
import { options } from "./api";
import { addTendingNowMovies,changeCurrlang,changeStatus } from "./StoreSlices";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CookiePref from "./cookiepref";
import language from "./language";

const faqdata=[
    {
        title:"What is Netflix?",
        content:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
    },
    {
        title:"How much does Netflix cost?",
        content:"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649/month."
    },
    {
        title:"Where can I watch?",
        content:"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
    },
    {
        title:"How do I cancel?",
        content:"Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
        title:"What can I watch on Netflix",
        content:"Netflix has an extensive library of feature films, documentaries, shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
        title:"Is Netflix good for kids",
        content:"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    }
]

const Home=()=>{
    
    const [faqsel,setfaqsel]=useState("");
    const movielist=useSelector((store)=>store.movies?.TrendingNow);//movie list contain 20 movies but we need only 10
    const trendiMovies = movielist?.slice(0, 10);

    const dispatch=useDispatch();

    const cookievalue=useSelector((store)=>store.cookie?.isCookie);
    const lang = useSelector((store) => store.currlanguage.selectedLang);

    const TrendingNowMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/trending/movie/day?", options);
        const json = await data.json();
        dispatch(addTendingNowMovies(json.results));
    };

    useEffect(()=>{
        TrendingNowMovies();
    },[])

   
    const bgurl=()=>{
        if(lang==="en")
        {
            return  "https://assets.nflxext.com/ffe/siteui/vlv3/5efeb1fd-55d2-4799-8d38-e59e15858b9c/web/IN-en-20260427-TRIFECTA-perspective_0933b420-0cb6-4e67-8e9d-3224dc64b517_large.jpg"
        }
        else{
            return "https://assets.nflxext.com/ffe/siteui/vlv3/5efeb1fd-55d2-4799-8d38-e59e15858b9c/web/IN-hi-20260427-TRIFECTA-perspective_1ab0cc9d-9cba-4996-9c56-0a16b809b0a6_large.jpg"
        }
    }
    //here we are changing the initail value of langslice in slicestore with the value selected on select tag i.e e.target.value is being sent to redux store
    const changelang=(e)=>{
        const userlang=(e.target.value);
        dispatch(changeCurrlang(userlang));
    }
   
    return(
        <div>
            <div className="relative">
                <img className="w-full h-screen object-cover" src={bgurl()} alt="background"/>
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="absolute left-0 top-0">
                    <div className="flex">
                        <img src={netflixlogo} alt="logo" className="bg-linear-to-b from-black w-79 pt-4 pl-33"/>
                        <select value={lang} onChange={changelang} className="ml-150 border border-gray-500 rounded-sm h-8 mt-6.5 w-31 bg-[#171515] text-white text-md font-semiobold pl-2">
                            <option value="en">本A English</option>
                            <option value="hindi">本A  हिंदी</option>
                        </select>
                        <Link to="/signin" className=" text-white bg-red-600 ml-2 h-8 mt-6.5 w-20 rounded-md text-sm font-bold border border-red-600 text-center pt-1.25 hover:cursor-pointer">{language[lang]?.signin}</Link>
                        <Link to="/gptsearch" className="text-white hover:cursor-pointer bg-red-600 h-8 w-27 mt-6.5 border border-red-600 rounded-md text-sm font bold text-center font-bold pt-1.25 ml-2">{language[lang]?.gpt}</Link>
                    </div>


                    <div className="flex flex-col">
                        <h1 className=" absolute  text-6xl w-134 font-sans font-extrabold top-45 left-96 text-white text-center">{language[lang]?.mainhead}</h1>
                        <p className="text-white absolute text-lg mt-5 text-center top-76 left-125 font-bold">{language[lang]?.price}</p>
                        <p className="absolute text-white top-97 left-96 font-sans font-medium">{language[lang]?.enteremail}</p>
                        <input type="text" placeholder={language[lang]?.placeholder} className="text-[#fffefe] absolute left-86 top-108 border border-[#6e6b6b] w-94 h-14 p-4 text-md font-medium bg-[#171515] rounded-md"/>
                        <Link className="absolute top-108 left-183 text-white  bg-red-600 border border-red-600 rounded-md h-14 w-55 font-bold text-2xl hover:cursor-pointer py-2 pl-7 hover:bg-red-700">{language[lang]?.getstarted}<span className="pl-3 pb-1 font-extralight inline-block scale-y-150">{'>'}</span></Link>
                    </div>


                    <div className="mt-150 w-100%">
                        <img src={centerline} alt="centerline"/>
                    </div>

                    <div id="trending movies" className="bg-black pt-2 pb-16.5">{/*to get api for movies data we use website TMDB(the movies database) so for that we will add and link our app to TMDB and get data*/}
                        <div className="flex  w-230 mx-auto overflow-x-auto">
                            {trendiMovies.map((i,index)=>(
                                <div className="pr-5.5 shrink-0 pl-4 relative"  key={i.id}>
                                    <img className="h-63 w-44 border rounded-xl hover:cursor-pointer"  src={"https://image.tmdb.org/t/p/w500/"+i.poster_path} alt={i.title}/>
                                    <div className="text-black absolute bottom-10 font-extrabold left-0 text-7xl  scale-y-150 scale-x-150 hover:cursor-pointer" style={{ WebkitTextStroke: "1px white" }}>{index+1}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div id="boxes and faqs" className="bg-black">
                        <div>
                            <h1 className="text-white font-bold text-2xl ml-36.5 mb-3.5">{language[lang]?.morereasons}</h1>
                        </div>

                        <div className="flex">
                            <div className="ml-37.5 bg-[#1b1a30fd] h-84 w-57 border rounded-2xl relative">
                                <h1 className="text-white px-3.5 py-5 font-bold text-2xl">{language[lang]?.box1head}</h1>
                                <p className="text-gray-400  px-3.5 font-medium">{language[lang]?.box1cont}</p>
                                <img className="w-17 absolute left-36 top-64" src="https://cdn-icons-png.flaticon.com/128/4280/4280052.png" alt="tvicon"/>
                            </div>
                            <div className="ml-4.5 bg-[#1b1a30fd] h-84 w-57 border rounded-2xl relative">
                                <h1 className="text-white px-3.5 py-5 font-bold text-2xl">{language[lang]?.box2head}</h1>
                                <p className="text-gray-400  px-3.5 font-medium">{language[lang]?.box2cont}</p>
                                <img className="w-15 absolute left-38 top-65" src="https://cdn-icons-png.flaticon.com/128/7915/7915184.png" alt="tvicon"/>
                            </div>
                            <div className="ml-4.5 bg-[#1b1a30fd] h-84 w-57 border rounded-2xl relative">
                                <h1 className="text-white px-3.5 py-5 font-bold text-2xl">{language[lang]?.box3head}</h1>
                                <p className="text-gray-400  px-3.5 font-medium">{language[lang]?.box3cont}</p>
                                <img className="w-15 absolute left-38 top-65" src="https://cdn-icons-png.flaticon.com/128/4811/4811596.png" alt="tvicon"/>
                            </div>
                            <div className="ml-4.5 bg-[#1b1a30fd] h-84 w-57 border rounded-2xl relative">
                                <h1 className="text-white px-3.5 py-5 font-bold text-2xl">{language[lang]?.box4head}</h1>
                                <p className="text-gray-400  px-3.5 font-medium">{language[lang]?.box4cont}</p>
                                <img className="w-15 absolute left-38 top-66" src="https://cdn-icons-png.flaticon.com/128/15208/15208217.png" alt="tvicon"/>
                            </div>
                        </div>

                        <div id="faqs">
                            <h1 className="text-white font-bold text-2xl ml-36.5 mt-15 mb-4.5">{language[lang]?.faqhead}</h1>
                            {faqdata.map((i)=>(
                                <div key={i.title} className="">
                                    <div className="bg-[#353432d8] flex justify-between ml-36.5 h-21 mr-40 mb-2 hover:cursor-pointer hover:bg-[#4b4a49d8] transition delay-75">
                                        <h1 className="text-white font-medium text-2xl pl-6.5 pt-6.5">{i.title}</h1>
                                        <button onClick={()=>setfaqsel(faqsel === i.title ? "" : i.title)} className=" hover:cursor-pointer text-white font-thin text-6xl pr-6 pt-2">{faqsel === i.title ? "x" : "+"}</button> 
                                    </div>
                                    {faqsel === i.title && (<div className="text-white bg-[#353432d8] font-medium text-2xl ml-36.5 mr-40 mb-2 px-6 pt-7 pb-6">{i.content}</div>)}
                                </div>
                            ))}
                        </div>

                        <div>
                            <h1 className="text-white text-center font-medium mt-17 mb-4">{language[lang]?.readytowatch}</h1>
                            <div className="flex">
                                <input type="text" placeholder={language[lang]?.placeholder} className=" ml-62 mr-2 text-[#fffefe] border border-[#6e6b6b] w-141 h-14 p-4 text-md font-medium bg-[#100e0e] rounded-md"/>
                                <button className=" hover:bg-red-700 h-14 text-white  bg-red-600 border border-red-600 rounded-md pl-5  font-bold text-2xl hover:cursor-pointer"><Link to=" ">{language[lang]?.getstarted}<span className="pl-3 pb-1 pr-7 font-extralight inline-block scale-y-150">{'>'}</span></Link></button>
                            </div>
                        </div>

                        <div className="text-[#bab3b3] ml-37 mb-10 mt-22">
                            <p>{language[lang]?.questions} <span className="underline hover:cursor-pointer"> 000-800-919-1743</span></p>
                        </div>

                        <div id="footer" className="flex ml-37">
                            <div className="flex flex-col">
                                <ul className="underline text-[#bab3b3] text-sm">
                                    <Link><li className="pb-3">FAQ</li></Link>
                                    <Link><li className="pb-3">{language[lang]?.investor}</li></Link>
                                    <Link><li className="pb-3">{language[lang]?.privacy}</li></Link>
                                    <Link><li>{language[lang]?.speed}</li></Link>
                                </ul>
                            </div>

                            <div className="flex flex-col pl-34">
                                <ul className="underline text-[#bab3b3] text-sm">
                                    <Link to="/helpcenter"><li className="pb-3">{language[lang]?.help}</li></Link>
                                    <Link><li className="pb-3">{language[lang]?.job}</li></Link>
                                    <li onClick={()=>dispatch(changeStatus(true))} className="pb-3 hover:cursor-pointer">{language[lang]?.cookie}</li>
                                    <Link to="/legalnotices"><li>{language[lang]?.legal}</li></Link>
                                </ul>
                            </div>
                            
                            {cookievalue && <CookiePref/>}

                            <div className="flex flex-col pl-34">
                                <ul className="underline text-[#bab3b3] text-sm">
                                    <Link to="/signin"><li className="pb-3">{language[lang]?.account}</li></Link>
                                    <Link to="/waystowatch"><li className="pb-3">{language[lang]?.ways}</li></Link>
                                    <Link to="/corporateinfo"><li className="pb-3">{language[lang]?.corporate}</li></Link>
                                    <Link><li>{language[lang]?.only}</li></Link>
                                </ul>
                            </div>

                            <div className="flex flex-col pl-34">
                                <ul className="underline text-[#bab3b3] text-sm">
                                    <Link><li className="pb-3">{language[lang]?.media}</li></Link>
                                    <Link to="/termsofuse"><li className="pb-3">{language[lang]?.terms}</li></Link>
                                    <Link><li>{language[lang]?.contact}</li></Link>
                                </ul>
                            </div>
                        </div>

                        <div className="ml-37">
                           <select value={lang} onChange={changelang} className="mt-15 border border-gray-500 rounded-sm h-8  w-31 bg-[#171515] text-white text-md font-semiobold pl-2">
                               <option value="en">本A English</option>
                               <option value="hindi">本A  हिंदी</option>
                           </select>
                           <p className="text-[#bab3b3] text-sm mt-10">{language[lang]?.india}</p>
                           <div className="flex">
                                <p className="text-[#8d8787] text-xs mt-10">{language[lang]?.lastline}</p>
                                <p className="text-[#6d6767] text-xs mt-9.5 ml-1 pb-35"><Link className="text-blue-400 text-sm underline">{language[lang]?.learn}</Link></p>
                           </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;