import React from "react";

const About = () => {
    return(
        <div>
            <div id="jumbotron" class="bg-gray-400 py-10 text-white mx-14 my-5 rounded max-w-screen-xl">
                <div class="container mx-auto px-4 flex flex-col items-center md:flex-row justify-center">
                    <img src={process.env.PUBLIC_URL + "/potrait.jpg"} alt="" class="w-60 h-60 object-cover object-center mb-4 md:mr-4 rounded-none" />
                    <div class="text-center md:text-left mx-10">
                        <h3 class="text-4xl font-bold">QUANG DANG</h3>
                        <p class="text-lg">Fullstack Developer</p>
                        <p class="text-lg mb-4">Passionate about creating clean and efficient code</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 fixed bottom-0 left-0 right-0 m-10 rounded p-2">
                <div className="col-span-2 flex justify-stretch">
                    <h3 className="text-2xl pl-10">QUANG DANG.</h3>
                </div>
                
                <div className="">
                    <div className="flex items-center justify-stretch m-1">
                        <div className="mr-2">
                            <img src={process.env.PUBLIC_URL + "/LinkedInLogo.png"} alt="" className="w-6 h-6" />
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/quang-dang-39778a112/">Quang Dang</a>
                        </div>
                    </div>
                    <div className="flex items-center justify-stretch m-1">
                        <div className="mr-2">
                            <img src={process.env.PUBLIC_URL + "/github-mark.png"} alt="" className="w-6 h-6" />
                        </div>
                        <div>
                            <a href="https://github.com/Batshaw">Batshaw</a>
                        </div>
                    </div>
                </div>

                <div className="flex items-end justify-stretch m-1">
                    <div className="mr-2">
                        <img src={process.env.PUBLIC_URL + "/Gmail_Icon.svg"} alt="" className="w-6 h-6" />
                    </div>
                    <div>
                        <p>quang.nhu.dang@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default About;