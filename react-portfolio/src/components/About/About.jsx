import React from 'react';
import styles from "./About.module.css";
import { getImageUrl } from '../../util';

export const About = () => {
    return (
        <section className={styles.container} id="about">
            
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl("about/aboutImage.png")}
                    alt="Person Laptop"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>

                        <img src={getImageUrl("about/cursorIcon.png")} alt="frontend" />
                        <div className={styles.aboutItemText}>
                            <h3>Fortnight </h3>
                            <p>
                                I was supposed to be sent away but they forgot
                                to come and get me!
                            </p>

                        </div>
                    </li>
                    <li className={styles.aboutItem}>

                        <img src={getImageUrl("about/serverIcon.png")} alt="backend" />
                        <div className={styles.aboutItemText}>
                            <h3>Fortnight </h3>
                            <p>
                                I was supposed to be sent away but they forgot
                                to come and get me!
                            </p>

                        </div>
                    </li>
                    <li className={styles.aboutItem}>

                        <img src={getImageUrl("about/uiIcon.png")} alt="ui" />
                        <div className={styles.aboutItemText}>
                            <h3>Fortnight </h3>
                            <p>
                                I was supposed to be sent away but they forgot
                                to come and get me!
                            </p>

                        </div>
                    </li>

                </ul>
                </div>  
        </section>
        // <section className={styles.container}>
        //     <h2 className={styles.title}>About</h2>
        //     <div className={styles.content}>
        //         <img src={getImageUrl("about/aboutImage.png")} alt="person laptop" />
        //     </div>
        //     <ul className={styles.aboutItems}>
        //         <li className={styles.aboutItem}>
        //             <img src={getImageUrl("about/cursorIcon.png")} alt="cursor" />
        //         <div>
        //             <h3>Front End Developer</h3>
        //             <p>This is frontend developer in building responsive</p>
        //         </div>
        //         </li>
        //         <li className={styles.aboutItem}>
        //             <img src={getImageUrl("about/serverIcon.png")} alt="server" />
        //         <div>
        //             <h3>Back End Developer</h3>
        //             <p>This is frontend developer in building responsive</p>
        //         </div>
        //         </li>
        //         <li className={styles.aboutItem}>
        //             <img src={getImageUrl("about/uiIcon.png")} alt="ui" />
        //         <div>
        //             <h3>UI Designer</h3>
        //             <p>This is frontend developer in building responsive</p>
        //         </div>
        //         </li>
        //     </ul>
        // </section>
    )
}
