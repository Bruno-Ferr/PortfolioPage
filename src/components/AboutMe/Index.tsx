import styles from './styles.module.css';

const skills = ['React', 'Node', 'Typescript', 'MySQL']

export function AboutMe() {
  return (
    <div className={styles.container}>
      <div className={styles.aboutMePage}>
        <h1>ABOUT ME</h1>
        <div className={styles.aboutMe}>
          <img>
            {/* image / fig */}
          </img>
          <div className={styles.about}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            </p>
            <div className={styles.skills}>
            {/* {array com habilidades e map here} */}
            { skills.map(skill => {
              return (
                <p>
                  <span className='bulletPoint'></span> {skill}
                </p>
              )
            })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}