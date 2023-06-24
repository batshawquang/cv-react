import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [barHidden, setBarHidden] = useState('hidden');

    const barClickHandler = () => {
        if (barHidden.trim().length === 0) {
            setBarHidden("hidden");
        } else {
            setBarHidden("");
        }
    };

    return(
        <nav className="flex items-center justify-between flex-wrap bg-gray-200 py-2.5 px-10">
            <div className="flex items-center flex-shrink-0 text-black mr-6">
                <span className="font-semibold text-xl tracking-tight">
                    <Link to="/">QUANG DANG.</Link>
                </span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-gray-600 border-gray-900 hover:text-white hover:border-white" onClick={barClickHandler}>
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className={"w-full lg:block flex-grow flex-col lg:items-center lg:w-auto " + barHidden}>
                <div className="text-sm lg:flex lg:flex-row-reverse">
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-white mr-4 text-sm px-4 py-2 border border-white rounded hover:border-transparent hover:text-black hover:bg-white">
                        Download CV
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-white mr-4 p-2">
                        Projects
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-white mr-4 p-2">
                        About
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;