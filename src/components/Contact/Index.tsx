import styles from './styles.module.css';

export function Contact() {
  return (
    <div className={styles.container}>
      <footer className={styles.contactPage}>
        <h1>Are you interested?</h1>
        <p>Hi there, do you have a project that you think i can provide value and want to talk about it? Send me an email</p>
        <div className={styles.avatar}>
          {/* Foto */}
        </div>
        <button>
          fbruno233@gmail.com
        </button>
      </footer>
    </div>
  )
}