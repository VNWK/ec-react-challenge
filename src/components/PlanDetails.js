import styles from './PlanDetails.module.css';
import plans from '../constants/plans'

const PlanDetails = () => {
  return <div className={styles.root}>
    <div className={styles.header}>
      <div>
        <h1 className={styles.price}><span>S/</span>{plans.standard.price}</h1>
        <p>/AL MES</p>
      </div>
      <p className={styles.description}>{plans.standard.description}</p>
    </div>

    <div className={styles.details}>
      <ul>
        {plans.features.map((detail, i) =>
          <li
            className={!plans.standard.availableFeatures.includes(i) ? styles.disabledFeature : null}
            key={`Detail_${i}`}>
            <div>
              <img src={process.env.PUBLIC_URL + '/check.svg'} />
              {detail}
            </div>
          </li>
        )}
      </ul>
    </div>
    <button className={styles.btn}>Suscribirme</button>

  </div>
}

export default PlanDetails