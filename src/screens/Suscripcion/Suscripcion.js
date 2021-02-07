import { useContext } from 'react'

import { AppContext } from '../../contexts/app'

import PlanSwitcher from '../../components/PlanSwitcher'
import PlanDetails from '../../components/PlanDetails'
import BaseLayout from '../../layout/BaseLayout'

const Suscripcion = (props) => {
  const { planSelected, switchPlan, planList } = useContext(AppContext)

  return (
    <BaseLayout uri={props.location.pathname}>
      <PlanSwitcher planSelected={planSelected} switchPlan={switchPlan} />
      <PlanDetails planSelected={planSelected} planList={planList} />
    </BaseLayout>

  )
}

export default Suscripcion