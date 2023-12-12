import styles from './statusPill.module.scss';
import classNames from 'classnames';
import { ProjectStatus } from '@/public/enums/projectStatus.js';
import Image from 'next/image';
import inProgress from '@/public/icons/inProgress.svg';
import finished from '@/public/icons/done.svg';
import abandoned from '@/public/icons/cancel.svg';
import paused from '@/public/icons/paused.svg';

const StatusPill = ({ projectStatus }) => {
  switch (projectStatus) {
    case ProjectStatus.IN_PROGRESS:
      return <div className={classNames(styles.inProgress, styles.statusPill)}>
        <Image src={inProgress} height={20} width={20} alt={"In progress status svg"} />
        In Progress
      </div>;
    case ProjectStatus.FINISHED:
      return <div className={classNames(styles.finished, styles.statusPill)}>
        <Image src={finished} height={20} width={20} alt={"Finished status svg"} />
        Done
      </div>;
    case ProjectStatus.ABANDONED:
      return <div className={classNames(styles.abandoned, styles.statusPill)}>
        <Image src={abandoned} height={20} width={20} alt={"Abandoned status svg"} />
        Abandoned
      </div>;
    case ProjectStatus.PAUSED:
      return <div className={classNames(styles.paused, styles.statusPill)}>
        <Image src={paused} height={20} width={20} alt={"Paused status svg"} />
        Paused
      </div>;
  };
}

export default StatusPill;