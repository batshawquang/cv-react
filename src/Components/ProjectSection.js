import { Link } from "react-router-dom";
import Card from "../UI/Card";

const ProjectSection = () => {
    return (
        <div className="mx-14 my-5">
            <div className="grid grid-cols-3 gap-4">
                <Card className="col-span-2">
                    <Link to="/project01">
                        <img src={process.env.PUBLIC_URL + "/ProjectImgs/pro01.jpg"} className="w-full h-48 object-cover"/>
                    </Link>
                </Card>
                
                <Card className="">
                    <Link to="/project02">
                        <img src={process.env.PUBLIC_URL + "/ProjectImgs/pro02.jpg"} className="w-full h-48 object-cover"/>
                    </Link>
                </Card>
                <Card className="">
                    <Link to="/project03">
                        <img src={process.env.PUBLIC_URL + "/ProjectImgs/pro03.jpg"} className="w-full h-48 object-cover"/>
                    </Link>
                </Card>
                <Card className="col-span-2">
                    <Link to="/project04">
                        <img src={process.env.PUBLIC_URL + "/ProjectImgs/pro04.jpg"} className="w-full h-48 object-cover"/>
                    </Link>
                </Card>
                <Card className="">
                    <Link to="/project05">
                        <img src={process.env.PUBLIC_URL + "/ProjectImgs/pro05.jpg"} className="w-full h-48 object-cover"/>
                    </Link>
                </Card>
                <Card className="">
                    <Link to="/project06">
                        <img src={process.env.PUBLIC_URL + "/ProjectImgs/pro06.jpg"} className="w-full h-48 object-cover"/>
                    </Link>
                </Card>
                <Card className="">
                    <Link to="/project07">
                        <img src={process.env.PUBLIC_URL + "/ProjectImgs/pro07.jpg"} className="w-full h-48 object-cover"/>
                    </Link>
                </Card>
            </div>
        </div>
    );
};

export default ProjectSection;