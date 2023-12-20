import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/index.module.scss';
import About from '@/components/layout/about';
import Work from '@/components/layout/work';
import Projects from '@/components/layout/projects';
import { useRef, useEffect, useState, use } from 'react';
import classNames from 'classnames';
import githubLogo from '@/public/icons/github.svg';
import gitlabLogo from '@/public/icons/gitlab.svg';
import linkedinLogo from '@/public/icons/linkedin.svg';
import emailLogo from '@/public/icons/email.svg';
import { resume } from './resume.js';

export default function Index() {
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const projectsRef = useRef(null);

  const [intersectingSection, setIntersectingSection] = useState(0);
  const [isHeaderIntersecting, setIsHeaderIntersecting] = useState(true);

  const openPdf = () => {
    const byteCharacters = window?.atob(resume);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "application/pdf" });
    const blobUrl = URL.createObjectURL(blob);
    window.open(blobUrl);
  }

  useEffect(() => {
    console.log("isHeaderIntersecting: ", isHeaderIntersecting);
  }, [isHeaderIntersecting]);

  useEffect(() => {
    const headerObserver = new IntersectionObserver(([entry]) => {
      setIsHeaderIntersecting(entry.isIntersecting);
    },
      {
        rootMargin: "5px"
      });
    headerObserver.observe(headerRef.current);
    return () => headerObserver.disconnect();
  }, [headerRef, intersectingSection]);

  useEffect(() => {
    const aboutObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIntersectingSection(0);
    },
      {
        rootMargin: "-30% 0px -70% 0px"
      });
    aboutObserver.observe(aboutRef.current);
    return () => aboutObserver.disconnect();
  }, [aboutRef, intersectingSection]);

  useEffect(() => {
    const workObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIntersectingSection(1);
    },
      {
        rootMargin: "-30% 0px -70% 0px"
      });
    workObserver.observe(workRef.current);
    return () => workObserver.disconnect();
  }, [workRef, intersectingSection]);

  useEffect(() => {
    const projectsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIntersectingSection(2);
    },
      {
        rootMargin: "-30% 0px -70% 0px"
      });
    projectsObserver.observe(projectsRef.current);
    console.log('observe');
    return () => projectsObserver.disconnect();
  }, [projectsRef, intersectingSection]);

  useEffect(() => {
    console.log(intersectingSection);
  }, [intersectingSection]);

  const stickyClass = isHeaderIntersecting ? styles.none : styles.sticky;
  const activeClass = (i) => intersectingSection == i ? styles.active : styles.none;

  return (
    <>
      <Head>
        <title>Connor Kildare</title>
        <meta name="description" content="Portfolio site for Connor Kildare" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Connor Kildare, Connor, Kildare, UNL, Conner Kildare, Conner, Portfolio, Portfolio Site, Speedway Motors, Senior Design" />
        <meta name="author" content="Connor Kildare" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.headerContent} ref={headerRef}>
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
          </div>
          <div className={classNames(styles.navBar, stickyClass)}>
            <div className={classNames(styles.navItem, activeClass(0))} onClick={() => aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" })} >About</div>
            <div className={classNames(styles.navItem, activeClass(1))} onClick={() => workRef.current.scrollIntoView({ behavior: "smooth", block: "start" })}>Work</div>
            <div className={classNames(styles.navItem, activeClass(2))} onClick={() => projectsRef.current.scrollIntoView({ behavior: "smooth", block: "start" })}>Projects</div>
            <div className={styles.navItem} onClick={() => openPdf()}>Resume</div>
          </div>
        </header>
        <div className={styles.pageContent}>
          <section ref={aboutRef}>
            <About />
          </section>
          <section ref={workRef}>
            <Work />
          </section>
          <section ref={projectsRef}>
            <Projects />
          </section>
        </div>
      </main>
    </>
  )
}
