
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.root}>
      <img className={styles.logo} src={process.env.PUBLIC_URL + '/logo.png'} />
    </footer>)
}

export default Footer