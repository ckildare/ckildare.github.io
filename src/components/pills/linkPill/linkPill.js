import styles from './linkPill.module.scss';
import Link from 'next/link';

const LinkPill = ({ name, link }) => {
  return (
    <Link href={link} className={styles.linkPill}>{name}</Link>
  );
}

export default LinkPill;