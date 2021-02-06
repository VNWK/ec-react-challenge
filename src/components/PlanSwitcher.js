import styles from './PlanSwitcher.module.css'

const PlanSwitcher = () => {
  return (
    <div className={styles.root}>
      <p>Plan Estandar</p>
      <div className={styles.toggle}>
        <label className={styles.switch}>
          <input type="checkbox" />
          <span className={styles.slider}></span>
        </label>
      </div>
      <p>Plan Premium</p>
    </div>
  );
}

export default PlanSwitcher;