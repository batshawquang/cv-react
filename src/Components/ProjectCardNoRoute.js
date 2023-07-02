import React, { useState } from "react";
import Card from "../UI/Card";

const ProjectCardNoRoute = (props) => {
    const [textStyle, setTextStyle] = useState('hidden');

    const MouseEnterHandler = () => {
        setTextStyle('block');
    };
    const MouseLeaveHandler = () => {
        setTextStyle('hidden');
    };

    return (
        <div className={props.colspan + " relative"}>
            <Card className="">
                <img src={process.env.PUBLIC_URL + props.imgSrc} className="w-full h-48 object-cover hover:blur-sm hover:brightness-75" alt="" title={props.title}
                    onMouseEnter={MouseEnterHandler}
                    onMouseLeave={MouseLeaveHandler}
                />
                <h1 className={textStyle + " absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl text-white font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] pointer-events-none"}>{props.name}</h1>
            </Card>
        </div>
    );
};

export default ProjectCardNoRoute;