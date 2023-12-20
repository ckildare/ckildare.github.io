import { projectData } from 'public/data/projectData';
import styles from './projects.module.scss';
import CircleDivider from '@/components/circleDivider';
import Project from '@/components/contentSection/project';

const Projects = () => {
  return (
    <div className={styles.projectWrapper}>
      <div className={styles.title}>Projects</div>
      <div className={styles.projectSections}>
        {projectData.map((project, key) => {
          return (
            <div className={styles.projectSection} key={key}>
              <Project project={project} />
              {key != projectData.length - 1 && <CircleDivider />}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Projects;