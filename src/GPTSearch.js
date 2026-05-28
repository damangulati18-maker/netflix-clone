import { Link } from "react-router";
import netflixlogo from "./images/netflix-logo.png";
import footer from "./images/corporateinfofooter.png";
import { useRef, useState } from "react";
import client from "./opanai";

const GPTSearch = () => {
    const searchtxt = useRef(null);
    const [movies, setMovies] = useState([]);

    const handlesearch = async () => {
        console.log("🚀 Search button clicked");

        const userInput = searchtxt.current.value;
        console.log("🧾 User input:", userInput);

        const query =
            "Act as a movie recommendation system and suggest movies for: " +
            userInput +
            ". Only give 5 movie names separated by commas.";

        console.log("📨 Final prompt sent to AI:", query);

        try {
            const result = await client.chat.completions.create({
                messages: [{ role: "user", content: query }],
                model: "gpt-5.2",
            });

            console.log("🤖 Raw AI response:", result);

            const text = result?.choices?.[0]?.message?.content;
            console.log("🎬 AI text output:", text);

            const movieList = text
                ? text.split(",").map((m) => m.trim())
                : [];

            console.log("📌 Parsed movie list:", movieList);

            setMovies(movieList);
        } catch (err) {
            console.error("❌ AI Search Error:", err);
        }
    };

    return (
        <div>
            {/* HEADER */}
            <div className="h-17 bg-black">
                <div className="flex">
                    <img className="w-29 pl-1.5 pt-4.5" src={netflixlogo} alt="logo" />
                    <p className="text-white font-thin text-3xl pt-3 pl-1">|</p>
                    <p className="text-white pl-3.5 pt-5 font-sans text-lg font-extralight">
                        AI Powered Search
                    </p>

                    <Link className="text-white border border-[#514c4c] ml-192 mt-4 rounded-sm mr-4 px-4 py-1.5 text-sm font-semibold">
                        Join Netflix
                    </Link>

                    <Link
                        to="/signin"
                        className="text-white bg-red-600 border border-red-600 mt-4 rounded-sm px-4 py-1.5 text-sm font-semibold"
                    >
                        Sign in
                    </Link>
                </div>
            </div>

            <div>
                <h1 className="text-4xl font-bold mt-35 text-center mb-6">
                    What’s your movie mood right now?
                </h1>

                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="flex items-center justify-center">
                        <input
                            ref={searchtxt}
                            className="text-black bg-gray-100/40 w-95 py-2 px-2 border-2 border-red-600 rounded-md"
                            placeholder="Search your favourite genre"
                        />

                        <button
                            type="submit"
                            className="text-white bg-red-600 hover:bg-red-700 font-bold rounded-md px-2.5 py-2 ml-2"
                            onClick={handlesearch}
                        >
                            Search →
                        </button>
                    </div>
                </form>

                {/* UI RESULTS */}
                {movies.length > 0 && (
                    <div className="flex justify-center mt-6">
                        <div className="bg-black/80 border border-red-600 rounded-md p-4 w-95">
                            <h2 className="text-white text-lg font-semibold mb-2">
                                AI Recommendations
                            </h2>

                            <ul className="text-white space-y-1">
                                {movies.map((movie, index) => (
                                    <li key={index}>🎬 {movie}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>

            {/* FOOTER */}
            <div className="mt-19 relative bg-black">
                <img src={footer} alt="footer" />
            </div>
        </div>
    );
};

export default GPTSearch;