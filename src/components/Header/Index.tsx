import styles from './styles.module.css';

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          B
        </div>
        <div className={styles.menu}>
          <a href="">Home</a>
          <a href="">About Me</a>
          <a href="">Projects</a>
          <a href="">Contact</a>
        </div>
      </div>
    </div>
  )
}