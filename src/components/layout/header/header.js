import styles from './header.module.scss';
import headshot from '../../../public/my-photos/temp-headshot.png';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {

  const navBarData = [
    {
      label: "Home Page",
      url: "/",
    },
    {
      label: "Schooling",
      url: "/school",
    },
    {
      label: "Personal Projects",
      url: "/projects",
    },
    {
      label: "Work Experience",
      url: "/work",
    },
  ];

  return (
    <div className={styles.headerContainer}>
      <div className={styles.topRow}>
        <Image src={headshot} width={100} height={100} as={'div'} className={styles.headshot} alt={"Headshot picture"}/>
        <p as={'div'} className={styles.nameText}>Connor Kildare</p>
      </div>
      <div className={styles.navBarContainer}>
        {navBarData.map(((linkData, key) =>
          <Link className={styles.buttonContainer} href={linkData.url ?? ""} key={key}>
            <div className={styles.buttonText}>{linkData.label}</div>
          </Link>
        ))}
      </div>
    </div>
  )
};