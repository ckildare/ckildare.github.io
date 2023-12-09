import styles from './header.module.scss';

const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.name}>Connor Kildare</div>
      <div className={styles.profession}>Software Developer</div>
      <div className={styles.studies}>Software Engineering Major at the University of Nebraska - Lincoln</div>
      <div className={styles.contactInfo}>
        <div className={styles.placeholderContact}/>
        <div className={styles.placeholderContact}/>
        <div className={styles.placeholderContact}/>
        <div className={styles.placeholderContact}/>
        <div className={styles.placeholderContact}/>
      </div>
      {/* <div className={styles.navBar}>
        <div className={styles.navItem} onClick={() => onNavClick(aboutRef)} >About</div>
        <div className={styles.navItem} onClick={() => workElement && workElement.scrollIntoView({ behavior: "smooth" })}>Work</div>
        <div className={styles.navItem} onClick={() => onNavClick(projectsRef)}>Projects</div>
        <div className={styles.navItem} onClick={() => onNavClick(schoolRef)}>School</div>
      </div> */}
    </header>
  )
}

export default Header;