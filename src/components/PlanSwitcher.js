import styles from './PlanSwitcher.module.css'

const PlanSwitcher = ({ planSelected, setPlanSelected }) => {

  const switchPlanHandler = () => {
    if (planSelected === 'standard')
      setPlanSelected('premium')
    else
      setPlanSelected('standard')
  }

  return (
    <div className={styles.root}>
      <p className={`${planSelected === 'standard' ? styles.selected : null}`}>Plan Estandar</p>
      <div className={styles.toggle}>
        <label className={styles.switch}>
          <input type="checkbox"
            checked={planSelected === 'premium'}
            onChange={switchPlanHandler} />
          <span className={styles.slider}></span>
        </label>
      </div>
      <p className={`${planSelected === 'premium' ? styles.selected : null}`}>Plan Premium</p>
    </div>
  );
}

export default PlanSwitcher;