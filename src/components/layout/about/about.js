import styles from './about.module.scss';
import Image from 'next/image';
import dmsi from 'public/images/my-photos/dmsi.jpg';


const About = () => {
  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.title}>About Me</div>
      <p>My name is Connor Kildare. I am a Junior in Software Engineering at the University of Nebraska - Lincoln. I am proficient in C#, React, and JavaScript. I am also familiar with C, Python, Java, etc. </p>
      <p>I aspire to be a Software Engineer to produce accessible code with a meaningful impact to my users. I also hope to gain diverse work experience working in Software. </p>
      <p>In my free time, I work on projects that can help me or those around me in day-to-day life. I work with some friends under the team name, “Buddy Systems”, where we periodically meet to work on projects that interest us. I formerly was a Vice-President of the Operating Systems and Open-Source Group at UNL.</p>
      <div className={styles.images}>
        <Image
          priority
          placeholder={"blur"}
          quality={100}
          className={styles.dmsi}
          src={dmsi}
          alt={"Photo of our senior design project sponsor, me, and my teammate, Shayne M. at our second release at DMSi HQ, December 9th, 2023."}
        />
      </div>
    </div>
  );
}

export default About;