import { useContext } from 'react'

import Form from '../../components/Form'
import PlanSummary from '../../components/PlanSummary'
import BaseLayout from '../../layout/BaseLayout'

import { FormContext } from '../../contexts/form'
import { AppContext } from '../../contexts/app'

const Datos = (props) => {
  const { form, setForm, submitForm, errors } = useContext(FormContext)
  const { planSelected, switchPlan, planList } = useContext(AppContext)

  return (
    <BaseLayout uri={props.location.pathname}>
      <Form form={form} setForm={setForm} submitForm={submitForm} errors={errors} />
      <PlanSummary planSelected={planSelected} planList={planList} switchPlan={switchPlan} />
    </BaseLayout>

  )
}

export default Datos