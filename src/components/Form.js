import { useHistory } from 'react-router-dom'
import styles from './Form.module.css';

const Form = ({ form, setForm, submitForm, errors }) => {
  const history = useHistory()

  const updFieldsHandler = (field, value) => {
    if (field === 'card' && value.length > 16 || field === 'cvc' && value.length > 3)
      value = form[field]

    if (field === 'exp') {
      if (value.length === 2)
        value += '/'

      if (value.length > 5)
        value = form.exp
    }

    setForm({ ...form, [field]: value })
  }

  const submitFormHandler = () => {
    const res = submitForm()

    if (res)
      history.push('/confirmacion')
  }

  return <div className={styles.root}>
    <div className={styles.form}>
      <div className={styles.formGroup}>
        <label>Nombre y Apellidos</label>
        <input type="text"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          value={form.name} />
        {errors.includes('name') && <p className={styles.error}>Por favor introduzca su nombre y apellidos</p>}
      </div>
      <div className={styles.formGroup}>
        <label>Numero de Tarjeta</label>
        <input type="number"
          className={styles.inputCard}
          placeholder={`\u00B7\u00B7\u00B7\u00B7 \u00B7\u00B7\u00B7\u00B7 \u00B7\u00B7\u00B7\u00B7 \u00B7\u00B7\u00B7\u00B7`}
          onChange={(e) => updFieldsHandler('card', e.target.value)}
          value={form.card} />
        {errors.includes('card') && <p className={styles.error}>Por favor introduzca una tarjeta valida</p>}
      </div>
      <div className={styles.splitFormGroup}>
        <div className={styles.formGroup}>
          <label>F. Expira</label>
          <input type="text"
            className={styles.inputCard}
            placeholder="MM/AA"
            onChange={(e) => updFieldsHandler('exp', e.target.value)}
            value={form.exp} />
          {errors.includes('exp') && <p className={styles.error}>Por favor introduzca una fecha valida</p>}
        </div>
        <div className={styles.formGroup}>
          <label>CVC</label>
          <input type="number"
            onChange={(e) => updFieldsHandler('cvc', e.target.value)}
            value={form.cvc} />
          {errors.includes('cvc') && <p className={styles.error}>Por favor introduzca un CVC valido</p>}
        </div>
      </div>
    </div>

    <button className={styles.btn} onClick={submitFormHandler}>Pagar S/ 29.00</button>
  </div>
}

export default Form