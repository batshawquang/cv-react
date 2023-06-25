import React from "react";
import { Link } from "react-router-dom";

const BackHomeButton = () => {
    return (
        <div className="flex justify-center mt-5 cursor-pointer">
                <button className="shadow bg-gray-50 text-gray-400 transform hover:scale-125 rounded-lg py-1 px-5"
                >
                    <Link to="/cv-react">Back</Link>
                </button>
        </div>
    );
};

export default BackHomeButton;