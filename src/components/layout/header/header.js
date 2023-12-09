import styles from './header.module.scss';
import headshot from '../../../public/my-photos/temp-headshot.png';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.name}>Connor Kildare</div>
      <div className={styles.profession}>Software Developer</div>
      <div className={styles.studies}>Software Engineering major at the University of Nebraska - Lincoln</div>
      <div className={styles.contactInfo}>
        <div className={styles.placeholderContact}/>
        <div className={styles.placeholderContact}/>
        <div className={styles.placeholderContact}/>
        <div className={styles.placeholderContact}/>
        <div className={styles.placeholderContact}/>
      </div>
    </header>
  )
}

export default Header;