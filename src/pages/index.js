import Head from 'next/head';
import Header from '@/components/layout/header/header';
import styles from '@/styles/index.module.scss';
import About from '@/components/layout/about';
import Work from '@/components/layout/work';
import Projects from '@/components/layout/projects';
import { useRef, useEffect, useState, use } from 'react';

const Section = {
  About: 0,
  Work: 1,
  Projects: 2
}

export default function Index() {
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const projectsRef = useRef(null);

  const [intersectingSection, setIntersectingSection] = useState(Section.About);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersectingSection(Section.About);
    },
      { rootMargin: "-300px" });
    observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, [aboutRef]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersectingSection(Section.Work);
    },
      { rootMargin: "-300px" });
    observer.observe(workRef.current);
    return () => observer.disconnect();
  }, [workRef]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIntersectingSection(Section.Projects);
    },
      { rootMargin: "-300px" });
    observer.observe(projectsRef.current);
    return () => observer.disconnect();
  }, [projectsRef]);

  useEffect(() => {
    console.log(`Intersecting section: ${intersectingSection}`);
  }, [intersectingSection]);

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
        <Header />
        <div className={styles.pageContent}>
          <section>
            <div ref={aboutRef} className={styles.sectionHeading}>About Me</div>
            <About />
          </section>
          <section>
            <div ref={workRef} className={styles.sectionHeading}>Work Experience</div>
            <Work />
          </section>
          <section>
            <div ref={projectsRef} />
            <div className={styles.sectionHeading}>Projects</div>
            <Projects />
          </section>
        </div>
      </main>
    </>
  )
}
