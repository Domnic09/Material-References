import React, { useState } from "react";
import proj1 from "../assets/project1.png"
import proj2 from "../assets/project2.png"
import proj3 from "../assets/project3.png"
import proj4 from "../assets/project1.png"
import proj5 from "../assets/project2.png"
import { AiFillGithub } from "react-icons/ai";
import ShinyEffect from "./ShinyEffect";


const projects = [
    {
        img: proj1,
        title: "Project #1",
        description: "UI frontend use for react 1",
        links: {
            site: "#",
            github: "#",
        }
    },
    {
        img: proj2,
        title: "Project #2",
        description: "UI frontend use for react 2",
        links: {
            site: "#",
            github: "#",
        }
    },
    {
        img: proj3,
        title: "Project #3",
        description: "UI frontend use for react 3",
        links: {
            site: "#",
            github: "#",
        }
    },
    {
        img: proj4,
        title: "Project #4",
        description: "UI frontend use for react 4",
        links: {
            site: "#",
            github: "#",
        }
    },
    {
        img: proj5,
        title: "Project #5",
        description: "This is the project 5",
        links: {
            site: "#",
            github: "#",
        }
    },
]

const Portfolio = () => {
    const [currentProj, setCurrentProj] = useState(0);
    return (
        <div className=" relative max-w-[800px] mx-auto p-6 md:my-20 flex flex-col md:flex-row" id="portfolio">
            <div className="z-10 glass p-6 w-full border-2 max-w-[600px]">
                <div className="w-full h-80">
                    <img src={projects[currentProj].img} alt={projects[currentProj].title} className="w-full h-full object-cover rounded-lg mb-4" />

                </div>

                <p className="text-gray-200 my-4">
                    {projects[currentProj].description}
                </p>
                <div className="flex space-x-4">
                    <a href={projects[currentProj].links.site} className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:big-slate-700 transition duration-300">View Site</a>
                    <a href={projects[currentProj].links.github} className="px-4 py-2 bg-gray-800 text-gray-200 text-2xl rounded-lg hover:gb-gray-600 transition duration-300 " ><AiFillGithub /></a>
                </div>
            </div>

            <div className="absolute inset-0 ">
                <div className="hidden md:block">
                    <ShinyEffect left={100} top={0} size={900} />
                </div>
            </div>


            <ul className="z-10 ml-4 flex flex-row md:flex-col gap-6 flex-wrap justify-center mt-4 md:gap-1">
                {
                    projects.map((project, index) => (
                        <li key={index} onClick={() => setCurrentProj(index)} className={`cursor-pointer text-gray-300 bg-slate-700 rounded-lg p-2 max-w-[100px] hover:bg-slate-800 transition duration-300 ${currentProj === index ? "bg-slate-900" : ""}`}>
                            {project.title}
                        </li>
                    ))
                }
                <li></li>
            </ul>
        </div>
    )
}

export default Portfolio