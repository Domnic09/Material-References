import React from "react"
import styles from "./Contact.module.css"
import { getImageUrl } from "../../util";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Fell free to reach out.</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
                    <a href="mailto:myemail@gmail.com">dominictaboada74@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linked In" />
                    <a href="https://www.linkedin.com/myname">linkedin.com/myname </a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github" />
                    <a href="https://www.github.com/myname">github.com/myname</a>
                </li>
            </ul>
        </footer>
    );
}