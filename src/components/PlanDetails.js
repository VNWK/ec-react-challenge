import styles from './PlanDetails.module.css';
import { useHistory } from 'react-router-dom'

const PlanDetails = ({ planSelected, planList }) => {
  const history = useHistory()

  return (Object.keys(planList).length > 0 &&
    <div className={styles.root}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.price}><span>S/</span>{planList[planSelected].price}</h1>
          <p>/AL MES</p>
        </div>
        <p className={styles.description}>{planList[planSelected].description}</p>
      </div>

      <div className={styles.details}>
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
      <button className={styles.btn} onClick={() => history.push('/datos')}>Suscribirme</button>

    </div>)
}

export default PlanDetails