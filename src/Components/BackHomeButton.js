import React from "react";
import { Link } from "react-router-dom";

const BackHomeButton = () => {
    return (
        <div className="flex justify-center mt-10 cursor-pointer">
                <button className="bg-gray-200 text-gray-400 transform hover:scale-125 rounded-lg p-1"
                >
                    <Link to="/">Back to Home Page</Link>
                </button>
        </div>
    );
};

export default BackHomeButton;