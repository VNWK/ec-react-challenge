import { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Header from '../layout/Header'
import Footer from '../layout/Footer'

import Suscripcion from '../screens/Suscripcion/Suscripcion'

import styles from './App.module.css'

const App = () => {
  return (
    <Router>
      <Fragment>
        <Header />
        <article className={styles.content}>
          <Switch>
            <Route path="/suscripcion" component={Suscripcion} />
            <Route path="/datos" component={() => <p>datos</p>} />
            <Route path="/confirmacion" component={() => <p>confirmacion</p>} />
            <Redirect to="/suscripcion" />
          </Switch>
        </article>
        <Footer />
      </Fragment>
    </Router>);
}

export default App;
