import React from "react";
import BackHomeButton from "../BackHomeButton";

const Project04 = () => {
    return(
        <div className="mx-14 my-5 max-w-screen-xl bg-gray-200 p-5 rounded">
            
            <div className="mx-5">
                <h1 className="text-2xl mb-5">Geometric Light Source Calibration</h1>
                <div className="flex justify-center">
                    <img src="https://i.imgur.com/ewZQQQd.png" alt="" className="rounded-lg w-3/4"></img>
                </div>
                <div className="text-start mx-5 my-10">
                    <p className="font-bold">Bachelor Thesis</p>
                    <p className="font-bold">Description:</p>
                    <ul className="list-disc list-inside">
                        <li>Research, implement and evaluate a framework for detecting light source direction in an image</li>
                        <li>Setup a laboratory environment for research purposes</li>
                        <li>Python, OpenCV</li>
                        <li><a href="https://docs.google.com/presentation/d/1n_ydb3uXxVhpiJ2HfdcGz2GJkxHntUv2EMI0U7XSi7o/edit?usp=sharing"
                            className="text-gray-400 hover:text-white"
                            target="_blank" rel="noreferrer"
                        >Final Presentation</a></li>
                    </ul>
                </div>
            </div>

            <div className="m-5 bg-gray-100 rounded-md pb-5">
                <div className="flex justify-around my-5">
                    <div className="m-1">
                        <img src="https://i.imgur.com/qLAsVZi.png" alt="" className="rounded w-max"></img>
                    </div>
                    <div className="m-1">
                        <img src="https://i.imgur.com/ebxINnM.png" alt="" className="rounded w-max"></img>
                    </div>
                </div>
                <figcaption className="text-center">Lab Setups</figcaption>
            </div>

            <div className="m-5 bg-gray-100 rounded-md pb-5">
                <div className="flex justify-around my-5">
                    <div className="m-1">
                        <img src="https://i.imgur.com/61WeeOl.png" alt="" className="rounded w-max"></img>
                    </div>
                    <div className="m-1">
                        <img src="https://i.imgur.com/D0NZ18P.png" alt="" className="rounded w-max"></img>
                    </div>
                </div>
                <figcaption className="text-center">Final Results</figcaption>
            </div>

            <BackHomeButton/>
        </div>
        
    );
};

export default Project04;