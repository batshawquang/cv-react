import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
    return (
        <div className="mx-14 my-5 max-w-screen-xl">
            <div className="grid grid-cols-3 gap-4">
                <ProjectCard
                    colspan="col-span-2"
                    linkTo="/project01"
                    imgSrc="/ProjectImgs/pro01.jpg"
                    name="Embedded PowerBi App"
                />
                <ProjectCard
                    colspan=""
                    linkTo="/project02"
                    imgSrc="/ProjectImgs/pro02.jpg"
                    name="Microsoft WPF"
                />
                <ProjectCard
                    colspan=""
                    linkTo="/project03"
                    imgSrc="/ProjectImgs/pro03.jpg"
                    name="Real-time Stereo Matching"
                />
                <ProjectCard
                    colspan="col-span-2"
                    linkTo="/project04"
                    imgSrc="/ProjectImgs/pro04.jpg"
                    name="Light direction estimation"
                />
                <ProjectCard
                    colspan=""
                    linkTo="/project05"
                    imgSrc="/ProjectImgs/pro05.jpg"
                    name="Landing Page with Bootstrap"
                />
                <ProjectCard
                    colspan=""
                    linkTo="/project06"
                    imgSrc="/ProjectImgs/pro06.jpg"
                    name="Windows Forms .NET"
                />
                <ProjectCard
                    colspan=""
                    linkTo="/project07"
                    imgSrc="/ProjectImgs/pro07.jpg"
                    name="Pokemon Deck"
                />
            </div>
        </div>
    );
};

export default ProjectSection;