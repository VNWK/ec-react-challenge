import { Fragment } from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import styles from './App.module.css'

const App = () => {
  return (
    <Fragment>
      <Header />
      <article className={styles.content}>

      </article>
      <Footer />
    </Fragment>);
}

export default App;
