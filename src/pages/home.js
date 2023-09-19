/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles/home.module.scss'

import cornHacks from '../public/my-photos/cornhacks.jpg'
import photoWithGageFriends from '../public/my-photos/with-gage-friends.jpg';

export default function Home() {

  const tab= <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>;

  return (
    <div className={styles.homeContainer}>
      <div className={styles.photoContainer}>
        <img src={cornHacks} alt={"Picture is of team mates and I during a hackathon event looking tired."}/>
        <img src={photoWithGageFriends} alt={"Me with my little brother and some friends."}/>
      </div>
      <div className={styles.introductionContainer}>
        <p>{tab}My name is Connor Kildare. I am a Junior in Software Engineering at the University of Nebraska - Lincoln. I am proficient in C#, React, and JavaScript. I am also familiar with C, Python, Jave, etc. </p>
        <p>{tab}I aspire to be a Software Engineer to produce accessible code with a meaningful impact to my users. I also hope to gain diverse work experience working in Software. </p>
        <p>{tab}In my free time, I work on projects that can help me or those around me in day-to-day life. I work with some friends under the team name, “Buddy Systems”, where we periodically meet to work on projects that interest us. I formerly was a Vice-President of the Operating Systems and Open-Source Group at UNL, and now participate in UNL&apos;s Game Dev club.</p>
      </div>
    </div>
  )
};