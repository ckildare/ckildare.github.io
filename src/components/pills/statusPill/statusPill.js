import styles from './statusPill.module.scss';
import { ProjectStatus } from '@/public/enums/projectStatus.js';
import Image from 'next/image';
import inProgress from '@/public/icons/inProgress.svg';
import finished from '@/public/icons/done.svg';
import abandoned from '@/public/icons/cancel.svg';
import paused from '@/public/icons/paused.svg';

const StatusPill = ({ projectStatus }) => {
  const statusSvg = () => {
    switch (projectStatus) {
      case ProjectStatus.IN_PROGRESS:
        return inProgress;
      case ProjectStatus.FINISHED:
        return finished;
      case ProjectStatus.ABANDONED:
        return abandoned;
      case ProjectStatus.PAUSED:
        return paused;
    }
  };

  return (
    <div className={styles.statusPill}>
      <Image src={statusSvg()} height={20} width={20} alt={"In progress status svg"} />
      {projectStatus}
    </div>
  );
}

export default StatusPill;