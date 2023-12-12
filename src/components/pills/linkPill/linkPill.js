import styles from './linkPill.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const LinkPill = ({ name, link, svg }) => {
  return (
    <Link href={link} className={styles.linkPill}>
      <Image src={svg} height={20} width={20} alt={"Svg for link"} />
      <div className={styles.linkPillText}>{name}</div>
    </Link>
  );
}

export default LinkPill;