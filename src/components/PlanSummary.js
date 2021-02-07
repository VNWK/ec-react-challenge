import { useState } from 'react'
import styles from './PlanSummary.module.css';
import plans from '../constants/plans'

const PlanSummary = ({ planSelected, switchPlan, planList }) => {
  const [details, setDetails] = useState(false)

  return (Object.keys(planList).length > 0 &&
    <div className={styles.root}>
      <div onClick={() => setDetails(!details)}>
        <div className={styles.header}>
          <div>
            <h1>{planList[planSelected].name}</h1>
            <h1>S/{planList[planSelected].price} al mes</h1>
          </div>

        </div>
        {details &&
          <div className={styles.details}>
            <p>{planList[planSelected].description}</p>
            <ul>
              {planList.features.map((detail, i) =>
                <li
                  className={!planList[planSelected].availableFeatures.includes(i) ? styles.disabledFeature : null}
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
      </div>
      <button className={styles.planChange} onClick={switchPlan}>Cambiar a plan Premium</button>

    </div>)
}

export default PlanSummary