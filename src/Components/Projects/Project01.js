import React from "react";
import BackHomeButton from "../BackHomeButton";

const Project01 = () => {
    return(
        <div className="mx-14 my-5 max-w-screen-xl bg-gray-200 p-5 rounded">
            
            <div className="mx-5">
                <h1 className="text-2xl mb-5">Embedded PowerBi App</h1>
                <div className="flex justify-center">
                    <img src={process.env.PUBLIC_URL + "/mbmsys.png"} alt="" className="rounded-lg w-3/4"></img>
                </div>
                <div className="text-start mx-5 my-10">
                    <p className="font-bold">Description:</p>
                    <ul className="list-disc list-inside">
                        <li>Project at <span className="font-bold">EXXETA AG</span></li>
                        <li>01/2022 - now</li>
                        <li>Web Application, C# ASP.NET 6.0</li>
                    </ul>
                    <p className=""><span className="font-bold">Client:</span> Publicly-traded Energy Company</p>
                    <div className="grid grid-cols-2 mt-5">
                        <div>
                            <p className="font-bold">Contribute:</p>
                            <ul className="list-disc list-inside">
                                <li>Analyze customer requirements and problems</li>
                                <li>Back-end Developer</li>
                                <li>Implementation microservices as back-end</li>
                                <li>Maintain, update, testing and refactor legacy code</li>
                                <li>Maintain, update, refactor database</li>
                                <li>Deploy on-premise server</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold">Technology:</p>
                            <ul className="list-disc list-inside">
                                <li>C# ASP.NET 6.0, REST API</li>
                                <li>Microsoft SQL Server, Entity Framework Core</li>
                                <li>Gateway with ocelot, SignalR</li>
                                <li>Azure AD, Application Proxy Connector</li>
                                <li>xUni, TDD, CleanCode</li>
                                <li>Agile: Scrum</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>

            <BackHomeButton/>
        </div>
        
    );
};

export default Project01;