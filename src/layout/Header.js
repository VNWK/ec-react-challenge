
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.root}>
      <img className={styles.logo} src={process.env.PUBLIC_URL + '/logo.png'} />
    </header>)
}

export default Header