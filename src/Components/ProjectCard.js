import React from "react";
import Card from "../UI/Card";
import { Link } from "react-router-dom";

const ProjectCard = (props) => {

    return (
        <div className={props.colspan + " relative"}>
            <Card className="">
                <Link to={props.linkTo} className="hover:blur-sm hover:brightness-75">
                    <img src={process.env.PUBLIC_URL + props.imgSrc} className="w-full h-48 object-cover"/>
                </Link>
                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl text-white font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] pointer-events-none">Embedded PowerBi App</h1>
            </Card>
        </div>
    );
};

export default ProjectCard;