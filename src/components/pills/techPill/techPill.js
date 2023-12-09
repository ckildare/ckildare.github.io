import styles from './techPill.module.scss';

const TechPill = ({ name }) => {
  return (
    <div className={styles.techPill}>{name}</div>
  );
}

export default TechPill;