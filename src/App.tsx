import { useState } from 'react'
import { Header } from './components/Header/Index'
import { Home } from './components/Home/Index'
import { AboutMe } from './components/AboutMe/Index'
import { Projects } from './components/Projects/Index'
import { Contact } from './components/Contact/Index'
import styles from'./styles/app.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
