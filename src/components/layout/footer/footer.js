import Link from 'next/link';
import Image from 'next/image';
import CardWrapper from '@/components/cards/cardWrapper/cardWrapper';
import styles from './footer.module.scss'

import github from '../../../public/icons/github.svg';
import gitlab from '../../../public/icons/gitlab.svg';
import gmail from '../../../public/icons/email.svg';
import linkedin from '../../../public/icons/linkedin.svg';
import oldHeadShot from '../../../public/my-photos/temp-headshot.png';

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
        <p as={'div'} className={styles.contactHeader}>Here&apos;s Where You Can Find Me!</p>
        <div className={styles.contacts}>
          {contactCardData.map(((contact, key) =>
            <CardWrapper key={key}>
              <Link className={styles.contactCard} href={contact.url}>
                <div className={styles.contactImage}><Image src={contact.displayImg} width={35} height={35} alt={"Contact card image / logo"} /></div>
                <p as={'div'} className={styles.contactText}>{contact.label}</p>
              </Link>
            </CardWrapper>
          ))}
        </div>
      </div>
      <div className={styles.githubRepo}>
        <div className={styles.deprecatedSiteImg}><Image src={oldHeadShot} width={125} height={125} alt={"Photo for my deprecated site"} /></div>
        <div className={styles.deprecatedSite}>
          <p as={'div'} className={styles.deprecatedSiteDescription}>
            This site was built using HTML, Sass (CSS), and Bootstrap. You can find the source code for this site here!
          </p>
          <CardWrapper>
            <Link className={styles.contactCard} href={"https://github.com/ckildare/deprecated-portfolio-site"}>
              <p as={'div'} className={styles.deprecatedSiteLinkText}>View Deprecated Site GitHub</p>
            </Link>
          </CardWrapper>
        </div>
      </div>
    </div>
  )
};