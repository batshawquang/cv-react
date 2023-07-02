import React from "react";
import BackHomeButton from "../BackHomeButton";

const Project03 = () => {
    return(
        <div className="mx-14 my-5 max-w-screen-xl bg-gray-200 p-5 rounded">
            <div className="mx-5">
                <h1 className="text-2xl mb-5">Real-time Stereo Matching</h1>
                <img src="https://i.imgur.com/d3tFKqj.png" alt="" className="rounded w-full"></img>
                <div className="text-start mx-5 my-10">
                    <p className=""><span className="font-bold">Aim:</span> Implement and evaluate two existing algowithms for real-time stereo matching.</p>
                    <p className="font-bold">Description:</p>
                    <ul className="list-disc list-inside">
                        <li>3D Reconstruction of real model from stereo image pairs in real-time</li>
                        <li>Using cameras to build a system to test with real object in lab environment</li>
                    </ul>
                    <p className="font-bold">Contribute:</p>
                    <ul className="list-disc list-inside">
                        <li>Contribute ideas to build the system pipeline</li>
                        <li>Participate in implementing one of the two algowithms to create point cloud information</li>
                        <li>Visualize point cloud in 3D</li>
                        <li>Showing the project to visitors in summaery2019</li>
                    </ul>
                </div>
            </div>
                
            <div className="m-5 p-5 bg-gray-100 rounded-md">
                <div className="grid grid-cols-2 my-5">
                    <div className="flex justify-center">
                        <img src="https://i.imgur.com/wn3jroF.png" alt="" className="rounded w-56"></img>
                    </div>
                    <div className="flex justify-center">
                        <img src="https://i.imgur.com/hk9nLpz.png" alt="" className="rounded w-56"></img>
                    </div>
                </div>
                <figcaption className="text-center">Stereo images</figcaption>
            </div>
            

            <div className="m-5 p-5 bg-gray-100 rounded-md">
                <div className="flex justify-center">
                    <img src="https://i.imgur.com/giH6UYc.png" alt=""></img>
                </div>
                <figcaption>3D Point Cloud</figcaption>
            </div>

            <BackHomeButton/>
        </div>
        
    );
};

export default Project03;