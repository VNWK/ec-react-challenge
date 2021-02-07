import styles from './Form.module.css';

const Form = () => {
  return <div className={styles.root}>
    <div className={styles.form}>
      <div className={styles.formGroup}>
        <label>Nombre y Apellidos</label>
        <input type="text" />
      </div>
      <div className={styles.formGroup}>
        <label>Numero de Tarjeta</label>
        <input type="text" className={styles.inputCard} placeholder={`\u00B7\u00B7\u00B7\u00B7 \u00B7\u00B7\u00B7\u00B7 \u00B7\u00B7\u00B7\u00B7 \u00B7\u00B7\u00B7\u00B7`} />
      </div>
      <div className={styles.splitFormGroup}>
        <div className={styles.formGroup}>
          <label>F. Expira</label>
          <input type="text" className={styles.inputCard} placeholder="MM/AA" />
        </div>
        <div className={styles.formGroup}>
          <label>CVC</label>
          <input type="text" />
        </div>
      </div>
    </div>

    <button className={styles.btn} onClick={ }>Pagar S/ 29.00</button>
  </div>
}

export default Form