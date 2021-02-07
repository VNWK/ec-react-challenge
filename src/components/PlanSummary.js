import { useState } from 'react'
import styles from './PlanSummary.module.css';
import plans from '../constants/plans'

const PlanSummary = () => {
  const [details, setDetails] = useState(false)

  return <div className={styles.root} onClick={() => setDetails(!details)}>
    <div className={styles.header}>
      <div>
        <h1>{plans.standard.name}</h1>
        <h1>S/{plans.standard.price} al mes</h1>
      </div>

    </div>
    {details &&
      <div className={styles.details}>
        <p>{plans.standard.description}</p>
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
    }

    <button className={styles.planChange} onClick={() => { }}>Cambiar a plan Premium</button>

  </div>
}

export default PlanSummary