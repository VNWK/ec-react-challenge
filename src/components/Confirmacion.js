import styles from './Confirmacion.module.css';

const Confirmacion = ({ form, planSelected, planList }) => {
  return (Object.keys(planList).length > 0 &&
    <div className={styles.root}>
      <div className={styles.header}>
        <p>Bienvenido {form.name}</p>
        <p>has adquirido el</p>
        <h1>{planList[planSelected].name}</h1>
        <h3>/S {planList[planSelected].price} al mes</h3>
      </div>

      <p className={styles.description}>
        {planList[planSelected].description}
      </p>
      <div className={styles.buttons}>
        <button className={styles.btnPlan}>Ir a ver mi plan</button>
        <button onClick={() => window.location = 'https://elcomercio.pe'}>Ir a elcomercio.pe</button>
      </div>
    </div>)
}

export default Confirmacion