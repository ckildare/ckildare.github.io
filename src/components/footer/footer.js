import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.scss'
import github from '../../public/link-logos/github.png';
import gitlab from '../../public/link-logos/gitlab.png';
import gmail from '../../public/link-logos/gmail.png';
import linkedin from '../../public/link-logos/linkedin.png';
import oldHeadShot from '../../public/temp-headshot.png';

export default function Footer() {
  const contactCardData = [
    {
      label: "Check Me Out on GitHub",
      displayImg: github,
      url: "https://github.com/ckildare",
    },
    {
      label: "Link With Me on LinkedIn",
      displayImg: linkedin,
      url: "https://linkedin.com/in/connor-kildare",
    },
    {
      label: "Check Me Out on GitLab",
      displayImg: gitlab,
      url: "https://git.unl.edu/ckildare19",
    },
    {
      label: "Email Me on G-Mail",
      displayImg: gmail,
      url: "mailto:ckildare10@gmail.com",
    },
  ];

  return (
    <div className={styles.footerContainer}>
      <div className={styles.contactsContainer}>
        <p as={'div'} className={styles.contactHeader}>Here's Where You Can Find Me!</p>
        <div className={styles.contacts}>
          {contactCardData.map(((contact, key) =>
            <Link className={styles.contactCard} href={contact.url} key={key}>
              <div className={styles.contactImage}><Image src={contact.displayImg} width={35} height={35} /></div>
              <p as={'div'} className={styles.contactText}>{contact.label}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.githubRepo}>
        <div className={styles.deprecatedSiteImg}><Image src={oldHeadShot} width={125} height={125} /></div>
        <div className={styles.deprecatedSide}>
          <p as={'div'} className={styles.deprecatedSiteDescription}>
            This current site is built using SASS, React.JS, and Next.JS technologies. You can find my old website and its repository here!
          </p>
          <Link className={styles.deprecatedSiteLink} href={""}>
            <p as={'div'} className={styles.deprecatedSiteLinkText}>View Deprecated Site</p>
          </Link>
        </div>
      </div>
    </div>
  )
};