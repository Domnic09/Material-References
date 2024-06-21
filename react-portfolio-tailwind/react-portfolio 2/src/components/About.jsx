import React from "react";
import proj1 from "../assets/project1.png"
import proj2 from "../assets/project2.png"
import proj3 from "../assets/project3.png"

import {
    DiJavascript1,
    DiReact,
    DiNodejsSmall,
    DiHtml5,
    DiCss3,
    DiSass,
    DiBootstrap,
    DiMongodb,
    DiGithubBadge
} from 'react-icons/di';

const About = () => {
    return (
        <div className="  max-w-[1300px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center" id="about">
            <div className="md:hidden flex flex-wrap gap-4 text-4xl justify-center bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6">
                <DiHtml5 className="text-orange-600" />
                <DiCss3 className="text-blue-600" />
                <DiSass className="text-pink-600" />
                <DiBootstrap className="text-purple-600" />
                <DiJavascript1 className="text-yellow-500" />
                <DiReact className="text-blue-500" />
                <DiNodejsSmall className="text-green-500" />

            </div>

            <div className="relative group">
                <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg
                    blur opacity-25 group-hover:opacity-100 transition duration-300 "></div>
                <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blue-lg rounded-lg">
                    <img src={proj1} alt="project 1" className="rounded-lg md:max-w-[500px]" />
                </div>
            </div>

            <div className="p-6">
                <h2 className="text-gray-200 text-3xl font-bold mb-4">Skills</h2>
                <p className="text-ggray-300 mb-4 text-white">
                    How did it?, I was supposed to be sent away but they forgot to come and get me.
                    I was functioning alcoholic till nobody notice my new aesthetic, all of this to say i hope your okay but youre the reason
                </p>
                <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden ">
                    <DiHtml5 className="text-orange-600" />
                    <DiCss3 className="text-blue-600" />
                    <DiSass className="text-pink-600" />
                    <DiBootstrap className="text-purple-600" />
                    <DiJavascript1 className="text-yellow-500" />
                    <DiReact className="text-blue-500" />
                    <DiNodejsSmall className="text-green-500" />

                </div>
            </div>

            <div className="p-6">
                <h2 className="text-gray-200 text-3xl font-bold mb-4">Skills</h2>
                <p className="text-ggray-300 mb-4 text-white">
                    How did it?, I was supposed to be sent away but they forgot to come and get me.
                    I was functioning alcoholic till nobody notice my new aesthetic, all of this to say i hope your okay but youre the reason
                </p>
                <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden ">
                    <DiHtml5 className="text-orange-600" />
                    <DiCss3 className="text-blue-600" />
                    <DiSass className="text-pink-600" />
                    <DiBootstrap className="text-purple-600" />
                    <DiJavascript1 className="text-yellow-500" />
                    <DiReact className="text-blue-500" />
                    <DiNodejsSmall className="text-green-500" />

                </div>
            </div>
            <div className="relative group">
                <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg
                    blur opacity-25 group-hover:opacity-100 transition duration-300 "></div>
                <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blue-lg rounded-lg">
                    <img src={proj2} alt="project 1" className="rounded-lg md:max-w-[500px]" />
                </div>
            </div>

            <div className="relative group">
                <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg
                    blur opacity-25 group-hover:opacity-100 transition duration-300 "></div>
                <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blue-lg rounded-lg">
                    <img src={proj3} alt="project 1" className="rounded-lg md:max-w-[500px]" />
                </div>
            </div>
            <div className="p-6">
                <h2 className="text-gray-200 text-3xl font-bold mb-4">Skills</h2>
                <p className="text-ggray-300 mb-4 text-white">
                    How did it?, I was supposed to be sent away but they forgot to come and get me.
                    I was functioning alcoholic till nobody notice my new aesthetic, all of this to say i hope your okay but youre the reason
                </p>
                <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden ">
                    
                    <DiNodejsSmall className="text-green-500" />
                    <DiMongodb className="text-green-700" />
                    <DiReact className="text-blue-800" />
                    <DiGithubBadge className="text-gray-700" />
                </div>
            </div>
        </div>
    )
}

export default About