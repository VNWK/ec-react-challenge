import { useContext } from 'react'

import Form from '../../components/Form'
import PlanSummary from '../../components/PlanSummary'
import BaseLayout from '../../layout/BaseLayout'

import { FormContext } from '../../contexts/form'

const Datos = (props) => {
  const { form, setForm, submitForm, errors } = useContext(FormContext)

  return (
    <BaseLayout uri={props.location.pathname}>
      <Form form={form} setForm={setForm} submitForm={submitForm} errors={errors} />
      <PlanSummary />
    </BaseLayout>

  )
}

export default Datos