import styles from './header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import githubLogo from '../../../public/icons/github.svg';
import linkedinLogo from '../../../public/icons/linkedin.svg';
import emailLogo from '../../../public/icons/email.svg';
import gitlabLogo from '../../../public/icons/gitlab.svg';
import { useEffect, useState } from 'react';

const Header = (aboutRef, workRef, projectsRef) => {
  return (
    <header className={styles.header}>
      <div className={styles.name}>Connor Kildare</div>
      <div className={styles.profession}>Software Developer</div>
      <div className={styles.studies}>Software Engineering Major at the University of Nebraska - Lincoln</div>
      <div className={styles.links}>
        <Link href={"https://github.com/ckildare"} >
          <Image className={styles.linkSvg} src={githubLogo} alt={"Github link"} />
        </Link>
        <Link href={"https://gitlab.com/ckildare19"}>
          <Image className={styles.linkSvg} src={gitlabLogo} alt={"Gitlab link"} />
        </Link>
        <Link href={"https://linkedin.com/in/connor-kildare"}>
          <Image className={styles.linkSvg} src={linkedinLogo} alt={"Linkedin link"} />
        </Link>
        <Link href={"mailto:ckildare10@gmail.com"}>
          <Image className={styles.linkSvg} src={emailLogo} alt={"Email link"} />
        </Link>
      </div>
      <div className={styles.navBar}>
        <div className={styles.navItem} onClick={() => onNavClick(aboutRef)} >About</div>
        <div className={styles.navItem} onClick={() => workElement && workElement.scrollIntoView({ behavior: "smooth" })}>Work</div>
        <div className={styles.navItem} onClick={() => onNavClick(projectsRef)}>Projects</div>
        <div className={styles.navItem} onClick={() => onNavClick(schoolRef)}>School</div>
      </div>
    </header>
  )
}

export default Header;