import React from 'react';
import { getImageUrl } from '../../util';
import styles from "./Hero.module.css";

export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, Im Dom</h1>
        <p className={styles.desc}>I'm an aspiring website developer. I have an experience in developing website application in school, bootcamp, and in a company.
            If you want to learn more, Please feel free to contact me.
        </p>
        <a href="mailto:dominictaboada74@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg} />
    {/* this is for highlights blended in the background */}
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>
}
