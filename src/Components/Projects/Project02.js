import React from "react";
import BackHomeButton from "../BackHomeButton";

const Project02 = () => {
    return(
        <div className="mx-14 my-5 max-w-screen-xl bg-gray-200 p-5 rounded">
            
            <div className="mx-5">
                <h1 className="text-2xl mb-5">Microsoft WPF</h1>
                <div className="flex justify-center">
                    <img src={process.env.PUBLIC_URL + "/enbwsys.png"} alt="" className="rounded-lg w-3/4"></img>
                </div>
                <div className="text-start mx-5 my-10">
                    <p className="font-bold">Description:</p>
                    <ul className="list-disc list-inside">
                        <li>Project at <span className="font-bold">EXXETA AG</span></li>
                        <li>04/2023 - now</li>
                        <li>WPF Client, C# .NET Core 5.0</li>
                    </ul>
                    <p className=""><span className="font-bold">Client:</span> Publicly-traded Energy Company</p>
                    <p className="font-bold">Contribute:</p>
                    <ul className="list-disc list-inside">
                        <li>Maintenance</li>
                        <li>Replace Keycloak with Azure AD</li>
                        <li>Using Windows Login User for Application Proxy Connector</li>
                    </ul>
                </div>
            </div>

            <BackHomeButton/>
        </div>
        
    );
};

export default Project02;