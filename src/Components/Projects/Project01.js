import React from "react";
import BackHomeButton from "../BackHomeButton";

const Project01 = () => {
    return(
        <div>
            <div className="mx-14 my-5 max-w-screen-xl bg-gray-200 p-5 rounded">
                <div className="grid grid-cols-2 gap-5">
                    <div className="">
                        <img src="https://www.affirma.com/wp-content/uploads/2016/07/power-bi-embedded.jpg" alt=""></img>
                    </div>
                    <div className="flex flex-col text-start">
                        <p>öajhdflijhdfliajsöasljhdfliajsöasljhdfliajs</p>
                        <p>öajhdfliajs</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-5 mt-5">
                    <div className="flex flex-col text-start">
                        <p>öasljhdfliajsöasljhdfliajsöasljjhdfl</p>
                        <p>öaliajsöasljhdfliajsöasljhdfliajsöasljhdfliajsöasljhdfliajs</p>
                    </div>
                    <div className="">
                        <img src="https://www.affirma.com/wp-content/uploads/2016/07/power-bi-embedded.jpg" alt=""></img>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-5 mt-5">
                    <div className="">
                        <img src="https://www.affirma.com/wp-content/uploads/2016/07/power-bi-embedded.jpg" alt=""></img>
                    </div>
                    <div className="flex flex-col text-start">
                        <p>öashdfliajsöasljhdfliajsöasljhdfliajs</p>
                        <p>öaöasljhdfliajsöasljhdfliajs</p>
                    </div>
                </div>
            </div>
            <BackHomeButton/>
        </div>
        
        
    );
};

export default Project01;