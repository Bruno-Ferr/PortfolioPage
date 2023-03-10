import styles from './styles.module.css';

export function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <h1>
          Hello, <br/>
          I am Bruno, <br/>
          Fullstack Developer
        </h1>
        <p>
          I love create digital systems on the web
        </p>
      </div>
    </div>
  )
}