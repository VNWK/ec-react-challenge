import { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Header from '../layout/Header'
import Footer from '../layout/Footer'

import Suscripcion from '../screens/Suscripcion/Suscripcion'
import Datos from '../screens/Datos/Datos'
import Confirmacion from '../screens/Confirmacion/Confirmacion'

import styles from './BaseLayout.module.css'

const BaseLayout = (props) => {
  return (
    <Fragment>
      <Header uri={props.uri} />
      <article className={styles.content}>
        {props.children}
      </article>
      <Footer />
    </Fragment>);
}

export default BaseLayout;
