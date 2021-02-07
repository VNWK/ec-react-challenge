import PlanSwitcher from '../../components/PlanSwitcher'
import PlanDetails from '../../components/PlanDetails'
import BaseLayout from '../../layout/BaseLayout'
const Suscripcion = (props) => {
  return (
    <BaseLayout uri={props.location.pathname}>
      <PlanSwitcher />
      <PlanDetails />
    </BaseLayout>

  )
}

export default Suscripcion