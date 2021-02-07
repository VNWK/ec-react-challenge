import Form from '../../components/Form'
import PlanSummary from '../../components/PlanSummary'
import BaseLayout from '../../layout/BaseLayout'

const Datos = (props) => {
  return (
    <BaseLayout uri={props.location.pathname}>
      <Form />
      <PlanSummary />
    </BaseLayout>

  )
}

export default Datos