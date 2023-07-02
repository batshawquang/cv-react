import React from "react";
import BackHomeButton from "../BackHomeButton";

const Project04 = () => {
    return(
        <div className="mx-14 my-5 max-w-screen-xl bg-gray-200 p-5 rounded">
            
            <div className="mx-5">
                <div className="flex justify-center">
                    <img src="https://i.imgur.com/ewZQQQd.png" alt="" className="rounded-lg w-3/4"></img>
                </div>
                <div className="text-start mx-5 my-10">
                    <p className=""><span className="font-bold">Aim:</span> Implement and evaluate two existing algowithms for real-time stereo matching.</p>
                    <p className="font-bold">Description:</p>
                    <ul className="list-disc list-inside">
                        <li>3D Reconstruction of real model from stereo image pairs in real-time</li>
                        <li>Using cameras to build a system to test with real object in lab environment</li>
                    </ul>
                    <p className="font-bold">Contribute:</p>
                    <ul className="list-disc list-inside">
                        <li>Participate in implementing one of the two algowithms to create point cloud information</li>
                    </ul>
                </div>
            </div>

            <div className="m-5 bg-gray-100 rounded-md">
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

            <div className="m-5 bg-gray-100 rounded-md">
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