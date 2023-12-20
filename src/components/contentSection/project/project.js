import LinkPill from '@/components/pills/linkPill';
import TechPill from '../../pills/techPill';
import styles from './project.module.scss';
import StatusPill from '@/components/pills/statusPill';
import projectSvg from 'public/images/icons/rocket-launch.svg';
import gitlabSvg from 'public/images/icons/gitlab.svg';
import githubSvg from 'public/images/icons/github.svg';
import Image from 'next/image';

const Project = ({ project }) => {
  return (
    <div className={styles.projectCardWrapper}>
      <div className={styles.projectHeader}>
        <div className={styles.projectTitle}>{project.title}</div>
        <div className={styles.linkPillSection}>
          {project.projectLink && <LinkPill name="Project" link={project.projectLink} svg={projectSvg} />}
          {project.repoLink && <LinkPill name="Code" link={project.repoLink} svg={project.repoLink.includes('gitlab') ? gitlabSvg : githubSvg} />}
        </div>
      </div>
      <div className={styles.topPillRow}>
        <StatusPill projectStatus={project.status} />
      </div>
      <div className={styles.projectDescriptionSection}>
        <div className={styles.projectSectionTitle}>About {project.shortTitle}</div>
        <div className={styles.projectDescription}>{project.context}</div>
        <div className={styles.projectDescription}>{project.concept}</div>
        <div className={styles.listDescription}>
          {(project.conceptStepList ?? []).map((step, key) => {
            return (
              <div key={key} className={styles.listItem}>
                <div className={styles.number}>{key + 1}.</div>
                <div className={styles.listItemText}>{step}</div>
              </div>
            )
          })}
        </div>
      </div>
      <div className={styles.techPillSection}>
        {project.technologies.map((technology, key) => {
          return (
            <TechPill key={key} name={technology} />
          )
        })}
      </div>
      <div className={styles.projectImageSection}>
        {project.supportingImgs.map((image, key) => {
          return <Image placeholder={"blur"} className={styles.supportingImg} key={key} src={image} alt={`Supporting image ${key} for ${project.title}`} />
        })}
      </div>
    </div>
  );
};

export default Project;