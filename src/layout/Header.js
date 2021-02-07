
import styles from './Header.module.css'
import { useHistory } from 'react-router-dom'

const Header = ({ uri }) => {
  let history = useHistory()

  return (
    <header className={styles.root}>
      {uri !== '/datos'
        ? <img className={styles.logo} src={process.env.PUBLIC_URL + '/logo.png'} />
        : <button onClick={() => history.goBack()}><img src={process.env.PUBLIC_URL + '/left-arrow.svg'} /> Tus Datos</button>}
    </header>)
}

export default Header