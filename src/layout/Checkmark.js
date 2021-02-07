import styles from './Checkmark.module.css';

const Checkmark = () => {
  return <div className={styles.root}>
    <img src={process.env.PUBLIC_URL + '/check.svg'} />
  </div>
}

export default Checkmark