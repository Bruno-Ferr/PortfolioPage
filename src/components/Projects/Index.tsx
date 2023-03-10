import styles from './styles.module.css';

export function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.projectsPage}>
        <h1>Latest projects</h1>
        <div className={styles.project}>
          <p className={styles.projectName}>Project name</p>
          <div className={styles.projectInfo}>
            <img src="" alt="" />
            <div className={styles.projectDetails}>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              <div className={styles.techs}>
                <span>#react</span><span>#node</span><span>#css</span>
              </div>
              <a href="">github / visit site</a>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}