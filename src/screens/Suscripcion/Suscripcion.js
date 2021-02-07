import { Fragment } from 'react'
import PlanSwitcher from '../../components/PlanSwitcher'
import PlanDetails from '../../components/PlanDetails'

const Suscripcion = (props) => {

  return (
    <Fragment>
      <PlanSwitcher />
      <PlanDetails />
    </Fragment>

  )
}

export default Suscripcion