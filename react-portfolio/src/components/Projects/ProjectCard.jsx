import React from 'react'
import styles from "./ProjectCard.module.css"
import { getImageUrl } from '../../util';
export const ProjectCard = ({
    project: { title, imageSrc, description, skills, source, demo }}) => {
    // passing the props since it was moved, 
    // the "{project}" props is equal to "const project = props.project"
    // by given the props specify it by indicating the attributes pf the project
    // using the project : {imgSrc, title, demo, source, description}
    // you should take out the attributes of the object project
    // then afterwards remove  the reference project to each attribute
    // lastly, pass the porject properties/attributes like indicated above
    //"project={project}" in the Project.jsx
    // the {project} is the props originally from projectcard.jsx
    return (
        // <div key={id}>
        <div className={styles.container}>
            {/* <img src={project.imageSrc} alt={`${project.title}`} /> */}
            <img src={getImageUrl(imageSrc)} alt={`${title}`} className={styles.image} />

            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {
                    // different skill used
                    skills.map((skill, id) => {
                        return (
                        <li className={styles.skill} key={id}>{skill}</li>
                        // console.log("this is the skills: " + skill)
                     ); 
                    })}
            </ul>
            {/* render the demo and source button */}
            <div className={styles.links}>
                <a className={styles.link} href={demo}>Demo</a>
                <a className={styles.link} href={source}>Source</a>
            </div>
        </div>
    )
    
}
