import styles from './Confirmacion.module.css';
import plans from '../constants/plans'

const Confirmacion = () => {
  return <div className={styles.root}>
    <div className={styles.header}>
      <p>Bienvenido NOMBRE</p>
      <p>has adquirido el</p>
      <h1>{plans.standard.name}</h1>
      <h3>/S {plans.standard.price} al mes</h3>
    </div>

    <p className={styles.description}>
      {plans.standard.description}
    </p>
    <div className={styles.buttons}>
      <button className={styles.btnPlan}>Ir a ver mi plan</button>
      <button>Ir a elcomercio.pe</button>
    </div>
  </div>
}

export default Confirmacion